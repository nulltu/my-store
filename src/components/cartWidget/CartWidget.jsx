import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {

    const iconCartWidget = <FontAwesomeIcon  color="gray" size="lg" icon={faShoppingCart} />

    return (
        <div>
             <Link to="/">{iconCartWidget}</Link>
        </div>
    )
}

export default CartWidget
