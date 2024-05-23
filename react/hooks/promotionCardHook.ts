import { useEffect, useState } from 'react';


export default function usePromotionData(selectedItem: any, dataLocalStorage: string | null) {

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