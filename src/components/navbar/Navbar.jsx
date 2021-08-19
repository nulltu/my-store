import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/routes';
import CartWidget from '../cartWidget';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#">MyStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={HOME} className="nav-link active" aria-current="page" >Home</Link>
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
