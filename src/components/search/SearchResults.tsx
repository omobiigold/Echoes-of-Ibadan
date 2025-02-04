import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Calendar, BookMarked, ArrowLeft } from 'lucide-react';

interface SearchResult {
  id: number;
  title: string;
  category: string;
  abstract: string;
  date: string;
  keywords: string[];
  content: string;
}

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/search.json');
        const data = await response.json();
        
        const searchResults = data.publications.filter((pub: SearchResult) => {
          const searchText = `${pub.title} ${pub.abstract} ${pub.content} ${pub.category} ${pub.keywords.join(' ')}`.toLowerCase();
          return searchText.includes(query.toLowerCase());
        });

        setResults(searchResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
      setIsLoading(false);
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  const highlightText = (text: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <mark key={index} className="bg-[#D4AF37]/30 text-[#064635] px-1 rounded">{part}</mark> : 
        part
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="mr-4">
            <ArrowLeft className="h-6 w-6 text-[#064635] hover:text-[#D4AF37] transition" />
          </Link>
          <h1 className="text-3xl font-bold text-[#064635]">
            Search Results for "{query}"
          </h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#D4AF37] border-t-transparent"></div>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-[#064635] mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-[#064635] mb-2">No results found</h2>
            <p className="text-gray-600">
              Try adjusting your search terms or browse our collections instead.
            </p>
            <Link
              to="/collections"
              className="inline-block mt-6 px-6 py-3 bg-[#064635] text-white rounded-lg 
                       hover:bg-opacity-90 transition"
            >
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {results.map((result) => (
              <Link
                key={result.id}
                to={`/publications/${result.id}`}
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl 
                         transition transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{result.date}</span>
                    </div>
                    <div className="flex items-center">
                      <BookMarked className="h-4 w-4 mr-1" />
                      <span className="capitalize">{result.category.replace('-', ' ')}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-[#064635] mb-3 group-hover:text-[#D4AF37] transition">
                    {highlightText(result.title)}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {highlightText(result.abstract)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {result.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#F5F5DC] text-[#064635] text-sm rounded-full"
                      >
                        {highlightText(keyword)}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}