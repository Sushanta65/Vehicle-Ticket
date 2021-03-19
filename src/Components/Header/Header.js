import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/Urban Riders.png';
import './Header.css'
const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
                <Link to="/home"><img className="logo" src={Logo} alt=""/></Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/distination">Distination</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blogs">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"><button className="btn btn-warning">Login</button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;