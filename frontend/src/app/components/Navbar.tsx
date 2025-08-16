import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  ABOUT,
  APP_NAME,
  CAREERS,
  CONTACT,
  HOME,
  SCHEDULE_MEETING,
  SERVICES,
  WHO_WE_ARE
} from '../../constant/global-key.const';
import { ROUTE_URL } from '../../constant/routes.const';

const navLinks = [
  { label: HOME, path: ROUTE_URL.HOME },
  { label: SERVICES, path: ROUTE_URL.SERVICE },
  //   { label: WHO_WE_ARE, path: ROUTE_URL.WHO_WE_ARE },
  { label: CAREERS, path: ROUTE_URL.CAREERS },
  { label: ABOUT, path: ROUTE_URL.ABOUT },
  { label: CONTACT, path: ROUTE_URL.CONTACT }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path: string) => location.pathname === path;

  const renderLinkClass = (path: string) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive(path) ? 'text-saas-orange' : 'text-white hover:text-saas-orange'
    }`;

  return (
    <nav className="bg-saas-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
              {APP_NAME}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={renderLinkClass(link.path)}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to={ROUTE_URL.SCHEDULE_MEETING}
              className="btn-primary w-full">
              {SCHEDULE_MEETING}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-saas-darkGray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive(link.path) ? 'text-saas-orange' : 'text-white hover:text-saas-orange'
                }`}>
                {link.label}
              </Link>
            ))}

            <Link
              to="/schedule"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange">
              Schedule Meeting
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
