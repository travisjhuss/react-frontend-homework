import React, { useState } from 'react';
import sortResultsService from '../../services/sort-results/sort-results.service';
import filterResultsService from '../../services/filter-results/filter-results.service';
import HotelList from '../HotelList/HotelList';

export default function Filters({ hotels }) {
  const [sortByValue, setSortByValue] = useState('');
  const [filterQuery, setFilterQuery] = useState('');

  // First it will filter hotels based on input value
  const filteredHotels = filterResultsService(hotels, filterQuery);
  // Then will sort hotels based on select value
  const sortedHotels = sortResultsService(filteredHotels, sortByValue);

  return (
    <>
      <div>
        <div className="filters">
          Filter by Hotel name
          <input
            type="text"
            className="input"
            // maxLength={1}
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
          Sort by
          <select
            name="sort"
            className="select"
            value={sortByValue}
            onChange={(e) => setSortByValue(e.target.value)}
          >
            <option value="rating">Recommended</option>
            <option value="ascending">Price low-to-high</option>
            <option value="descending">Price high-to-low</option>
          </select>
          <button
            className="button"
            onClick={() => {
              setSortByValue('reset');
              setFilterQuery('');
            }}
          >
            Reset
          </button>
        </div>
      </div>
      {/* Pass filtered and sorted hotels to HotelList for display */}
      <HotelList sortedHotels={sortedHotels} />
    </>
  );
}
