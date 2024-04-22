import React, { useEffect, useState } from 'react';
import { useProduct } from 'vtex.product-context';
import { canUseDOM } from 'vtex.render-runtime';
import { isProductAvailable } from './utils/generalUtils';
import RenderPromotionInShelf from './components/RenderPromotionInShelf';
import RenderPromotionInPDP from './components/RenderPromotionInPDP';

interface EstilosPriceProps {
  view: string;
}

const usePromotionData = (selectedItem: any, dataLocalStorage: string | null) => {
  const [promotionData, setPromotionData] = useState({ price: 0, installments: 0 });

  useEffect(() => {
    if (dataLocalStorage !== null) {
      const availablePromotions = JSON.parse(dataLocalStorage);
      const { value: price, installments } = availablePromotions[selectedItem?.itemId] || {};
      setPromotionData({ price: price || 0, installments: installments || 0 });
    }
  }, [dataLocalStorage, selectedItem]);

  return promotionData;
};

const EstilosPrice = ({ view }: EstilosPriceProps) => {
  const { selectedItem } = useProduct();
  const isAvailable = selectedItem ? isProductAvailable(selectedItem) : false;
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const checkSessionStorage = () => {
      const dataLocalStorage = canUseDOM ? window.sessionStorage.getItem('PromotionsEstilosCard') : null;

      if (dataLocalStorage !== null) {
        setRendered(true);
      } else {
        setTimeout(checkSessionStorage, 1500); // Wait 1.5 seconds before rechecking
      }
    };

    checkSessionStorage();
  }, []);

  const { price, installments } = usePromotionData(selectedItem, window.sessionStorage.getItem('PromotionsEstilosCard'));

  if (!isAvailable || price === 0) {
    return null;
  }

  const PromotionComponent = view === 'pdp' ? RenderPromotionInPDP : RenderPromotionInShelf;

  return rendered ? <PromotionComponent priceProduct={price} installments={installments} /> : null;
};


export default EstilosPrice;
