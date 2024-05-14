import React, { useEffect, useState } from "react";
import { useProduct } from 'vtex.product-context'

function CustomDescription() {

    const contextPdp = useProduct()
    const { product } = contextPdp
    const arrToSplit = product?.description?.split("&&");
    // const content = arrToSplit ? arrToSplit[1] : "";
    const [content, setContent] = useState('')

    useEffect(() => {
        let cont = arrToSplit ? arrToSplit[1] : "";
        setContent(cont);
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