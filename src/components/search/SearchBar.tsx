import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface Suggestion {
  id: number;
  title: string;
  category: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const response = await fetch('/search.json');
        const data = await response.json();
        
        const matchedSuggestions = data.publications
          .filter((pub: Suggestion) => 
            pub.title.toLowerCase().includes(query.toLowerCase()) ||
            pub.category.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5);

        setSuggestions(matchedSuggestions);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?search=${encodeURIComponent(query.trim())}`);
      setShowSuggestions(false);
    }
  };

  return (
    <div ref={searchRef} className="relative flex-1">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            placeholder="Search archives..."
            className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/90 backdrop-blur-sm 
                     focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition
                     placeholder-gray-500 text-gray-900 text-lg"
          />
          <button
            type="submit"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          >
            <Search className="text-gray-500 h-6 w-6" />
          </button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg 
                      border border-gray-200 overflow-hidden z-50">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => {
                navigate(`/publications/${suggestion.id}`);
                setShowSuggestions(false);
                setQuery('');
              }}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between
                       border-b border-gray-100 last:border-0"
            >
              <div>
                <div className="font-medium text-[#064635]">{suggestion.title}</div>
                <div className="text-sm text-gray-500 capitalize">
                  {suggestion.category.replace('-', ' ')}
                </div>
              </div>
              <Search className="h-4 w-4 text-gray-400" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}