import React from 'react';

const GuestHeader = () => {
    // Static data for demonstration
    const userData = {
        name: 'Rajendrakumar',
        profilePic: '/assets/profile-pic.png', // Placeholder image
        loyaltyTier: 'Gold Member',
        loyaltyPoints: '1,250'
    };

    return (
        <div className="guest-header-card">
            <img src={userData.profilePic} alt="Profile" className="profile-pic" />
            <div className="user-info">
                <h3>{userData.name}</h3>
                <p>{userData.loyaltyTier}</p>
            </div>
            <div className="loyalty-badge">
                <span className="points">{userData.loyaltyPoints}</span>
                <span className="label">Loyalty Points</span>
            </div>
        </div>
    );
};

export default GuestHeader;
