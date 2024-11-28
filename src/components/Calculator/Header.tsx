import React from 'react';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <Calculator className="w-8 h-8 text-indigo-600" />
      <h1 className="text-3xl font-bold text-gray-800">MTG Mana Calculator</h1>
    </div>
  );
};

export default Header;