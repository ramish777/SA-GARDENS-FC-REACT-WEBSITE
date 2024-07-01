import React from 'react';

const PricingCard = ({ ageCategory, price, trainingTime, sessionsPerWeek, importantInfo }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{ageCategory}</h3>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">${price} / month</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Training Time: {trainingTime}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Sessions per Week: {sessionsPerWeek}</p>
            <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside mb-6">
                {importantInfo.map((info, index) => (
                    <li key={index}>{info}</li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;