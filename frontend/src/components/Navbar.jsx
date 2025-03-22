import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = ({ token }) => {
  const { total } = useContext(CartContext);
  const formatNumber = (num) => (num ? num.toLocaleString() : "0");

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
              <Link to='/' className="nav-link text-white" href="#">
                Pizzería Mamma Mia!
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link text-white border border-white rounded" href="#">
                🍕Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link to='/Profile' className="nav-link text-white border border-white rounded mx-2" href="#">
                    🔓Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/Logout' className="nav-link text-white border border-white rounded mx-2" href="#">
                    🔒Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to='/Login' className="nav-link text-white border border-white rounded mx-2" href="#">
                    🔐Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/Register' className="nav-link text-white border border-white rounded mx-2" href="#">
                    🔐Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <Link to='/Cart' className="total btn border border-white text-white">
            🛒 Total: ${formatNumber(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;