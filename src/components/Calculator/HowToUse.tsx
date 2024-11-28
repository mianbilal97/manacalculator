import React from 'react';

const HowToUse = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use the Calculator</h2>
      <div className="space-y-4">
        <p className="text-gray-600">1. Enter the total number of non-land cards in your deck</p>
        <p className="text-gray-600">2. Input the total converted mana cost (CMC) of all spells</p>
        <p className="text-gray-600">3. Specify the color requirements for each mana type</p>
      </div>
    </div>
  );
};

export default HowToUse;