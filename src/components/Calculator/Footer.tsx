import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-center py-8">
      <p className="flex items-center justify-center gap-2 text-gray-600">
        Made with <Heart className="w-5 h-5 text-red-500 animate-pulse" /> by Jack from San Diego, USA
      </p>
    </footer>
  );
};

export default Footer;