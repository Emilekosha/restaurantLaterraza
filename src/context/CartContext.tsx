import { createContext, useState, ReactNode, useEffect } from 'react';

// Type produit avec ID unique
export interface Product {
  id: number; // ID est un number
  name: string;
  description: string;
  price: string;
  image: string;
  priceValue: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Corrigez l'interface pour utiliser number partout
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void; // Changé en number
  clearCart: () => void;
  increaseQuantity: (productId: number) => void; // Changé en number
  decreaseQuantity: (productId: number) => void; // Changé en number
  totalItems: number;
  totalPrice: number;
}

// Mettez à jour la valeur par défaut pour matcher
export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  totalItems: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.product.priceValue * item.quantity), 0
  );

  const addToCart = (product: Product) => {
    if (!product || !product.id) return;
    
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      return existingItem
        ? prevCart.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const increaseQuantity = (productId: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    if (confirm('Voulez-vous vraiment vider votre panier ?')) {
      setCart([]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};