import React, { useEffect, useState } from 'react';
import FakeData from '../../fakeData/mockData.json';
import Mens from '../../assets/Images/peopleicon.png';
import './Distination.css'

const Distination = () => {
    const [search, setSearch] = useState(false)
    const [distination, setDistination] = useState({})
    const [cars, setCars] = useState([]) // I tried to do dynamicaly set selected car
    useEffect(() => {
        setCars(FakeData[2])
    }, [])
    
    
    const {img, name, bookingPrice, mens} = cars;
    const submitDistination = () => {
        const pickFromValue = document.getElementById('pickFrom').value;
        const pickToValue = document.getElementById('pickTo').value;
        const dateValue = document.getElementById('date').value;
        const distinationIs = ({
            pickFrom: pickFromValue,
            pickTo: pickToValue,
            date: dateValue
        })
        setDistination(distinationIs)
        if(!search){
            setSearch(true)
        }
    }
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    {!search && <div className="selectDistination border p-3 rounded bg-light">
                        <h5 className="pb-2">Search Your Distination.</h5>
                        <form onSubmit={submitDistination}>
                            <label htmlFor="picFrom">Pink From</label>
                            <input className="form-control" id="pickFrom" type="text" required />
                            <label htmlFor="pickTo">Pick To</label>
                            <input className="form-control" id="pickTo" type="text" required />
                            <label htmlFor="date">Select a Date</label>
                            <input className="form-control" id="date" type="date" required />
                            <button type="submit" className=" btn btn-danger w-100 mt-3">Search</button>
                        </form>
                    </div>
                   }
                   {search && <div className="border p-1 rounded bg-light">
                       <div className="selectedVehicle">
                           <div className="m-1 p-2 border bg-warning">
                               <strong>From: </strong><span>{distination.pickFrom}</span><br/>
                               <strong>To: </strong><span> { distination.pickTo}</span><br/>
                               <strong className="text-right">Date: </strong><span> { distination.date}</span>
                           </div>
                        
                           {/* {30% time I have spand to set it dynamicaly but I can't} */}
                            <div className="row text-center pt-3">
                                <div className="col-md-3">
                                    <img style={{ width: "70px" }} src={img} alt="" />
                                </div>
                                <div className="col-md-3">
                                    <strong>{name}</strong>
                                </div>
                                <div className="col-md-3">
                                    <img style={{ width: "25px" }} src={Mens} alt="" /><span> {mens}</span>
                                </div>
                                <div className="col-md-3">
                                    <p>${bookingPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="col-md-8 col-sm-6">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98074.94623070348!2d90.36771572918344!3d24.005239237457438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dafdd8aa72a1%3A0xe3a23793cb030fdb!2sGazipur!5e0!3m2!1sen!2sbd!4v1616250885422!5m2!1sen!2sbd" height="450px" className="w-100 iframe" style={{border: "0",borderRadius: "5px"}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
    
};

export default Distination;