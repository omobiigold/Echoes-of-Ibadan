import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, ChevronRight, Filter,
  Landmark, Crown, Palette, Building2, Swords
} from 'lucide-react';
import SearchBar from './search/SearchBar';

// Featured Categories
const categories = [
  {
    id: 1,
    title: "Foundational Histories",
    icon: Landmark,
    description: "Origins and early settlements of Ibadan",
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    path: "/collections/foundational-histories"
  },
  {
    id: 2,
    title: "Governance and Leadership",
    icon: Crown,
    description: "Traditional rulership and administrative systems",
    image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    path: "/collections/governance"
  },
  {
    id: 3,
    title: "Culture and Heritage",
    icon: Palette,
    description: "Arts, festivals, and cultural practices",
    image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    path: "/collections/culture"
  },
  {
    id: 4,
    title: "Urbanization and Development",
    icon: Building2,
    description: "City growth and infrastructural evolution",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    path: "/collections/urbanization"
  },
  {
    id: 5,
    title: "Conflicts and Wars",
    icon: Swords,
    description: "Military history and territorial disputes",
    image: "https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    path: "/collections/conflicts"
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Preserving Yoruba Heritage<br />
                <span className="text-[#D4AF37]">One Page at a Time</span>
              </h1>
              <p className="text-xl text-[#F5F5DC] mb-12 leading-relaxed max-w-2xl">
                Discover centuries of Ibadan's rich history through our carefully curated collection 
                of historical documents, manuscripts, and publications.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 max-w-2xl">
                <Link
                  to="/collections/all"
                  className="bg-[#D4AF37] text-[#064635] px-8 py-4 rounded-lg font-semibold 
                           flex items-center justify-center hover:bg-opacity-90 transition 
                           transform hover:scale-105 shadow-lg text-lg"
                >
                  View All Publications <ChevronRight className="ml-2 h-6 w-6" />
                </Link>
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#064635] mb-6">
              Featured Categories
            </h2>
            <p className="text-lg text-gray-600">
              Explore our diverse collection of historical records, organized by key themes and periods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link 
                  key={category.id}
                  to={category.path}
                  className="group relative overflow-hidden rounded-xl shadow-lg 
                           transform hover:-translate-y-1 transition duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064635] via-[#064635]/80 to-transparent 
                                opacity-90 group-hover:opacity-95 transition duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center
                                    transform group-hover:scale-110 transition duration-300">
                          <Icon className="h-6 w-6 text-[#064635]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white ml-4 group-hover:text-[#D4AF37] transition">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-[#F5F5DC] text-lg leading-relaxed opacity-0 group-hover:opacity-100 
                                  transform translate-y-2 group-hover:translate-y-0 
                                  transition duration-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}