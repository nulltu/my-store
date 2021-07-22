import React from 'react';
import { Link } from 'react-router-dom';
import { HOME, PRODUCTS } from '../../constants/routes';
import './footer.css';

function Footer() {

    let currentYear = new Date().getFullYear();

    return (
        <footer class="bg-light row">
            <div class="d-flex col-12 justify-content-center">
                <Link to={PRODUCTS} class="nav-link active" aria-current="page" >Products</Link>
                <Link to={HOME} class="nav-link active" aria-current="page" >Home</Link>
            </div>
            <div class="d-flex col-12 justify-content-center">
                <Link><i class="fab fa-facebook-f"></i></Link>
                <Link><i class="fab fa-instagram"></i></Link>
                <Link><i class="fab fa-tiktok"></i></Link>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <p className="message-footer">All rights reserved for myStore - ©{currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer
