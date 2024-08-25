import React from 'react';

const CardComponent = ({ people }) => {
    // Sort people based on total score and get the top 3
    const sortedPeople = [...people].sort((a, b) => b.total - a.total);
    const topThree = sortedPeople.slice(0, 3);

    return (
        <div className="flex justify-between w-full items-center gap-5 p-5 bg-blue-200">
            {people.map((person, index) => {
                // Determine the rank based on the sorted array
                const rank = topThree.indexOf(person) + 1;

                return (
                    <div
                        key={index}
                        className={`relative bg-white text-black rounded-lg shadow-lg w-72 p-8 flex flex-col justify-center items-center ${person.highlight ? 'border-2 border-purple-600' : ''}`}
                    >
                        {rank > 0 && (
                            <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold py-1 px-2 rounded">
                                {rank} {rank === 1 ? 'st' : rank === 2 ? 'nd' : 'rd'}
                            </span>
                        )}
                        <img src='image_(7).png' alt={person.name} className="rounded-full w-24 h-24 mb-3" />
                        <h3 className="font-bold text-start">{person.name}</h3>
                        <div>Audience: {person.audience}%</div>
                        <div className="w-full h-2 bg-gray-300 rounded my-1">
                            <div className="h-full bg-green-500 rounded" style={{ width: `${person.audience}%` }}></div>
                        </div>
                        <div>Judges: {person.judges}</div>
                        <div className="w-full h-2 bg-gray-300 rounded my-1">
                            <div className="h-full bg-blue-500 rounded" style={{ width: `${person.judges}%` }}></div>
                        </div>
                        <div>Total: {person.total_votes}</div>
                        <div className="w-full h-2 bg-gray-300 rounded my-1">
                            <div className="h-full bg-orange-500 rounded" style={{ width: `${person.total}%` }}></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardComponent;