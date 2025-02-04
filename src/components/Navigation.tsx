import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu as MenuIcon, Heart } from 'lucide-react';
import { Logo } from './Logo';

interface MenuItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Collections',
    href: '/collections',
    children: [
      {
        label: 'Foundational Histories',
        href: '/collections/foundational-histories',
        description: 'Origins and early settlements of Ibadan',
      },
      {
        label: 'Governance and Leadership',
        href: '/collections/governance',
        description: 'Traditional rulership and administrative systems',
      },
      {
        label: 'Culture and Heritage',
        href: '/collections/culture',
        description: 'Arts, festivals, and cultural practices',
      },
      {
        label: 'Urbanization and Development',
        href: '/collections/urbanization',
        description: 'City growth and infrastructural evolution',
      },
      {
        label: 'Conflicts and Wars',
        href: '/collections/conflicts',
        description: 'Military history and territorial disputes',
      },
    ],
  },
  {
    label: 'Interactive Features',
    href: '/interactive',
    children: [
      {
        label: 'Historical Map',
        href: '/interactive#map',
        description: 'Explore historical landmarks and events',
      },
      {
        label: 'Timeline',
        href: '/interactive#timeline',
        description: "Journey through Ibadan's key moments",
      },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      {
        label: 'The Author',
        href: '/about/author',
        description: 'About Lola Tomori',
      },
      {
        label: 'Mission & Vision',
        href: '/about/mission',
        description: 'Our purpose and goals',
      },
      {
        label: 'Project History',
        href: '/about/history',
        description: 'The journey and milestones',
      },
      {
        label: 'Become a Contributor',
        href: '/about/contribute',
        description: 'Join our mission',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to prevent menu from closing too quickly
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-[#064635] text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                           flex items-center ${
                             isActive(item.href) ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                           }`}
                  onClick={(e) => {
                    if (item.href.includes('#')) {
                      e.preventDefault();
                      const [path, hash] = item.href.split('#');
                      if (location.pathname === path) {
                        const element = document.getElementById(hash);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = item.href;
                      }
                    }
                  }}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div 
                    className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-1" role="menu">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                            isActive(child.href) ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#064635]'
                          }`}
                          role="menuitem"
                          onClick={(e) => {
                            if (child.href.includes('#')) {
                              e.preventDefault();
                              const [path, hash] = child.href.split('#');
                              if (location.pathname === path) {
                                const element = document.getElementById(hash);
                                element?.scrollIntoView({ behavior: 'smooth' });
                              } else {
                                window.location.href = child.href;
                              }
                            }
                            setActiveDropdown(null);
                          }}
                        >
                          <div className="font-medium">{child.label}</div>
                          {child.description && (
                            <p className="text-xs text-gray-500 mt-1">{child.description}</p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Donate Button */}
            <Link
              to="/donate"
              className="ml-4 px-4 py-2 rounded-md bg-[#D4AF37] text-[#064635] font-semibold 
                       hover:bg-opacity-90 transition-colors duration-200 flex items-center"
            >
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white 
                         hover:text-[#D4AF37] focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium 
                           hover:bg-[#064635]/50 ${
                             isActive(item.href) ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                           }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className={`block px-3 py-2 rounded-md text-sm font-medium 
                                 hover:bg-[#064635]/50 ${
                                   isActive(child.href) ? 'text-[#D4AF37]' : 'text-[#D4AF37]/80'
                                 }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Donate Button */}
            <Link
              to="/donate"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#D4AF37] text-[#064635]
                       hover:bg-opacity-90 mx-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}