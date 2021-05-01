import React from 'react';

export default function HotelList({ sortedHotels }) {
  return (
    <div className="hotel-list">
      {!sortedHotels[0] && <h2>Sorry, your search has no results.</h2>}
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
            <span className="rewards">{hotel.hotelStaticContent.rating}</span>
          </div>
          <div className="price-details">
            <span className="price">
              <span
                dangerouslySetInnerHTML={{
                  __html: hotel.lowestAveragePrice.symbol,
                }}
              ></span>
              {hotel.lowestAveragePrice.amount}
            </span>
            <span className="rewards">{hotel.rewards.miles} miles</span>
            <button className="button">Select</button>
          </div>
        </div>
      ))}
    </div>
  );
}
