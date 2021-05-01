import React from 'react';

export default function HotelList({ sortedHotels }) {
  return (
    <div className="hotel-list">
      {/* Checks if sortedHotels array is empty, if true, return a message to user */}
      {!sortedHotels[0] && <div className="results-message">Sorry, your search has no results.</div>}
      {sortedHotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`,
            }}
          ></div>
          <div className="hotel-details">
            <div className="hotel-name">{hotel.hotelStaticContent.name}</div>
            <div className="location">
              {hotel.hotelStaticContent.neighborhoodName}
            </div>
            <div className="rating">
              Rating:{' '}
              <span className="rating-score">
                {hotel.hotelStaticContent.rating}
              </span>
            </div>
          </div>
          <div className="price-details">
            <span className="price">
              <span
                className="currency-symbol"
                dangerouslySetInnerHTML={{
                  __html: hotel.lowestAveragePrice.symbol,
                }}
              ></span>
              {hotel.lowestAveragePrice.amount}
            </span>
            <div className="rewards">{hotel.rewards.miles}</div>
            <span className="rewards-caption">miles earned</span>
            <button className="button">Select</button>
          </div>
        </div>
      ))}
    </div>
  );
}
