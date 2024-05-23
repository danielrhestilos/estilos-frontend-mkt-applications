import { useEffect, useState } from 'react';
import { useProduct } from 'vtex.product-context';

export const useProductCategoryIds = () => {
    const { product: { categoryTree } } = useProduct();
    const [categoryIds, setCategoryIds] = useState<string[]>([]);

    useEffect(() => {
        const ids = categoryTree?.map((category: { id: number }) => category.id.toString()) || [];
        setCategoryIds(ids);
    }, [categoryTree]);

    return categoryIds;
};
