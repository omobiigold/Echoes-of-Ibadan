import React, { useState } from 'react';
import { Heart, BookOpen, Users, Mail } from 'lucide-react';

export default function ContributePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contributionType: 'document',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#064635] mb-4">
            Become a Contributor
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in preserving and sharing the rich history of Ibadan. Your contribution, 
            whether through historical documents, financial support, or expertise, helps ensure 
            our heritage lives on for future generations.
          </p>
        </div>

        {/* Contribution Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-[#D4AF37]" />
              <h3 className="text-xl font-semibold text-[#064635] ml-3">Document Submission</h3>
            </div>
            <p className="text-gray-600">
              Share historical documents, photographs, or manuscripts related to Ibadan's history.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-[#D4AF37]" />
              <h3 className="text-xl font-semibold text-[#064635] ml-3">Financial Support</h3>
            </div>
            <p className="text-gray-600">
              Help fund our preservation efforts and make history accessible to everyone.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-[#D4AF37]" />
              <h3 className="text-xl font-semibold text-[#064635] ml-3">Volunteer</h3>
            </div>
            <p className="text-gray-600">
              Contribute your time and expertise to help catalog and preserve our collections.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#064635] mb-6">Get Involved</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="contributionType" className="block text-sm font-medium text-gray-700 mb-1">
                Type of Contribution
              </label>
              <select
                id="contributionType"
                name="contributionType"
                value={formData.contributionType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              >
                <option value="document">Document Submission</option>
                <option value="financial">Financial Support</option>
                <option value="volunteer">Volunteer</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#064635] text-white px-6 py-3 rounded-lg font-semibold 
                       hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}