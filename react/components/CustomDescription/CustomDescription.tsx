import React from "react";
import { useProduct } from 'vtex.product-context'
function CustomDescription() {
    const contextPdp = useProduct()
    const { product } = contextPdp
    const { description
    } = product
    const arrToSplit = description.split("&&");
    const content = arrToSplit ? arrToSplit[1] : description
    return (
        <>
            <div>
                <p

                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </>
    )
}

export default CustomDescription;