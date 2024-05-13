import React, { useState, useEffect } from "react";
import { useProduct } from "vtex.product-context";
import styles from "./styles.css";

function CustomDescription() {
    const [showMore, setShowMore] = useState(false);
    const [sectionHeight, setSectionHeight] = useState(0);
    const contextPdp = useProduct();
    const { product } = contextPdp;
    const { description } = product;
    const arrToSplit = description.split("&&");
    const content = arrToSplit ? arrToSplit[0] : description;

    useEffect(() => {
        const section = document.getElementById("custom-description-section");
        if (section) {
            setSectionHeight(section.offsetHeight);
        }
    }, [description]);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div style={{ position: "relative" }} className={styles.customSpecificationsContainer}>
            <section id="custom-description-section">
                <div
                    className={styles.contentSpecifications}
                    style={{ maxHeight: `${!showMore ? "100%" : "140px"}` }}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </section>
            <div className="vtex-store-components-3-x-pointerEventsNone  bottom-0 w-100 h-100 flex-column justify-end flex">
                <div
                    className={showMore ? "vtex-store-components-3-x-fadeBottom w-100 h-50" : ""}
                    style={{ transition: "all 400ms ease-in-out 0s" }}
                ></div>
                {sectionHeight > 140 && (
                    <div className={`${styles.containerShowMore} vtex-store-components-3-x-pointerEventsAuto tc w-100 bg-base`}>
                        <button onClick={() => { toggleShowMore() }} className="vtex-store-components-3-x-showMoreButton c-action-primary t-action pointer ma5 bn outline-0">
                            {showMore ? "Mostrar más" : "Mostrar menos"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomDescription;