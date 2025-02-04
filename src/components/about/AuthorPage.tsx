import React from 'react';
import { BookOpen, Award, Users, Mail, Phone, Briefcase, GraduationCap } from 'lucide-react';

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="ESV. Tomori Moshood Adijolola"
              className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg border-4 border-[#D4AF37]"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#064635] mb-4">
            ESV. Tomori Moshood Adijolola, ANIVS, RSV, MNIM
          </h1>
          <p className="text-xl text-[#D4AF37] font-medium mb-6">
            A Visionary Custodian of Yoruba Heritage and Urban Development
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            ESV. Tomori Moshood Adijolola is a distinguished historian, estate surveyor, and cultural 
            preservationist whose unparalleled contributions have shaped our understanding of Yoruba 
            history, governance, and urban development. A devoted husband, father, and grandfather, 
            he exemplifies the values of integrity, wisdom, and service to his family and community.
          </p>
        </div>

        {/* Biography */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-8 w-8 text-[#D4AF37] mr-4" />
            <h2 className="text-2xl font-semibold text-[#064635]">Biography</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Born in Nigeria, ESV. Tomori Moshood Adijolola's journey is one of resilience and 
            excellence. With a career spanning decades, he has left an indelible mark on the fields 
            of land management, property valuation, and historical research. As an esteemed member 
            of the Nigerian Institution of Estate Surveyors and Valuers (ANIVS) and a registered 
            surveyor (RSV), he brought a scholarly and practical approach to urban planning and 
            development.
          </p>
          <p className="text-gray-700 leading-relaxed">
            His passion for Yoruba history led to the publication of groundbreaking works that 
            explore the intricacies of Ibadan's cultural and political transformation. From 
            documenting the city's military roots to examining its governance under colonial rule, 
            his insights provide a comprehensive understanding of Ibadan's legacy.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-[#D4AF37] mr-4" />
              <h3 className="text-xl font-semibold text-[#064635]">Published Scholar</h3>
            </div>
            <p className="text-gray-600">
              Authored over 20 definitive publications on Yoruba history, urban governance, and 
              property valuation, each offering a unique lens on the development of Ibadan and 
              Yoruba culture.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-[#D4AF37] mr-4" />
              <h3 className="text-xl font-semibold text-[#064635]">Land Management Expert</h3>
            </div>
            <p className="text-gray-600">
              As a leading voice in property taxation and valuation, he developed innovative models 
              to optimize urban resource management in Nigeria.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-[#D4AF37] mr-4" />
              <h3 className="text-xl font-semibold text-[#064635]">Mentor and Guide</h3>
            </div>
            <p className="text-gray-600">
              Nurtured a generation of scholars, professionals, and historians, imparting his 
              knowledge and passion for preserving cultural heritage.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-[#D4AF37] mr-4" />
              <h3 className="text-xl font-semibold text-[#064635]">Community Builder</h3>
            </div>
            <p className="text-gray-600">
              Founder of initiatives that document and celebrate Ibadan's history, ensuring its 
              legacy remains vibrant for future generations.
            </p>
          </div>
        </div>

        {/* Family and Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#064635] mb-4">Family and Values</h2>
          <p className="text-gray-700 leading-relaxed">
            ESV. Tomori Moshood Adijolola's life is rooted in his commitment to family and 
            community. As a loving husband and father, he embodies the virtues of dedication and 
            humility. His legacy extends beyond his professional achievements, as he continues to 
            inspire his family with his unwavering belief in the power of education and the 
            preservation of Yoruba heritage.
          </p>
        </div>

        {/* Vision and Legacy */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#064635] mb-4">Vision and Legacy</h2>
          <p className="text-gray-700 leading-relaxed">
            For ESV. Tomori Moshood Adijolola, preserving history is a mission, not merely a 
            profession. Through his work, he has illuminated the stories of Ibadan's past and laid 
            the foundation for future research. His vision transcends the pages of his publications, 
            as he strives to build bridges between generations, fostering pride in Yoruba culture 
            and traditions.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#064635] mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-[#D4AF37] mr-4" />
              <a href="mailto:lolatomori1@gmail.com" className="text-gray-700 hover:text-[#D4AF37]">
                lolatomori1@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-[#D4AF37] mr-4" />
              <a href="tel:+2348037260502" className="text-gray-700 hover:text-[#D4AF37]">
                +234-803-726-0502
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}