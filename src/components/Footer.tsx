import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl mb-4">La Terraza</h3>
            <p className="text-gray-300 text-lg">
              L'authenticité de la cuisine togolaise dans un cadre moderne et chaleureux.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl mb-6 text-accent">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start hover:text-accent transition-colors">
                <MapPin className="w-5 h-5 mr-3 text-accent" />
                Boulevard du 13 Janvier, Lomé, Togo
              </li>
              <li className="flex items-center justify-center md:justify-start hover:text-accent transition-colors">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                +228 22 21 20 19
              </li>
              <li className="flex items-center justify-center md:justify-start hover:text-accent transition-colors">
                <Clock className="w-5 h-5 mr-3 text-accent" />
                Mar-Sam: 12h-14h30, 19h-22h30
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl mb-6 text-accent">Suivez-nous</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a 
                href="#" 
                className="bg-accent hover:bg-accent-light p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="bg-accent hover:bg-accent-light p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="bg-accent hover:bg-accent-light p-3 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-300">
                Restez informés de nos événements spéciaux et de nos nouveaux plats !
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; 2024 La Terraza. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;