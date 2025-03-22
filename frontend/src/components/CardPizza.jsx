import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const {id} = useParams();  //aca tambien obtenemos el id de la url
  const { addToCart } = useContext(CartContext);
  const [detallePizzas, setDetallePizzas] = useState(null);

useEffect (() => {
  const fetchDetallePizza = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const datos = await response.json();
      setDetallePizzas(datos); //aqui se almacenan los detalles de la pizza
    }catch (error) {
      console.error("error al obtener la pizza:",error);
    }
  };
  if (id) {    //si la pizza esta disponible, se hace la solicitud
    fetchDetallePizza();
  }
}, [id]);

  if (!detallePizzas) {
    return <p className="text-center">Cargando pizza...</p>;
  }

  const { name, price, ingredients, img, desc } = detallePizzas;

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
          <button className="bg-light border rounded border-dark">Ver más 👀</button>
          <button className="bg-dark text-white border rounded" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;