import React from 'react';
import { Link } from 'react-router-dom';
import './cartWidget.css'

function CartWidget() {
    return (
        <div>
             <Link to="/"><i className="fas fa-shopping-cart"></i></Link>
        </div>
    )
}

export default CartWidget
