import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ['0', '1', '2', '3'],
        datasets: [
            {
                label: 'Person 1',
                data: [1500, 1200, 1800, 1300],
                fill: true,
                backgroundColor:'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                tension: 0.4,
            },
            {
                label: 'Person 2',
                data: [1000, 2000, 1500, 1800],
                fill: true,
                backgroundColor:'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                tension: 0.4,
            },
            {
                label: 'Person 3',
                data: [1200, 900, 1300, 1600],
                fill: true,
                backgroundColor:'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                tension: 0.4,
            },
            {
                label: 'Person 4',
                data: [1200, 900, 1300, 1600],
                fill: true,
                backgroundColor:'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(255, 206, 86, 1)',
                pointBackgroundColor: 'rgba(255, 206, 86, 1)',
                tension: 0.4,
            },
            {
                label: 'Person 5',
                data: [1900, 200, 300, 600],
                fill: true,
                backgroundColor:'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(153, 102, 255, 1)',
                pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X Axis',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Axis',
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-white w-full rounded-lg shadow-md p-5">
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;