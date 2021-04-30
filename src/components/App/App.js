import React, { useState, useEffect } from 'react';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';
// new components for dryer code
import Filters from '../Filters/Filters';
import HotelList from '../HotelList/HotelList';

const App = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotels(response.results.hotels)
        })
    }, []);

    console.log('hotels:', hotels)
    return (
        <div className="app-container">
            <div className="content">
                {/* Filters will sort data and send to HotelList component */}
                <Filters hotels={hotels}/>
            </div>
        </div>
    )
}

export default App;
