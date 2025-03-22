import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; // Importamos el UserContext

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); // Aquí obtenemos el token del contexto

  const formatNumber = (num) => (num ? num.toLocaleString() : "0");

  const rutaValida = ({isActive}) => isActive ? 'nav-link text-info border border-danger rounded' : 'nav-link text-white border border-white rounded px-2';

  return (
    <nav className="navbar navbar-expand navbar-light bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' className= "text-white">
                Pizzería Mamma Mia!
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/' className={rutaValida}>
                🍕Home
              </NavLink>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <NavLink to='/Profile' className={rutaValida}>
                    🔓Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className={rutaValida}>
                    🔒Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to='/Login' className={rutaValida}>
                    🔐Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/Register' className={rutaValida}>
                    🔐Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <NavLink to='/Cart' className={rutaValida}>
            🛒 Total: ${formatNumber(total)}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
