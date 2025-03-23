import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = ({ token }) => {
  const { total } = useContext(CartContext);
  const formatNumber = (num) => (num ? num.toLocaleString() : "0");
  const rutaValida = ({isActive}) => isActive ? "nav-link text-danger border border-warning rounded": "nav-link text-white border border-white rounded mx-2"
  const carritoValido = ({isActive}) => isActive ? "total btn border border-warning text-danger" : "total btn border border-white text-white"

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
              <NavLink to='/' className="nav-link text-white" href="#">
                Pizzería Mamma Mia!
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/' className= {rutaValida} href="#">
                🍕Home
              </NavLink>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <NavLink to='/Profile' className= {rutaValida} href="#">
                    🔓Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/Logout' className= {rutaValida} href="#">
                    🔒Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to='/Login' className= {rutaValida} href="#">
                    🔐Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/Register' className= {rutaValida} href="#">
                    🔐Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <NavLink to='/Cart' className= {carritoValido}>
            🛒 Total: ${formatNumber(total)}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;