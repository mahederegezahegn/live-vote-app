import React, { useState } from 'react';

interface VoteCardProps {
    number: number;
    name: string;
    imageUrl: string;
    audiencePercentage: number;
    isSelected: boolean;
    onSelect: (number: number) => void;
}

const VoteCard: React.FC<VoteCardProps> = ({ number, name, imageUrl, audiencePercentage, isSelected, onSelect }) => {
    const [error, setError] = useState<string | null>(null);

    const handleClick = async () => {
        try {
            // Call onSelect to update the parent component's state
            onSelect(number);

            // Post the vote data to the server
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    vote_date: new Date().toISOString(),
                    mac_address: 'user-mac-address', // Replace with actual value
                    competitor_id: number,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            if (result.success) {
                alert('Vote submitted successfully!');
            } else {
                alert('Failed to submit vote.');
            }
        } catch (error: any) {
            console.error('Error submitting vote:', error);
            setError('Error submitting vote: ' + error.message);
        }
    };

    return (
        <div
            className={`relative bg-white rounded-xl shadow-lg p-6 m-2 cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl ${
                isSelected ? 'border-4 border-blue-600 scale-110 shadow-2xl' : ''
            }`}
            onClick={handleClick}
            style={{ width: '250px' }}
        >
            <div className="absolute top-2 left-2 text-xl font-bold text-gray-600">{number}</div>
            <img src='image_(7).png' alt={name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500" />
            <h3 className="text-xl text-center font-semibold text-gray-800">{name}</h3>
            <div className="bg-gray-200 rounded-full h-2 mt-4">
                <div
                    className={`bg-green-500 h-full rounded-full transition-all duration-500 ease-in-out`}
                    style={{ width: isSelected ? '100%' : `${audiencePercentage}%` }}
                />
            </div>
            <p className="mt-2 text-sm text-gray-600 text-center">Audience: {audiencePercentage}%</p>
            <button
                className={`mt-4 w-full py-2 px-4 rounded-md text-white font-semibold transition-all ${
                    isSelected ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                {isSelected ? 'Selected!' : 'Vote for Me'}
            </button>

            {/* Adding subtle animations and background effect */}
            {isSelected && (
                <div className="absolute inset-0 bg-blue-200 opacity-30 rounded-lg animate-pulse"></div>
            )}

            {/* Display error message if any */}
            {error && (
                <div className="mt-4 text-red-600 text-center">
                    {error}
                </div>
            )}
        </div>
    );
};

export default VoteCard;
