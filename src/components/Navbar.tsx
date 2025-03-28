import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderLink = (to: string, text: string, sectionId?: string) => {
    if (isHomePage && sectionId) {
      return (
        <button
          onClick={() => handleNavigation(sectionId)}
          className="hover:text-accent px-3 py-2 transition text-xl text-white bg-transparent border-none cursor-pointer"
        >
          {text}
        </button>
      );
    }
    return (
      <Link
        to={to}
        onClick={() => setIsOpen(false)}
        className="hover:text-accent px-3 py-2 transition text-xl"
      >
        {text}
      </Link>
    );
  };

  return (
    <nav className="bg-primary text-white fixed w-full z-50 shadow-md p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="La Terraza Logo"
                className="h-12 w-auto object-contain border border-accent rounded"
                style={{ backgroundColor: "white" }}
              />
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {renderLink("/", "Accueil", "accueil")}
              {renderLink("/menu", "Menu", "menu")}
              {renderLink("/about", "À Propos", "about")}
              {renderLink("/events", "Événements", "events")}
              <Link
                to="/reservation"
                className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-md text-lg transition"
              >
                Réserver
              </Link>
              <Link
                to="/login"
                className="hover:text-accent px-3 py-2 transition text-xl"
              >
                Connexion
              </Link>
              <Link
                to="/signup"
                className="bg-secondary hover:bg-secondary-dark px-4 py-2 rounded-md transition text-xl"
              >
                Inscription
              </Link>
            </div>
          </div>

          {/* ICON MENU MOBILE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-primary`}
      >
        <div className="flex flex-col px-4 py-4 space-y-4">
          {renderLink("/", "Accueil", "accueil")}
          {renderLink("/menu", "Menu", "menu")}
          {renderLink("/about", "À Propos", "about")}
          {renderLink("/events", "Événements", "events")}
          <Link
            to="/reservation"
            className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-md text-lg transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Réserver
          </Link>
          <Link
            to="/login"
            className="hover:text-accent text-lg transition"
            onClick={() => setIsOpen(false)}
          >
            Connexion
          </Link>
          <Link
            to="/signup"
            className="bg-secondary hover:bg-secondary-dark px-4 py-2 rounded-md transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;