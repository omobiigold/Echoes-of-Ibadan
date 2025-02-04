import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Send, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#064635] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#D4AF37] transition">Home</a></li>
              <li><a href="/collections" className="hover:text-[#D4AF37] transition">Collections</a></li>
              <li><a href="/interactive" className="hover:text-[#D4AF37] transition">Interactive Features</a></li>
              <li><a href="/about" className="hover:text-[#D4AF37] transition">About</a></li>
              <li><a href="/about/contribute" className="hover:text-[#D4AF37] transition">Become a Contributor</a></li>
              <li><a href="/contact" className="hover:text-[#D4AF37] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: info@ibadanarchives.org</li>
              <li>Phone: +234 (0) 123 456 7890</li>
              <li>Address: University of Ibadan</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4AF37] transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            
            {/* Donate Button */}
            <a
              href="/donate"
              className="inline-flex items-center px-6 py-3 bg-[#D4AF37] text-[#064635] rounded-lg 
                       font-semibold mt-6 hover:bg-opacity-90 transition-colors duration-200"
            >
              <Heart className="mr-2 h-5 w-5" />
              Support Our Mission
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates on new archives and events.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] flex-grow"
              />
              <button
                type="submit"
                className="bg-[#D4AF37] text-[#064635] px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p>© 2025 Echoes of Ibadan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}