import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  details?: string;
}

interface OrderItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: number;
  date: string;
  items: OrderItem[];
  total: number;
  status: string;
  customerName?: string;
  customerPhone?: string;
}

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        // 1. Vérifier l'état de navigation
        if (state?.order) {
          setOrder(state.order);
          return;
        }
  
        // 2. Vérifier le localStorage (correction ici)
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const lastOrder = orders[orders.length - 1];
        
        if (!lastOrder) {
          throw new Error('Aucune commande trouvée');
        }
  
        setOrder(lastOrder);
      } catch (err) {
        console.error("Erreur:", err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
      } finally {
        setIsLoading(false);
      }
    };

    loadOrder();
  }, [state]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-cream p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mx-auto mb-4"></div>
          <h1 className="text-2xl font-serif text-earth mb-2">Chargement en cours</h1>
          <p className="text-gray-600">Veuillez patienter...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-cream p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-serif text-earth mb-2">Oups !</h1>
          <p className="text-gray-600 mb-6">
            {error || 'Nous n\'avons pas pu retrouver votre commande.'}
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-accent text-white py-2 px-6 rounded-lg hover:bg-primary transition-colors duration-300"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* En-tête de confirmation */}
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-serif text-earth mb-2">Merci pour votre commande !</h1>
            <p className="text-gray-600">Votre paiement a bien été reçu.</p>
          </div>

          {/* Section récapitulative */}
          <div className="mb-8">
            <h2 className="text-xl font-serif text-earth mb-4">Résumé de la commande</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-500 text-sm">Numéro</p>
                <p className="font-medium">#{order.id}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Date</p>
                <p className="font-medium">{order.date}</p>
              </div>
              {order.customerName && (
                <div>
                  <p className="text-gray-500 text-sm">Nom</p>
                  <p className="font-medium">{order.customerName}</p>
                </div>
              )}
              {order.customerPhone && (
                <div>
                  <p className="text-gray-500 text-sm">Téléphone</p>
                  <p className="font-medium">{order.customerPhone}</p>
                </div>
              )}
            </div>

            {/* Liste des articles */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-medium mb-3">Articles commandés</h3>
              <ul className="divide-y divide-gray-200">
                {order.items.map((item) => (
                  <li key={`${item.product.id}-${item.quantity}`} className="py-3 flex justify-between">
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-800">{item.quantity} ×</span>
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        {item.product.description && (
                          <p className="text-sm text-gray-500">{item.product.description}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-600">{item.product.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span className="font-serif text-earth">{order.total.toFixed(2)} FCFA</span>
              </div>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium mb-2">Prochaines étapes</h3>
            <p className="text-sm text-gray-600">
              Nous avons bien reçu votre commande et la préparons avec soin.
              {order.customerPhone && ' Vous recevrez un SMS lorsque votre commande sera prête.'}
            </p>
          </div>

          {/* Bouton de retour */}
          <div className="text-center">
            <button
              onClick={() => navigate('/')}
              className="bg-accent text-white py-3 px-8 rounded-lg hover:bg-primary transition-colors duration-300 w-full sm:w-auto"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;