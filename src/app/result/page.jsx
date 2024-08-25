"use client"; // Add this line

import React, { useEffect, useState } from 'react';
import CardComponent from '../components/Card'; // Updated import path
import Footer from '../components/Footer';
import Chart from '../components/LineChart';
import { CircularProgressbar } from 'react-circular-progressbar'; // Import CircularProgressbar
import 'react-circular-progressbar/dist/styles.css'; // Import styles for the progress bar

const Page = () => {
    // State to hold the data and loading status
    const [peopleData, setPeopleData] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    // Fetch data from the API
    const fetchData = async () => {
        setLoading(true); // Set loading to true before fetching data
        try {
            const response = await fetch('/api/competitors');
            const data = await response.json();
            // Assuming the API response matches the expected structure
            setPeopleData(data);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    // Use useEffect to fetch data on mount and at intervals
    useEffect(() => {
        fetchData(); // Fetch data when the component mounts

        const interval = setInterval(() => {
            fetchData(); // Fetch data at regular intervals
        }, 10000); // Update every 10 seconds (adjust as necessary)

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

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
                            path: { stroke: `rgba(62, 152, 199, 0.8)` },
                            text: { fill: '#f88', fontSize: '16px' },
                        }}
                    />
                </div>
            ) : (
                <>
                    <CardComponent people={peopleData} />
                    <Chart /> {/* Add the LineChart component here */}
                </>
            )}

            <Footer />
        </div>
    );
};

export default Page;
