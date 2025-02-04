import React from 'react';
import { Calendar, BookMarked, Download, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  abstract: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
  pdfUrl: string;
}

interface RelatedPublication {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
}

const relatedPublications: RelatedPublication[] = [
  {
    id: 1,
    title: "Early Trade Routes in Ibadan",
    thumbnail: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Economic History"
  },
  {
    id: 2,
    title: "Traditional Market Systems",
    thumbnail: "https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Cultural Heritage"
  },
  {
    id: 3,
    title: "Colonial Architecture in Ibadan",
    thumbnail: "https://images.unsplash.com/photo-1523430410476-0185cb1f6ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Architecture"
  }
];

interface PublicationTemplateProps {
  publication: Publication;
}

export default function PublicationTemplate({ publication }: PublicationTemplateProps) {
  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <img
            src={publication.coverImage}
            alt={publication.title}
            className="w-full h-64 object-cover rounded-xl shadow-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-[#064635] mb-4">{publication.title}</h1>
          <div className="flex items-center space-x-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{publication.date}</span>
            </div>
            <div className="flex items-center">
              <BookMarked className="h-5 w-5 mr-2" />
              <span>{publication.category}</span>
            </div>
          </div>
        </div>

        {/* Abstract */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#064635] mb-4">Abstract</h2>
          <p className="text-gray-600">{publication.abstract}</p>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-8">
          <a
            href={publication.pdfUrl}
            className="bg-[#064635] text-white px-6 py-3 rounded-lg flex items-center hover:bg-opacity-90 transition"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </a>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-white/50 transition">
              <Facebook className="h-5 w-5 text-[#064635]" />
            </button>
            <button className="p-2 rounded-full hover:bg-white/50 transition">
              <Twitter className="h-5 w-5 text-[#064635]" />
            </button>
            <button className="p-2 rounded-full hover:bg-white/50 transition">
              <Linkedin className="h-5 w-5 text-[#064635]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: publication.content }} />
        </div>

        {/* Related Publications */}
        <section>
          <h2 className="text-2xl font-semibold text-[#064635] mb-6">Related Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPublications.map((pub) => (
              <a
                key={pub.id}
                href={`/publication/${pub.id}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={pub.thumbnail}
                  alt={pub.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[#064635] mb-2 group-hover:text-[#D4AF37] transition">
                    {pub.title}
                  </h3>
                  <span className="text-sm text-gray-600">{pub.category}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}