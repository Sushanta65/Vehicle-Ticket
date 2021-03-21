import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Cars.css'
const Cars = (props) => {
    const{name, img, wifi, ac} = props.car;
    const history = useHistory()
    const bookingCar = () => {
        history.push('/distination')
    }
    return (
       
        <div className="col-md-3 pt-3 pt-md-0">
            <div className="card card-height">
                <img className="card-img img-height" src={img} alt={name} />
                <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <small>WiFi: {wifi}</small><br/>
                <small>AC: {ac}</small>
                </div>
                <div className="card-footer py-2 pl-3">
                   <Link onClick={bookingCar}> <button className="btn btn-warning w-100"> <i className="fa fa-plus"></i> Select</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Cars;