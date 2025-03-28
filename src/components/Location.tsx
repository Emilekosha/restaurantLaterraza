import { MapPin } from 'lucide-react';

const Location = () => {
  // Données du restaurant avec les nouvelles coordonnées
  const restaurant = {
    name: "Restaurant La Terrazza",
    address: "Rue 86 Tokoin Wuiti, Lomé, Togo",
    coordinates: {
      lat: 6.1693474, // Latitude mise à jour
      lng: 1.2265681  // Longitude mise à jour
    },
    hours: {
      days: "Mardi - Samedi",
      lunch: "12h00 - 14h30",
      dinner: "19h00 - 22h30"
    },
    transport: {
      taxi: "Facilement accessible",
      parking: "Parking disponible sur place"
    }
  };

  // URL Google Maps avec marqueur personnalisé
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.773722061786!2d${restaurant.coordinates.lng}!3d${restaurant.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMDkuNiJOIDHCsDEzJzM1LjYiRQ!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr&markers=color:red%7Csize:large%7C${restaurant.coordinates.lat},${restaurant.coordinates.lng}&q=${encodeURIComponent(restaurant.name + ' ' + restaurant.address)}`;

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MapPin className="w-12 h-12 text-terracotta mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-primary mb-4">Nous Trouver</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">Notre Adresse</h3>
              <p className="text-gray-600">{restaurant.address}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">Horaires</h3>
              <p className="text-gray-600">{restaurant.hours.days}</p>
              <p className="text-gray-600">{restaurant.hours.lunch}</p>
              <p className="text-gray-600">{restaurant.hours.dinner}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">Transport</h3>
              <p className="text-gray-600">Taxi : {restaurant.transport.taxi}</p>
              <p className="text-gray-600">{restaurant.transport.parking}</p>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localisation du ${restaurant.name}`}
              aria-label={`Carte montrant l'emplacement du ${restaurant.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;