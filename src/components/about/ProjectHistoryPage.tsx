import React from 'react';
import { Clock, BookOpen, Users, Rocket } from 'lucide-react';

export default function ProjectHistoryPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#064635] mb-4">
            The Journey of Echoes of Ibadan: Preserving Heritage, One Page at a Time
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        </div>

        {/* Origins */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#064635] mb-6">Origins</h2>
          <p className="text-gray-700 leading-relaxed">
            The idea for Echoes of Ibadan was born out of a profound recognition of the need to preserve 
            Yoruba history in a way that is accessible, engaging, and enduring. Lola Tomori, inspired by 
            her passion for history and urban development, embarked on this journey to document and share 
            the untold stories of Ibadan—a city that has stood at the heart of Yoruba culture for centuries.
          </p>
        </div>

        {/* Milestones */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-[#064635] mb-6">Key Milestones</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <BookOpen className="h-8 w-8 text-[#D4AF37] mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#064635] mb-2">Initial Research</h3>
                <p className="text-gray-600">
                  The project began with the meticulous collection of historical documents, oral histories, 
                  and manuscripts from Ibadan's archives and local historians.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <Clock className="h-8 w-8 text-[#D4AF37] mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#064635] mb-2">Digital Transformation</h3>
                <p className="text-gray-600">
                  Recognizing the power of technology, Echoes of Ibadan transitioned into a digital platform, 
                  ensuring the preservation of fragile records for future generations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <Users className="h-8 w-8 text-[#D4AF37] mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#064635] mb-2">Community Engagement</h3>
                <p className="text-gray-600">
                  The project has partnered with scholars, cultural institutions, and local communities to 
                  ensure its accuracy and authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Looking Ahead */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Rocket className="h-8 w-8 text-[#D4AF37] mr-4" />
            <h2 className="text-2xl font-semibold text-[#064635]">Looking Ahead</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Echoes of Ibadan is more than a repository; it is a living archive that grows with each new 
            discovery and contribution. As we expand our collections and enhance our interactive features, 
            we remain committed to our mission of honoring the past while paving the way for a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
}