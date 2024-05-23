import React, { useState } from 'react'
import styles from './styles.css'
import { Modal } from 'vtex.styleguide'
import { useProduct } from 'vtex.product-context';
import { useCategoryMatch } from '../../hooks/categoryMatchHook';
import { useProductCategoryIds } from '../../hooks/categoryIdsHook';
import { useFilteredBrands } from '../../hooks/filteredBrandsHook';

function CustomSizeGuideTrigger(props: any) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const handles = {
    //     modal: 'modal',
    //     backdropContainer: 'backdropContainer',
    //     backdrop: 'backdrop',
    // }
    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    }

    const contextPdp = useProduct();
    const { product: { brandId: productBrandId } } = contextPdp;

    let filteredChildren = React.Children.map(props.children, (child) => {
        console.log('props.children', props.children);

        const productCategoryIds = useProductCategoryIds();
        const brandSelected = useFilteredBrands(child.props.blockProps.containerSizeGuide, productBrandId);

        if (brandSelected.length === 0) {
            return null;
        }

        const ImageAndBrandMatch = useCategoryMatch(brandSelected[0].categories, productCategoryIds);

        if (ImageAndBrandMatch.length === 0) {
            return null;
        }

        return child;
    });
    // filteredChildren.props = {}
    // filteredChildren.props.tabIndex = '-1'
    return (
        <>
            {(filteredChildren.length > 0) && <div>
                <button onClick={handleModalToggle} className={styles.sizeGuideCTA}>
                    <svg fill="none" width="22" height="22" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><use href="#hpa-sizeguide" xlinkHref="#hpa-sizeguide"></use></svg>
                    <span>Guía de tallas</span></button>
                <Modal

                    // backdrop="none"
                    // handles={handles}
                    // open={isModalOpen}
                    // onClose={() => { setIsModalOpen(!isModalOpen) }}
                    // onBackdropClick={() => { setIsModalOpen(!isModalOpen) }}
                    // backdrop,
                    style={{ backgroundColor: 'red', color: 'white' }}
                    // showTopBar={true}
                    // title={"Guía de tallas"}
                    responsiveFullScreen={true}
                    centered
                    // style={{ width: "auto" }}
                    isOpen={isModalOpen}
                    className={styles.sizeGuideCTA}

                    onClose={handleModalToggle}
                >


                    {filteredChildren}


                </Modal>
            </div >}
        </>
    );
}

export default CustomSizeGuideTrigger;