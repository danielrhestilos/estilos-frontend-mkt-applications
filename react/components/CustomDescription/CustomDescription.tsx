import React, { useEffect, useState } from "react";
import { useProduct } from 'vtex.product-context'

function CustomDescription() {

    const contextPdp = useProduct()
    const { product } = contextPdp
    const [content, setContent] = useState('')

    useEffect(() => {
        if (product?.description) {
            const arrToSplit = product?.description?.split("&&");
            let cont = arrToSplit ? arrToSplit[1] : "";
            setContent(cont);
        }
    }, [product]);

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