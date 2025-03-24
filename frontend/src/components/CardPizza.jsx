import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ name, price, ingredients, img, desc, pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
      <div className="card">
        <img className="card-img-top" src={img} alt={name} />
        <h2 className="text-start fs-3 m-2 text-center">{name}</h2>
        <p className="text-center px-3">{desc}</p>
        <hr />
        <ul className="ingredients list-unstyled text-muted text-center">Ingredientes: 🍕
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="price fs-4 fw-bold text-center">Precio: ${price.toLocaleString("es-CL")}</p>
        <div className="buttons d-flex justify-content-between px-2 pb-2">
          <Link to={`/Pizza/${pizza.id}`} className="text-dark bg-light border rounded border-dark text-decoration-none">Ver más 👀</Link>
          <button className="bg-dark text-white border rounded" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;