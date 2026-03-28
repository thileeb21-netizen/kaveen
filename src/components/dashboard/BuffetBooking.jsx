import React from 'react';
import MenuItemCard from './MenuItemCard';
import GuestHeader from './GuestHeader'; // Re-using the header here

// Static data for now
const menuData = [
    { id: 1, name: 'Grilled Salmon', image: '/assets/food1.jpg', price: 22, tags: ['Gluten-Free'] },
    { id: 2, name: 'Vegetable Stir-fry', image: '/assets/food2.jpg', price: 16, tags: ['Vegan', 'Gluten-Free'] },
    { id: 3, name: 'Chicken Alfredo', image: '/assets/food3.jpg', price: 20, tags: [] },
    { id: 4, name: 'Caesar Salad', image: '/assets/food4.jpg', price: 12, tags: ['Vegetarian'] },
];

const BuffetBooking = () => {
    return (
        <>
            <GuestHeader />
            <section id="buffet-booking">
                <h2>Buffet & Dining</h2>
                <div className="menu-grid">
                    {menuData.map(item => (
                        <MenuItemCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="table-booking-section">
                    <h3>Dine-in? Book a Table</h3>
                    <p>Visual table mapping and selection will be available here.</p>
                    <button className="btn btn-secondary">Select a Table</button>
                </div>
            </section>
        </>
    );
};

export default BuffetBooking;
