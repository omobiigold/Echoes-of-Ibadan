import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Info, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { publications } from './publications/PublicationsList';

// Combine all locations and timeline events from publications
const historicalLandmarks = publications.reduce((acc, pub) => {
  if (pub.locations) {
    return [...acc, ...pub.locations.map(loc => ({
      id: `${pub.id}-${loc.name}`,
      name: loc.name,
      coordinates: loc.coordinates,
      description: loc.description,
      publicationId: pub.id,
      publicationTitle: pub.title
    }))];
  }
  return acc;
}, [] as any[]);

const timelineEvents = publications.reduce((acc, pub) => {
  if (pub.timelineEvents) {
    return [...acc, ...pub.timelineEvents.map(event => ({
      ...event,
      id: event.id,
      publicationId: pub.id,
      publicationTitle: pub.title
    }))];
  }
  return acc;
}, [] as any[]).sort((a, b) => a.year - b.year);

export default function InteractiveFeatures() {
  const [selectedLandmark, setSelectedLandmark] = useState<typeof historicalLandmarks[0] | null>(null);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [showLandmarkDetails, setShowLandmarkDetails] = useState(false);
  const [mapError, setMapError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Historical Map Section */}
        <section id="map" className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#064635] mb-4">Interactive Historical Map</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the historical landmarks of Ibadan and surrounding regions through our interactive map. 
              Click on the markers to learn more about each location's significance in Yoruba history.
            </p>
          </div>

          <div className="relative h-[600px] bg-[#F5F5DC] rounded-xl shadow-lg overflow-hidden">
            {/* Base Map Image */}
            {!mapError ? (
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Historical Map of West Africa"
                  className="w-full h-full object-cover"
                  onError={() => setMapError(true)}
                />
                <div className="absolute inset-0 bg-[#064635]/20 mix-blend-multiply"></div>
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(rgba(245, 245, 220, 0.1), rgba(245, 245, 220, 0.2))',
                  mixBlendMode: 'overlay'
                }}></div>
              </div>
            ) : (
              <div className="w-full h-full bg-[#F5F5DC] flex items-center justify-center">
                <div className="text-center p-8">
                  <AlertCircle className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
                  <p className="text-[#064635] font-medium">
                    Map image could not be loaded. Historical landmarks are still accessible through the markers.
                  </p>
                </div>
              </div>
            )}

            {/* Map Border */}
            <div className="absolute inset-0 border-4 border-[#D4AF37]/20 rounded-lg"></div>

            {/* Landmark Markers */}
            {historicalLandmarks.map((landmark) => (
              <button
                key={landmark.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                style={{ 
                  left: `${landmark.coordinates.x}%`,
                  top: `${landmark.coordinates.y}%`
                }}
                onClick={() => {
                  setSelectedLandmark(landmark);
                  setShowLandmarkDetails(true);
                }}
              >
                <div className="relative">
                  {/* Outer glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#D4AF37] blur-md transform scale-150 opacity-30"></div>
                  
                  {/* Pin icon with enhanced visibility */}
                  <div className="relative">
                    <MapPin className="h-12 w-12 text-[#D4AF37] drop-shadow-lg 
                                     stroke-2 group-hover:text-[#064635] transition-colors duration-300" />
                    
                    {/* Pulsing effect */}
                    <div className="absolute inset-0 animate-ping bg-[#D4AF37] rounded-full opacity-20"></div>
                    
                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                  w-4 h-4 bg-white rounded-full shadow-lg border-2 border-[#D4AF37]
                                  group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                </div>
                
                {/* Location label */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                               bg-white/95 backdrop-blur-sm text-[#064635] px-4 py-2 rounded-lg 
                               text-sm font-semibold whitespace-nowrap opacity-0 
                               group-hover:opacity-100 transition-opacity duration-300
                               shadow-lg z-10 border border-[#D4AF37]/20">
                  {landmark.name}
                </div>
              </button>
            ))}

            {/* Landmark Details Panel */}
            {selectedLandmark && showLandmarkDetails && (
              <div className="absolute right-4 top-4 w-96 bg-white/95 backdrop-blur-sm rounded-lg 
                             shadow-xl p-6 transform transition-transform duration-300 z-20
                             border border-[#D4AF37]/20">
                <button
                  onClick={() => setShowLandmarkDetails(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-[#064635]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="text-xl font-bold text-[#064635] mb-4">{selectedLandmark.name}</h3>
                <p className="text-gray-600 mb-4">{selectedLandmark.description}</p>
                <div className="text-sm text-[#064635]">
                  <p className="font-semibold">Referenced in:</p>
                  <a 
                    href={`/publications/${selectedLandmark.publicationId}`}
                    className="text-[#D4AF37] hover:underline"
                  >
                    {selectedLandmark.publicationTitle}
                  </a>
                </div>
              </div>
            )}

            {/* Map Legend */}
            <div className="absolute left-4 bottom-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg
                          border border-[#D4AF37]/20">
              <h4 className="text-sm font-semibold text-[#064635] mb-2">Map Legend</h4>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-sm text-gray-600">Historical Landmark</span>
              </div>
            </div>

            {/* Compass Rose */}
            <div className="absolute right-4 bottom-4 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full 
                          shadow-lg border border-[#D4AF37]/20 flex items-center justify-center">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#D4AF37]"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#D4AF37]"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-[#D4AF37]"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-[#D4AF37]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline">
          <h2 className="text-3xl font-bold text-[#064635] mb-8 text-center">Timeline of Ibadan</h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4AF37]" />
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`relative ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                  }`}
                  onMouseEnter={() => setActiveTimelineIndex(index)}
                >
                  <div className={`flex items-center ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <div className={`bg-white rounded-lg shadow-lg p-6 max-w-lg transform transition-all duration-300 ${
                      index === activeTimelineIndex ? 'scale-105 ring-2 ring-[#D4AF37]' : ''
                    }`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
                          <span className="text-[#064635] font-bold">{event.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#064635] ml-4">{event.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <a 
                        href={`/publications/${event.publicationId}`}
                        className="text-[#D4AF37] hover:underline text-sm"
                      >
                        Read more in: {event.publicationTitle}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}