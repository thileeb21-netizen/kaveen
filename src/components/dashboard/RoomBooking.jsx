import React, { useState } from 'react';
import RoomCard from './RoomCard';
import GuestHeader from './GuestHeader';

// Static data for now, assuming images will be in the public/assets directory
const roomsData = [
    { id: 1, name: 'Deluxe King Room', image: '/assets/room1.jpg', price: 150, amenities: ['AC', 'Wi-Fi', 'Mini-bar'], available: true },
    { id: 2, name: 'Standard Queen', image: '/assets/room2.jpg', price: 100, amenities: ['Non-AC', 'Wi-Fi'], available: false },
    { id: 3, name: 'Family Suite', image: '/assets/room3.jpg', price: 250, amenities: ['AC', 'Wi-Fi', 'Kitchenette'], available: true },
];

const RoomBooking = () => {
    const [price, setPrice] = useState(500);

    return (
        <>
            <GuestHeader />
            <section id="room-booking">
                <h2>Find Your Perfect Room</h2>
                <div className="filter-bar">
                <div className="filter-group">
                    <label htmlFor="room-type">Room Type</label>
                    <select id="room-type" name="room-type">
                        <option value="all">All Types</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label htmlFor="price-range">Price Range: <span className="price-value">${price}</span></label>
                    <input
                        type="range"
                        id="price-range"
                        name="price-range"
                        min="50"
                        max="500"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button className="btn btn-secondary">Apply Filters</button>
            </div>

            <div className="room-grid">
                {roomsData.map(room => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </section>
    );
};

export default RoomBooking;
