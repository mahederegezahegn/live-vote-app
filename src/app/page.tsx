"use client"; // Add this line

import React, { useState, useEffect } from 'react';
import VoteCard from './components/VoteCard';
import Footer from './components/Footer';
import { CircularProgressbar } from 'react-circular-progressbar'; // Import CircularProgressbar
import 'react-circular-progressbar/dist/styles.css'; // Import styles for the progress bar

// Define the type for the fetched vote options
type VoteOption = {
    number: number;
    name: string;
    imageUrl: string;
    audiencePercentage: number;
};

const Page: React.FC = () => {
    const [voteOptions, setVoteOptions] = useState<VoteOption[]>([]);
    const [selectedVote, setSelectedVote] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const fetchVoteOptions = async () => {
            try {
                const response = await fetch('/api/competitors');
                const data = await response.json();
                
                // Format data to match the VoteOption type
                const formattedData = data.map((item: any, index: number) => ({
                    number: index + 1, // Assuming the API data doesn't include a number, generate sequentially
                    name: item.name,
                    imageUrl: '/path-to-images/' + (index + 1) + '.png', // Modify this path based on your actual image paths
                    audiencePercentage: item.audience || 0
                }));

                setVoteOptions(formattedData);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false); // Set loading to false after data fetching
            }
        };

        fetchVoteOptions();
    }, []); // Empty dependency array means this runs once when the component mounts

    const handleSelect = (number: number) => {
        setSelectedVote(number);
    };

    return (
        <div className="font-sans bg-blue-600 text-white p-5 flex flex-col items-center">
            <header className="flex justify-between w-full p-4 bg-blue-500">
                <h1 className="text-xl">Vote Your Favorite</h1>
                <nav>
                    <a href="/" className="text-white mr-4">Home</a>
                    <a href="/result" className="text-white">Result</a>
                </nav>
            </header>
            
            {loading ? (
                <div className="flex justify-center items-center w-full h-96">
                    <CircularProgressbar
                        value={66} // Optional: Set a fixed value or calculate progress
                        text={'Loading...'}
                        styles={{
                            path: { stroke: `rgba(62, 152, 199, ${66 / 100})` },
                            text: { fill: '#f88', fontSize: '16px' },
                        }}
                    />
                </div>
            ) : (
                <div className="flex justify-around w-full flex-wrap mt-5">
                    {voteOptions.map(option => (
                        <VoteCard 
                            key={option.number} 
                            number={option.number} 
                            name={option.name} 
                            imageUrl={option.imageUrl} 
                            audiencePercentage={option.audiencePercentage} 
                            isSelected={selectedVote === option.number}
                            onSelect={handleSelect} 
                        />
                    ))}
                </div>
            )}
            
            <Footer />
        </div>
    );
};

export default Page;
