import React from 'react';
import { Link } from 'react-router-dom';
import './cartWidget.css'

function CartWidget() {
    return (
        <div>
             <Link to="/"><i class="fas fa-shopping-cart"></i></Link>
        </div>
    )
}

export default CartWidget
