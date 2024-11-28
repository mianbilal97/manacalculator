import React from 'react';

const ResultsDisplay = ({ results }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Calculated Results</h3>
      
      <div className="space-y-3">
        {Object.entries(results).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center">
            <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            <span className="font-semibold text-gray-800">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsDisplay;