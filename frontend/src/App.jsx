import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
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
import { UserProvider, UserContext } from './context/UserContext';

// Componente para proteger rutas
const RutaProtegida = ({ children }) => {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirige a login si no hay token
    }
  }, [token, navigate]);

  // Si no hay token, no se muestra nada
  if (!token) return null;

  return children;
};

// Componente para redirigir a los usuarios autenticados
const RedirecionarUsuario = ({ children }) => {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/"); // Redirige a home si ya está autenticado
    }
  }, [token, navigate]);

  // Si el token ya está presente, no renderiza nada
  if (token) return null;

  return children;
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Register' element={<RedirecionarUsuario><RegisterPage /></RedirecionarUsuario>} />
            <Route path='/Login' element={<RedirecionarUsuario><LoginPage /></RedirecionarUsuario>} />
            <Route path='/Profile' element={<RutaProtegida><Profile /></RutaProtegida>} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Pizza/:id' element={<Pizza />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
