import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import CartProvider from "./context/CartContext";

const App = () => {
  const token = false; // Cambiar a TRUE para ver Profile/Logout

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar token={token} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<RegisterPage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Pizza/p001' element={<Pizza />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;