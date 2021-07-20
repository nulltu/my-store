import React from 'react'
import { Link } from 'react-router-dom';
import { HOME, PRODUCTS } from '../../constants/routes';
import CartWidget from '../cartWidget';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand" href="#">MyStore</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to={HOME} class="nav-link active" aria-current="page" >Home</Link>
                            <Link to={PRODUCTS} class="nav-link" >Products</Link>
                        </div>
                        <div>
                           <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
