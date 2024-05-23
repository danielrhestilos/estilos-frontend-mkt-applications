import { useEffect, useState } from 'react';
import { SizeGuideProps } from './CustomSizeGuide'; // Asegúrate de ajustar la importación según tu estructura de archivos

export const useFilteredBrands = (containerSizeGuide: SizeGuideProps[], productBrandId: number) => {
    const [filteredBrands, setFilteredBrands] = useState<SizeGuideProps[]>([]);

    useEffect(() => {
        const filtered = containerSizeGuide.filter(({ brandId }) => {
            return productBrandId.toString() === brandId;
        });
        setFilteredBrands(filtered);
    }, [containerSizeGuide, productBrandId]);

    return filteredBrands;
};