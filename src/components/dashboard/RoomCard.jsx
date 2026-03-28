import React from 'react';

const RoomCard = ({ room }) => {
    const { name, image, price, amenities, available } = room;

    return (
        <div className="card room-card">
            <img src={image} alt={name} className="room-image" />
            <div className="room-card-content">
                <h3>{name}</h3>
                <p className="room-price">${price} / night</p>
                <ul className="room-amenities">
                    {amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                    ))}
                </ul>
                <div className="room-card-footer">
                    <span className={`availability ${available ? 'available' : 'unavailable'}`}>
                        {available ? 'Available' : 'Booked'}
                    </span>
                    <button className="btn btn-primary" disabled={!available}>
                        {available ? 'Book Now' : 'Booked'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
