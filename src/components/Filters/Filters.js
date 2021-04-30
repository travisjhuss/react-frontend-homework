import React, { useState, useEffect } from 'react';
import sortResultsService from '../../services/sort-results/sort-results.service';
import HotelList from '../HotelList/HotelList';

export default function Filters({hotels}) {
  const [sortByValue, setSortByValue] = useState('');

  const sortedHotels = sortResultsService(hotels, sortByValue);
  
  return (
    <>
    <div>
      <div className="filters">
        Hotel name
        <input type="text" className="input" maxLength={1} />
        Price
        <select name="sort" className="select" onChange={(e) => setSortByValue(e.target.value)}>
          <option value="">Recommended</option>
          <option value="ascending">Price low-to-high</option>
          <option value="descending">Price high-to-low</option>
        </select>
        <button className="button">Reset</button>
      </div>
    </div>
    <HotelList sortedHotels={sortedHotels}/>
    </>
  );
}
