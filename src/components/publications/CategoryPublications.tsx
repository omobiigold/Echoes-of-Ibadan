import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, BookMarked, ArrowLeft } from 'lucide-react';
import { publications } from './PublicationsList';

const categoryTitles = {
  'all': 'All Publications',
  'foundational-histories': 'Foundational Histories',
  'governance': 'Governance and Leadership',
  'culture': 'Culture and Heritage',
  'urbanization': 'Urbanization and Development',
  'conflicts': 'Conflicts and Wars'
};

export default function CategoryPublications() {
  const { category } = useParams();
  const navigate = useNavigate();
  const categoryPublications = category === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === category);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!category || !categoryTitles[category as keyof typeof categoryTitles]) {
    return (
      <div className="min-h-screen bg-[#F5F5DC] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-[#064635]">Category not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button and Title */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 hover:bg-white rounded-full transition-colors duration-200"
          >
            <ArrowLeft className="h-6 w-6 text-[#064635]" />
          </button>
          <h1 className="text-4xl font-bold text-[#064635]">
            {categoryTitles[category as keyof typeof categoryTitles]}
          </h1>
        </div>
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.entries(categoryTitles).map(([key, title]) => (
            <Link
              key={key}
              to={`/collections/${key}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                ${category === key 
                  ? 'bg-[#064635] text-white' 
                  : 'bg-white text-[#064635] hover:bg-[#064635] hover:text-white'}`}
            >
              {title}
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryPublications.map((pub) => (
            <Link
              key={pub.id}
              to={`/publications/${pub.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={pub.coverImage}
                  alt={pub.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{pub.date}</span>
                  </div>
                  <div className="flex items-center">
                    <BookMarked className="h-4 w-4 mr-1" />
                    <span className="capitalize">{pub.category.replace('-', ' ')}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-[#064635] mb-3 group-hover:text-[#D4AF37] transition">
                  {pub.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {pub.abstract}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}