import React, { useState, useEffect } from "react";
import styles from "./styles.css";

function CountdownPro({
    on,
    imageLogo,
    date,
    imageDesktop1,
    imageDesktop2,
    imageLink1,
    imageLink2,
    imageMobile1,
    imageMobile2,
}:any) {
    // const { navigate } = useRuntime();
    // const handleRedirect = (link) => navigate({ to: link });

    const getDiffDates = (date:any) => {
        let diffTest = new Date(date).getTime() - new Date().getTime();
        let days = Math.floor(diffTest / 1000 / 60 / 60 / 24);
        let hours = Math.floor(diffTest / 1000 / 60 / 60 - days * 24);
        let minutes =
            Math.floor(diffTest / 1000 / 60) - (days * 24 * 60 + hours * 60);
        let seconds =
            Math.floor(diffTest / 1000) -
            (days * 24 * 3600 + hours * 3600 + minutes * 60);
        let showBanner = date ? ((days < 0) ? false : true) : false;
        return { days: days < 10 ? `0${days}` : days, hours: hours < 10 ? `0${hours}` : hours, minutes: minutes < 10 ? `0${minutes}` : minutes, seconds: seconds < 10 ? `0${seconds}` : seconds, showBanner };
    };

    const [diffDates, setDiffDates] = useState(getDiffDates(date));

    useEffect(() => {
        const intervalGetDiffDates = setInterval(
            () => setDiffDates(getDiffDates(date)),
            1000
        );
        return () => clearInterval(intervalGetDiffDates);
    });

    return (
        <>
            {
                on && (diffDates.showBanner) &&
                <div className={styles.CountdownPro}>
                    <div className={styles.container}>
                        <div className={styles.logoTimer}>
                            <img className={styles.logo} src={imageLogo} />
                            {/* <div className={styles.containerTimer}>
                                <p className={styles.textTimer}>La oferta termina en</p>
                                <div className={styles.timer}>
                                    <div className={styles.unitTime}>{diffDates.hours}</div><span className={styles.dots}>:</span>
                                    <div className={styles.unitTime}>{diffDates.minutes}</div><span className={styles.dots}>:</span>
                                    <div className={styles.unitTime}>{diffDates.seconds}</div>
                                </div>
                            </div> */}
                        </div>
                        <div className={styles.containerProducts}>
                            <a
                                // onClick={() => handleRedirect(imageLink1)}
                                href={imageLink1}
                                className={styles.containerProductTk1}
                            >
                                <img className={styles.imgProductDeskTk} src={imageDesktop1} alt="Producto de Oferta Nocturna 1"/>
                                <img className={styles.imgProductMobileTk} src={imageMobile1} alt="Producto de Oferta Nocturna 1"/>
                            </a>
                            <a
                                // onClick={() => handleRedirect(imageLink2)}
                                href={imageLink2}
                                className={styles.containerProductTk2}
                            >
                                <img className={styles.imgProductDeskTk} src={imageDesktop2} alt="Producto de Oferta Nocturna 2"/>
                                <img className={styles.imgProductMobileTk} src={imageMobile2} alt="Producto de Oferta Nocturna 2"/>
                            </a>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

CountdownPro.defaultProps = {
    on: true,
    date: "March 20 2025 11:59:00",
    imageLogo: "/arquivos/logobm-170323.png",
    imageDesktop1: "/arquivos/bmtgp7002-1703v4.png",
    imageDesktop2: "/arquivos/bmdejn-1703.png ",
    imageLink1: "/mando-ps4-original-v2",
    imageLink2: "/set-de-3-maletas-de-bodega-inusa",
    imageMobile1: "/arquivos/bmtgp7002-1703-phonev2.png",
    imageMobile2: "/arquivos/bmdejn-1703-phone.png",
};

CountdownPro.getSchema = () => {
    return {
        title: "Ajustes de Oferta nocturna",
        type: "object",
        properties: {
            imageLogo:{
                            widget: {
                'ui:widget': 'image-uploader'
              },
                type: "string",
                title: "Logo",
                default: "/arquivos/logobm-170323.png",

            },
            imageDesktop1: {
                            widget: {
                'ui:widget': 'image-uploader'
              },
                type: "string",
                
                title: "Imagen de Desktop 1",
                default:
                    "/arquivos/bmdejn-1703-phone.png",
            },
            imageMobile1: {
                            widget: {
                'ui:widget': 'image-uploader'
              },
                type: "string",
                
                title: "Imagen de Mobile 1",
                default:
                    "/arquivos/bmdejn-1703-phone.png",
            },
            imageLink1: {
                           
                type: "string",
                
                title: "URL 1",
                default:
                    "/arquivos/bmdejn-1703-phone.png",
            },
            ////
            imageDesktop2: {
                            widget: {
                'ui:widget': 'image-uploader'
              },
                type: "string",
                
                title: "Imagen de Desktop 2",
                default: "/arquivos/bmdejn-1703-phone.png",
            },
            imageMobile2: {
                            widget: {
                'ui:widget': 'image-uploader'
              },
                type: "string",
                
                title: "Imagen de Mobile 2",
                default:
                    "/arquivos/bmdejn-1703-phone.png",
            },
            imageLink2: {
                           
                type: "string",
                
                title: "URL 2",
                default:
                    "/arquivos/bmdejn-1703-phone.png",
            },
            date: {                                                                                                                                                                                                                                                                                                                                            
                type: "string",
                
                title: "Fecha de apagado",
                format: "date-time",
                default: "July 27 2022 09:00:00",
            },
            on: {
                type: "boolean",
                title: "Encendido",
                // format: "radio",
                default: "true"
            }
        },
    };
};

export default CountdownPro;