import React from 'react';

const AgeCategoryCard = ({ ageRange, description, schedule }) => {
    return (
        <div className="age-category-card bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                <h3 className="text-xl font-bold">{ageRange}</h3>
                <p className="text-gray-600">{description}</p>
                <img src={schedule} alt={`${ageRange} schedule`} className="mt-4 w-full h-48 object-cover" />
            </div>
        </div>
    );
};

export default AgeCategoryCard;