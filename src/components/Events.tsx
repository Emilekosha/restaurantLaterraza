import React from 'react';
import { Calendar } from 'lucide-react';

const Events = () => {
  return (
    <section id="events" className="py-20 bg-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-white mb-4">Événements Spéciaux</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-2xl font-serif text-accent mb-4">Soirées Dégustation</h3>
            <p className="text-gray-300 mb-6">
              Chaque premier jeudi du mois, découvrez notre menu dégustation 
              spécial accompagné d'une sélection de vins africains.
            </p>
            <div className="space-y-2">
              <p className="text-white font-serif">Menu complet : 45 000 FCFA</p>
              <p className="text-white font-serif">Avec accord mets-vins : 60 000 FCFA</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-2xl font-serif text-accent mb-4">Cours de Cuisine</h3>
            <p className="text-gray-300 mb-6">
              Apprenez les secrets de notre chef lors de nos cours de cuisine 
              mensuels. Ingrédients et dégustation inclus. Places limitées.
            </p>
            <div className="space-y-2">
              <p className="text-white font-serif">Session individuelle : 35 000 FCFA</p>
              <p className="text-white font-serif">Forfait groupe (4 pers.) : 120 000 FCFA</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-2xl font-serif text-accent mb-4">Événements Privés</h3>
            <p className="text-gray-300 mb-6">
              Célébrez vos moments spéciaux dans notre espace privatisable. 
              Menu personnalisé et service dédié.
            </p>
            <div className="space-y-2">
              <p className="text-white font-serif">Minimum 10 personnes</p>
              <p className="text-white font-serif">À partir de 25 000 FCFA/personne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;