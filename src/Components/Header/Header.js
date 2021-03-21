import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { UserContext } from './../../App';

const Header = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext)

    return (

        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/home"><h3>Vehicle Ticket</h3></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar"><span className="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/distination">Distination</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        {signedInUser.email ? <button className="btn btn-warning btn-sm" > <i className="fa fa-sign-out-alt"></i> Logout</button> : <Link className="nav-link" to="/login"><button className="btn btn-warning btn-sm"> <i className="fa fa-user"></i> LogIn</button></Link>}
                    </li>
                    <li className="nav-item ml-1"><img className="nav-item" src={signedInUser.photo} alt="" /></li>
                    <li className="nav-item"><strong className="nav-link">{signedInUser.email}</strong></li>
                </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;