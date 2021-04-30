import React, { useState, useEffect } from 'react';
import sortResultsService from '../../services/sort-results/sort-results.service';

export default function Filters() {
  return (
    <div>
      <div className="filters">
        Hotel name
        <input type="text" className="input" maxLength={1} />
        Price
        <select name="sort" className="select">
          <option value="">Recommended</option>
          <option value="ascending">Price low-to-high</option>
          <option value="descending">Price high-to-low</option>
        </select>
        <button className="button">Reset</button>
      </div>
    </div>
  );
}
