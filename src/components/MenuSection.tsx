import { UtensilsCrossed } from 'lucide-react';
import imgDelice from "../assets/delice-salade.jpg";
import imgdelicieu from "../assets/delicieux-gratin.jpg";

const MenuSection = () => {
  const menuItems = [
    {
      name: "Délicieux Salade",
      description: "Salade fraîche avec tomates, concombres, oignons, poivrons et vinaigrette à l'huile d'arachide",
      price: "1 500 FCFA",
      image: imgDelice
    },
    {
      name: "Délicieux gratin",
      description: "Bananes plantains mûres frites, servies avec une sauce tomate épicée et des oignons caramélisés",
      price: "1 000 FCFA",
      image: imgdelicieu
    },
    {
      name: "Pastels au Poisson",
      description: "Chaussons frits garnis de thon épicé, oignons et persil, servis avec une sauce pimentée",
      price: "1 500 FCFA",
      image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Beignets de Haricots",
      description: "Délicieux beignets de haricots blancs moulus, épicés et frits, servis avec une sauce tomate",
      price: "1 200 FCFA",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sauce d'Arachide au Bœuf",
      description: "Tendre bœuf mijoté dans une sauce crémeuse aux arachides, servi avec du riz blanc",
      price: "3 500 FCFA",
      image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sauce Gombo",
      description: "Délicieuse sauce au gombo frais avec choix de viande, servie avec du riz ou foufou",
      price: "3 000 FCFA",
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Riz au Gras",
      description: "Riz parfumé cuit dans un bouillon de viande avec légumes, épices et tomates",
      price: "2 500 FCFA",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Spaghetti à l'Africaine",
      description: "Spaghetti sautés avec légumes, viande hachée et épices africaines traditionnelles",
      price: "2 500 FCFA",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Riz Blanc",
      description: "Riz parfaitement cuit à la vapeur, léger et moelleux",
      price: "500 FCFA",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Foufou d'Igname",
      description: "Foufou traditionnel à l'igname, pilé à la main, texture crémeuse",
      price: "1 000 FCFA",
      image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Attiéké",
      description: "Couscous de manioc fermenté, léger et parfumé",
      price: "800 FCFA",
      image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Légumes Sautés",
      description: "Assortiment de légumes locaux sautés à l'huile d'arachide",
      price: "1 000 FCFA",
      image: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bissap",
      description: "Boisson rafraîchissante à base de fleurs d'hibiscus, légèrement sucrée",
      price: "1 000 FCFA",
      image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Jus de Gingembre",
      description: "Jus de gingembre frais fait maison, épicé et revigorant",
      price: "1 000 FCFA",
      image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cocktail de Fruits",
      description: "Mélange de fruits tropicaux frais : mangue, ananas, papaye",
      price: "1 500 FCFA",
      image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Eau Minérale",
      description: "Bouteille d'eau minérale (50cl)",
      price: "500 FCFA",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="menu" className="py-10 bg-cream">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-1">
          <UtensilsCrossed className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-primary mb-4">Notre Menu</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-72 mb-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-serif text-earth">{item.name}</h4>
                      <span className="text-xl text-accent font-serif ml-2">{item.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button 
                      className="w-full bg-accent text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors duration-300"
                      onClick={() => {
                        // Redirection vers la page du produit
                        window.location.href = `/produit/${itemIndex}`;
                      }}
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;