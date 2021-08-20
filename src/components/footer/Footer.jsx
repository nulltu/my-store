import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/routes';
import './footer.css';

function Footer() {

    let currentYear = new Date().getFullYear();

    return (
        <footer className="bg-light row">
            <div className="d-flex col-12 justify-content-center">
                <Link to={HOME} className="nav-link active" aria-current="page" >Home</Link>
            </div>
            <div className="d-flex col-12 justify-content-center">
                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                <Link to="/"><i className="fab fa-instagram"></i></Link>
                <Link to="/"><i className="fab fa-tiktok"></i></Link>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <p className="message-footer">All rights reserved for myStore - ©{currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer
