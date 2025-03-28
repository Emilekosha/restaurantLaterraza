import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Events from './components/Events';
import Location from './components/Location';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Panier from './components/Panier';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Confirmation from './components/Confirmation';

function ScrollToTop() {
  const { pathname } = useLocation();  // Utilisez useLocation directement

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuSection />} />
              <Route path="/about" element={<About/>} />
              <Route path="/events" element={<Events />} />
              <Route path="/location" element={<Location  />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/produit/:id" element={<ProductDetails />} />
              <Route path="/panier" element={<Panier />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;