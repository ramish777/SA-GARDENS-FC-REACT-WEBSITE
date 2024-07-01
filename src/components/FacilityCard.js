import React from 'react';

const FacilityCard = ({ name, description, image }) => {
    return (
        <div className="facility-card bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default FacilityCard;