import React from 'react';
import { BookOpen } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center space-x-3">
    <div className="relative w-10 h-10">
      <BookOpen 
        className="w-full h-full text-[#D4AF37] transform hover:scale-105 transition-transform"
        strokeWidth={1.5}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-[#D4AF37] rounded-full" />
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold tracking-tight">Echoes of Ibadan</span>
      <span className="text-xs text-[#D4AF37] tracking-wider">HISTORICAL RECORDS</span>
    </div>
  </div>
);