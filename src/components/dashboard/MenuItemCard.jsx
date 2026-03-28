import React from 'react';

const MenuItemCard = ({ item }) => {
    const { name, image, price, tags } = item;

    return (
        <div className="card menu-item-card">
            <img src={image} alt={name} className="menu-item-image" />
            <div className="menu-item-content">
                <h3>{name}</h3>
                <p className="menu-item-price">${price}</p>
                {tags && tags.length > 0 && (
                    <div className="dietary-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className={`tag tag-${tag.toLowerCase().replace(' ', '-')}`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <button className="btn btn-primary">Add to Order</button>
            </div>
        </div>
    );
};

export default MenuItemCard;
