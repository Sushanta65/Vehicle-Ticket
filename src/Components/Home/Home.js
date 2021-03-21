import React, { useState, useEffect } from 'react';
import FakeData from '../../fakeData/mockData.json'
import Cars from '../Cars/Cars';
import HomeBgImg from '../../assets/Images/homeBg.jpg'
const Home = () => {
    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
      setVehicles(FakeData)
    }, [])
    
    return (
        <div style={{
            backgroundImage: `url(${HomeBgImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                height: '100%'
            }} className="py-5">
                <div className="container">
                    <h3 className="text-light text-center">Choose Your Vehicle to Travel.</h3>
                    <div className="row py-5">
                        {
                            vehicles.map(vehicle => <Cars key={vehicle.id} car={vehicle}></Cars>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;