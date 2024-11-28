import React from 'react';

const ManaInput = ({ deckStats, setDeckStats }) => {
  const handleInputChange = (field, value) => {
    setDeckStats(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Deck Information</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Non-Land Cards</label>
          <input
            type="number"
            value={deckStats.totalCards}
            onChange={(e) => handleInputChange('totalCards', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all"
            placeholder="Enter total cards..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Total CMC</label>
          <input
            type="number"
            value={deckStats.totalCMC}
            onChange={(e) => handleInputChange('totalCMC', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all"
            placeholder="Enter total CMC..."
          />
        </div>

        {/* Color Requirements */}
        {['red', 'green', 'blue', 'black', 'white', 'colorless'].map(color => (
          <div key={color}>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {color} Mana Requirements
            </label>
            <input
              type="number"
              value={deckStats[color]}
              onChange={(e) => handleInputChange(color, e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all"
              placeholder={`Enter ${color} requirements...`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManaInput;