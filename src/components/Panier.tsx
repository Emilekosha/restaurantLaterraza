import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import emailjs from "@emailjs/browser";

// Configuration EmailJS (vérifiez ces valeurs dans votre dashboard)
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_qttq6vh",
  TEMPLATE_ID: "template_58l7tef", 
  USER_ID: "user_GZfynm7gn7lOUwXiY" // Anciennement PUBLIC_KEY
};

// Initialisation simple (version 3.x)
emailjs.init(EMAILJS_CONFIG.USER_ID);

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  details?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: number;
  date: string;
  items: CartItem[];
  total: number;
  status: string;
  customerName: string;
  customerPhone: string;
}

const Panier = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useContext(CartContext);

  const navigate = useNavigate();
  const [isOrdering, setIsOrdering] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckout = async () => {
    if (isOrdering || cart.length === 0 || !customerName || !customerPhone) return;

    setIsOrdering(true);
    setErrorMessage("");

    const newOrder: Order = {
      id: Date.now(),
      date: new Date().toLocaleString("fr-FR"),
      items: [...cart],
      total: totalPrice + 1000, // Frais de livraison inclus
      status: "Confirmée",
      customerName,
      customerPhone
    };

    try {
      // 1. Sauvegarde locale
      const orders = JSON.parse(localStorage.getItem("orders") || "[]");
      localStorage.setItem("orders", JSON.stringify([...orders, newOrder]));

      // 2. Envoi du email (syntaxe à 4 paramètres)
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          order_id: newOrder.id.toString(),
          customer_name: customerName,
          customer_phone: customerPhone,
          order_date: newOrder.date,
          order_items: newOrder.items
            .map(item => `${item.quantity}x ${item.product.name} - ${item.product.price}`)
            .join("\n"),
          order_total: `${newOrder.total.toFixed(2)} FCFA`,
          restaurant_name: "Restaurant Terraza"
        },
        EMAILJS_CONFIG.USER_ID // 4ème paramètre obligatoire
      );

      console.log("Email envoyé ! Status:", response.status);

      // 3. Redirection
      navigate("/confirmation", { state: { order: newOrder } });
      clearCart();

    } catch (error: any) {
      console.error("Erreur complète:", {
        status: error?.status,
        text: error?.text,
        details: error?.details
      });
      setErrorMessage(error?.text || "Erreur lors de l'envoi de la commande");
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <div className="flex-1 bg-cream p-4 md:p-8 flex items-start justify-center mt-16 md:mt-20">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-serif text-earth mb-6">
            Votre Panier ({totalItems})
          </h1>

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              <p className="font-medium">Erreur :</p>
              <p>{errorMessage}</p>
              <button 
                onClick={() => setErrorMessage("")}
                className="mt-2 text-sm text-red-600 hover:text-red-800"
              >
                Fermer
              </button>
            </div>
          )}

          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4 text-lg">Votre panier est vide</p>
              <button
                onClick={() => navigate("/")}
                className="bg-accent text-white py-2 px-6 rounded-lg hover:bg-primary transition"
              >
                Retour au menu
              </button>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.quantity}`}
                    className="py-4 flex flex-col sm:flex-row"
                  >
                    <div className="flex-1">
                      <h2 className="text-xl font-serif text-earth">
                        {item.product.name}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {item.product.description}
                      </p>
                      <p className="text-accent font-serif mt-2">
                        {item.product.price}
                      </p>
                    </div>

                    <div className="flex items-center mt-2 sm:mt-0">
                      <button
                        onClick={() => decreaseQuantity(item.product.id)}
                        className="w-8 h-8 flex items-center justify-center border rounded-l-lg hover:bg-gray-100 transition"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center border-t border-b">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.product.id)}
                        className="w-8 h-8 flex items-center justify-center border rounded-r-lg hover:bg-gray-100 transition"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-4 text-red-500 hover:text-red-700 transition"
                        title="Supprimer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Formulaire de contact */}
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Sous-total:</span>
                  <span className="font-medium">{totalPrice.toFixed(2)} FCFA</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Frais de livraison:</span>
                  <span className="font-medium">1000 FCFA</span>
                </div>
                <div className="flex justify-between items-center text-lg font-serif text-earth">
                  <span>Total:</span>
                  <span>{(totalPrice + 1000).toFixed(2)} FCFA</span>
                </div>
              </div>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => confirm("Vider le panier ?") && clearCart()}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition"
                >
                  Vider le panier
                </button>
                <button
                  onClick={handleCheckout}
                  disabled={isOrdering}
                  className={`flex-1 py-3 px-6 rounded-lg transition ${
                    isOrdering
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  {isOrdering ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    "Confirmer la commande"
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Panier;