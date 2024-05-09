import React from 'react';
// import { Button } from 'vtex.styleguide'
import useCheckout from '../../hooks/checkoutHook';
import styles from './styles.css'


function CustomCheckoutButton() {
    const goToCheckout = useCheckout()
    return (
        <button className={`${styles.minicartCheckoutButton}`} onClick={() => goToCheckout("/checkout#/cart")}>
            Ir al Carrito
        </button>
    );
}

export default CustomCheckoutButton;