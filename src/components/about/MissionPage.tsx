import React from 'react';
import { Target, Eye, Book, Heart } from 'lucide-react';

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-[#D4AF37] mr-4" />
            <h2 className="text-3xl font-bold text-[#064635]">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission at Echoes of Ibadan is to preserve and celebrate the rich cultural and historical 
            legacy of Ibadan and the Yoruba people. Through the meticulous curation of historical documents, 
            manuscripts, and publications, we aim to create a lasting archive that educates, inspires, and 
            fosters a deep appreciation for our shared heritage.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Eye className="h-8 w-8 text-[#D4AF37] mr-4" />
            <h2 className="text-3xl font-bold text-[#064635]">Our Vision</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision a world where Yoruba history is accessible to all—where the stories of our ancestors 
            illuminate the path for future generations. Echoes of Ibadan aspires to be the foremost digital 
            archive for Yoruba history, combining modern technology with timeless traditions to bridge the 
            gap between the past and the future.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Book className="h-8 w-8 text-[#D4AF37] mb-4" />
            <h3 className="text-xl font-semibold text-[#064635] mb-2">Preservation</h3>
            <p className="text-gray-600">
              Safeguarding historical documents and cultural knowledge for future generations through 
              digital archiving and careful documentation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Heart className="h-8 w-8 text-[#D4AF37] mb-4" />
            <h3 className="text-xl font-semibold text-[#064635] mb-2">Cultural Pride</h3>
            <p className="text-gray-600">
              Fostering a deep appreciation for Yoruba heritage and inspiring younger generations to 
              embrace their cultural identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}