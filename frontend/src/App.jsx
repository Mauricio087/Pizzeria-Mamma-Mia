import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import { PizzaProvider } from "./context/PizzaContext";
import { UserProvider, useUser } from "./context/UserContext";

// Ruta protegida para páginas que requieren autenticación
const ProtectedRoute = ({ children }) => {
  const { token } = useUser();
  return token ? children : <Navigate to="/login" />;
};

// Ruta para páginas de autenticación (login/register) que redirigen si ya está autenticado
const AuthRoute = ({ children }) => {
  const { token } = useUser();
  return token ? <Navigate to="/" /> : children;
};

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <PizzaProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<AuthRoute><RegisterPage /></AuthRoute>} />
              <Route path="/login" element={<AuthRoute><LoginPage /></AuthRoute>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </PizzaProvider>
      </CartProvider>
    </UserProvider>
  );
};

export default App;