export const useCategoryMatch = (categoriesSelected: any, productCategoryIds: string[]) => {
    const categorySet = new Set(productCategoryIds);
    const coincidences: any[] = [];

    categoriesSelected.forEach(({ categoryList, imageUrl }: any) => {
        categoryList?.forEach(({ categoryId }: any) => {
            if (categorySet.has(categoryId)) {
                coincidences.push({ imageUrl, brandId: categoriesSelected.brandId });
            }
        });
    });

    return coincidences;
};