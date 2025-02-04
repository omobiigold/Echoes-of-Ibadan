import React, { useState } from 'react';
import { Calendar, BookMarked, Share2, Facebook, Twitter, Linkedin, Download, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { publications } from './PublicationsList';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function PublicationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const publication = publications.find(p => p.id === Number(id));
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    researchInterests: [] as string[],
    professionalBackground: '',
    heardAboutUs: ''
  });

  if (!publication) {
    return (
      <div className="min-h-screen bg-[#F5F5DC] pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-[#064635]">Publication not found</h1>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a form and submit it to Google Forms
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://docs.google.com/forms/d/e/1eLsgAa7nXlwSXHY4N8klZsFdRk2b5o4CQFQYSoFOS_Y/formResponse';
    form.target = '_blank';

    // Map our form fields to Google Form fields
    const fields = {
      'entry.1045781291': formData.email,                // Email Address
      'entry.1234567890': publication.title,             // Publication Title (hidden)
      'entry.1234567891': formData.researchInterests.join(', '), // Research Interests
      'entry.1234567892': formData.professionalBackground,  // Professional Background
      'entry.1234567893': formData.heardAboutUs          // How did you hear about us?
    };

    // Add form fields
    for (const [key, value] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    // Submit form
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // After form submission, trigger the download
    const link = document.createElement('a');
    link.href = publication.pdfUrl;
    link.download = `${publication.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset and close form
    setFormData({
      email: '',
      researchInterests: [],
      professionalBackground: '',
      heardAboutUs: ''
    });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#064635] hover:text-[#D4AF37] transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span>Back to Publications</span>
        </button>

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
              <span className="capitalize">{publication.category.replace('-', ' ')}</span>
            </div>
          </div>
        </div>

        {/* Abstract */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#064635] mb-4">Abstract</h2>
          <p className="text-gray-600">{publication.abstract}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{publication.content}</ReactMarkdown>
        </div>

        {/* Download CTA */}
        {publication.pdfUrl && (
          <div className="bg-[#064635] text-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Want to read more?</h3>
            <p className="mb-6">
              Join our community of researchers and historians. Get access to the full publication and stay updated with our latest research and discoveries.
            </p>
            <button
              onClick={handleDownload}
              className="bg-[#D4AF37] text-[#064635] px-6 py-3 rounded-lg font-semibold 
                       hover:bg-opacity-90 transition flex items-center justify-center"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Full Publication
            </button>
          </div>
        )}

        {/* Download Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold text-[#064635] mb-6">Download Publication</h3>
              <p className="text-gray-600 mb-6">Enter your details to access the full publication. We'll also keep you updated with new research and publications.</p>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Research Interests
                  </label>
                  <div className="space-y-2">
                    {['Foundational Histories', 'Governance and Leadership', 'Culture and Heritage', 'Urbanization and Development', 'Conflicts and Wars'].map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.researchInterests.includes(interest)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData(prev => ({
                                ...prev,
                                researchInterests: [...prev.researchInterests, interest]
                              }));
                            } else {
                              setFormData(prev => ({
                                ...prev,
                                researchInterests: prev.researchInterests.filter(i => i !== interest)
                              }));
                            }
                          }}
                          className="rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                        />
                        <span className="ml-2 text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="professionalBackground" className="block text-sm font-medium text-gray-700 mb-1">
                    Professional Background *
                  </label>
                  <select
                    id="professionalBackground"
                    required
                    value={formData.professionalBackground}
                    onChange={(e) => setFormData(prev => ({ ...prev, professionalBackground: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="Student">Student</option>
                    <option value="Academic/Researcher">Academic/Researcher</option>
                    <option value="Historian">Historian</option>
                    <option value="Cultural Enthusiast">Cultural Enthusiast</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="heardAboutUs" className="block text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us?
                  </label>
                  <select
                    id="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={(e) => setFormData(prev => ({ ...prev, heardAboutUs: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="Academic Reference">Academic Reference</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Search Engine">Search Engine</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#064635] text-white px-6 py-2 rounded-lg font-semibold 
                             hover:bg-opacity-90 transition flex items-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Citations */}
        {publication.citations && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-[#064635] mb-6">How to Cite</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#064635] mb-2">APA</h3>
                <p className="text-gray-600">{publication.citations.apa}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#064635] mb-2">MLA</h3>
                <p className="text-gray-600">{publication.citations.mla}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#064635] mb-2">Chicago</h3>
                <p className="text-gray-600">{publication.citations.chicago}</p>
              </div>
            </div>
          </div>
        )}

        {/* Share */}
        <div className="flex justify-center space-x-4">
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
    </div>
  );
}