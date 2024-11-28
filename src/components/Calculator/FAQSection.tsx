import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is a mana calculator?",
      answer: "A mana calculator is a tool that helps Magic: The Gathering players determine the optimal number and distribution of lands in their deck based on the mana costs of their spells."
    },
    {
      question: "How accurate is this calculator?",
      answer: "The calculator uses proven mathematical formulas and considers multiple factors including converted mana costs, color requirements, and deck composition to provide highly accurate recommendations."
    },
    {
      question: "Why is mana base important?",
      answer: "A well-balanced mana base is crucial for consistent gameplay, ensuring you can cast your spells on curve and execute your deck's strategy effectively."
    },
    {
      question: "How do I count colored mana symbols?",
      answer: "Count each colored mana symbol in the casting costs of all cards in your deck. For example, a card costing 2RR would count as 2 red symbols."
    },
    {
      question: "What is CMC?",
      answer: "CMC (Converted Mana Cost) is the total amount of mana required to cast a spell, regardless of its color requirements. For example, 2RR has a CMC of 4."
    },
    {
      question: "Should I include artifact mana sources?",
      answer: "The calculator focuses on land-based mana sources. If you're using mana artifacts, you might want to adjust the final numbers slightly downward."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;