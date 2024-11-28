import React, { useState } from 'react';
import { Calculator, Heart } from 'lucide-react';
import { calculateManaBase } from '../../utils/calculations';
import ManaInput from './ManaInput';
import ResultsDisplay from './ResultsDisplay';
import FAQSection from './FAQSection';
import SEOContent from './SEOContent';
import Header from './Header';
import Description from './Description';
import HowToUse from './HowToUse';
import Footer from './Footer';

export default function ManaCalculator() {
  const [deckStats, setDeckStats] = useState({
    totalCards: 0,
    totalCMC: 0,
    red: 0,
    green: 0,
    blue: 0,
    black: 0,
    white: 0,
    colorless: 0
  });

  const results = calculateManaBase(deckStats);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <Description />

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 transform transition-all hover:shadow-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ManaInput deckStats={deckStats} setDeckStats={setDeckStats} />
            <ResultsDisplay results={results} />
          </div>
        </div>

        <HowToUse />
        <FAQSection />
        <SEOContent />
        <Footer />
      </div>
    </div>
  );
}