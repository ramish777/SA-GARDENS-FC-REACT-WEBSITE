import React from 'react';

const ScheduleCard = ({ day, time, activity, location }) => {
    return (
        <div className="schedule-card bg-white shadow-md rounded-lg overflow-hidden p-4">
            <h3 className="text-xl font-bold">{day}</h3>
            <p className="text-gray-600">{time}</p>
            <p className="text-gray-600">{activity}</p>
            <p className="text-gray-600">{location}</p>
        </div>
    );
};

export default ScheduleCard;