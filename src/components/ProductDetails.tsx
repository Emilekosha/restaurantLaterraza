import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import imgDelice from "../assets/delice-salade.jpg";
import imgdelicieu from "../assets/delicieux-gratin.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Données des produits avec descriptions enrichies
  const menuItems = [
    {
      id: 1,
      name: "Salade Tropicale La Terrazza",
      description: "Une explosion de fraîcheur avec nos tomates du jardin, concombres croquants, oignons rouges marinés et poivrons colorés, le tout sublimé par notre vinaigrette maison à l'huile d'arachide torréfiée et au citron vert. Servie avec des croûtons parfumés au thym.",
      price: "1 500 FCFA",
      priceValue: 1500,
      image: imgDelice,
      details: "Accompagnement idéal : Ajoutez du poulet grillé (+500 FCFA) ou des crevettes (+800 FCFA)"
    },
    {
      id:2,
      name: "Gratin de Bananes Plantains",
      description: "Nos bananes plantains parfaitement mûres, lentement caramélisées au four, nappées d'une sauce tomate maison relevée de piments doux et d'oignons rouge caramélisés. Le tout gratiné avec une touche de fromage local fondant.",
      price: "1 000 FCFA",
      priceValue:1000,
      image: imgdelicieu,
      details: "Option végétarienne disponible - Demandez à notre serveur"
    },
    {
      id:3,
      name: "Pastels au Thon Maison",
      description: "Nos célèbres chaussons dorés à l'or fin, fourrés d'une généreuse préparation de thon frais mariné aux épices locales, oignons nouveaux et persil frais. Servis avec notre sauce pimentée signature à base de piments frais et d'ail.",
      price: "1 500 FCFA",
      priceValue:1500,
      image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "6 pièces par portion - Sauce supplémentaire +200 FCFA"
    },
    {
      id:4,
      name: "Accras de Haricots Traditionnels",
      description: "Une recette familiale transmise depuis trois générations. Nos beignets légers à base de haricots blancs moulus à la main, mélangés à un subtil équilibre d'épices et d'herbes fraîches. Servis croustillants avec une sauce tomate aux herbes.",
      price: "1 200 FCFA",
      priceValue:1200,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Accompagnement recommandé : Salade verte (+500 FCFA)"
    },
    {
      id:5,
      name: "Sauce Arachide Grand-Mère",
      description: "Notre plat signature : du bœuf tendre mijoté pendant des heures dans une sauce onctueuse à base d'arachides fraîchement moulues, relevée de gingembre et de feuilles de laurier. Servi avec du riz basmati parfumé et des légumes de saison.",
      price: "3 500 FCFA",
      priceValue:3500,
      image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Niveau d'épices : Moyen (ajustable sur demande)"
    },
    {
      id:6,
      name: "Sauce Gombo Frais",
      description: "Une préparation authentique à base de gombo frais du marché, cuit lentement avec des tomates bien mûres, des oignons et un bouillon de poisson fumé. Choix entre poulet fermier ou poisson frais du jour. Servi avec votre choix d'accompagnement.",
      price: "3 000 FCFA",
      priceValue:3000,
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Accompagnements au choix : Riz, foufou ou igname pilée"
    },
    {
      id:7,
      name: "Riz Gras Traditionnel",
      description: "Notre riz parfumé cuit dans un riche bouillon de viande avec des tomates fraîches, des carottes, des haricots verts et un mélange secret d'épices. Garni de morceaux de poulet tendres et de légumes croquants.",
      price: "2 500 FCFA",
      priceValue:2500,
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Option végétarienne disponible - Remplacez la viande par des champignons"
    },
    {
      id:8,
      name: "Spaghetti Tropical",
      description: "Des spaghetti al dente sautés à la togolaise avec des légumes croquants (carottes, poivrons, choux), des œufs et une sauce tomate légèrement épicée. Garni de fines lamelles de poulet grillé et de persil frais.",
      price: "2 500 FCFA",
      priceValue:2500,
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Personnalisez votre plat : Ajoutez des crevettes (+1000 FCFA)"
    },
    {
      id:9,
      name: "Riz Parfumé à la Noix de Coco",
      description: "Du riz basmati de qualité supérieure cuit à la vapeur avec du lait de coco frais et une touche de gingembre, pour un résultat moelleux et subtilement parfumé. Le compagnon idéal pour toutes nos sauces.",
      price: "500 FCFA",
      priceValue:500,
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Portion individuelle - Double portion +500 FCFA"
    },
    {
      id:10,
      name: "Foufou d'Igname Artisanal",
      description: "Préparé quotidiennement à la main selon la méthode traditionnelle, notre foufou à l'igname offre une texture incomparable - à la fois légère et onctueuse. Servi tiède avec votre choix de sauce.",
      price: "1 000 FCFA",
      priceValue:1000,
      image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: "Essayez-le avec notre sauce épinards (+1500 FCFA)"
    }
  ];

  const product = menuItems[parseInt(id || '0')];

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-cream p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-serif text-earth mb-4">Produit non trouvé</h1>
          <button
            className="bg-accent text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors duration-300"
            onClick={() => navigate(-1)}
          >
            Retour au menu
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/panier");
  };

  return (
    <div className="flex-1 bg-cream p-8 flex items-center justify-center mt-20">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-96">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-earth mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4 text-lg sm:text-xl">
            {product.description}
          </p>
          
          {product.details && (
            <p className="text-sm text-gray-500 italic mb-4">
              {product.details}
            </p>
          )}

          <p className="text-2xl sm:text-3xl text-accent font-serif mb-6">
            {product.price}
          </p>

          <button
            className="w-full sm:w-auto bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg sm:text-xl mb-4"
            onClick={handleAddToCart}
          >
            Ajouter au panier
          </button>

          <button
            className="w-full sm:w-auto bg-accent text-white py-3 px-6 rounded-lg hover:bg-primary transition-colors duration-300 text-lg sm:text-xl"
            onClick={() => navigate(-1)}
          >
            Retour au menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;