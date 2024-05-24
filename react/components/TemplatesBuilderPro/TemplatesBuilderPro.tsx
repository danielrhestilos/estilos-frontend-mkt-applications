import React from "react";
import Layout from "./Layout";

function TemplatesBuilderPro(props: any) {
    return (
        <div>
            {props.elementos.map((child: any, index: number) => (
                <Layout
                    key={index}
                    typeLayout={child.typeLayout}
                >
                    {child.images.map((image: any, imgIndex: number) => (
                        <img
                            key={imgIndex}
                            src={image.urlImage}
                            alt={image.altImage}
                        />
                    ))}
                </Layout>
            ))}
        </div>
    );
}

TemplatesBuilderPro.schema = {
    title: 'LayoutComponent',
    description: 'A component that displays a layout with images',
    type: 'object',
    properties: {
        elementos: {
            title: 'Elementos',
            description: 'Conjunto de elementos a mostrar',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    typeLayout: {
                        title: 'Tipo del layout',
                        description: 'Tipo del layout de este elemento. Considera que los collage tienen 4 imágenes',
                        default: 'solo',
                        enum: ['solo', 'duo', 'triple', 'collage1', 'collage2', 'collage-pro'],
                        type: 'string',
                    },
                    images: {
                        title: 'Imagenes',
                        description: 'Imagenes asociadas al layout',
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                urlImage: {
                                    title: 'Imagen URL',
                                    description: 'Url de la imagen',
                                    type: 'string',
                                    widget: { // here you can choose a file in your computer
                                        "ui:widget": "image-uploader"
                                    },
                                },
                                altImage: {
                                    title: 'Alt Image',
                                    description: 'The alt text for the image',
                                    type: 'string',
                                },
                                ContentSeoImage: {
                                    title: 'Content SEO Image',
                                    description: 'SEO content for the image',
                                    type: 'string',
                                },
                                contentSeoOptional: {
                                    title: 'Content SEO Optional',
                                    description: 'Optional SEO content for the image',
                                    type: 'string',
                                    default: null,
                                },
                            },
                            required: ['urlImage', 'altImage', 'ContentSeoImage'],
                        },
                    },
                },
                required: ['typeLayout', 'images'],
            },
        },
    },
};

export default TemplatesBuilderPro;