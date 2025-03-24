import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { usePizza } from "../context/PizzaContext";

const Home = () => {
  const { pizzas, loading } = usePizza();

  if (loading) {
    return <p className="text-center">Cargando pizzas...</p>;
  }

  if (!pizzas.length) {
    return <p className="text-center">No se encontraron pizzas</p>;
  }

  return (
    <>
      <Header />
      <main className="row d-flex justify-content-center gap-4 mx-0 py-5">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            img={pizza.img}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            price={pizza.price}
            pizza={pizza}
          />
        ))}
      </main>
    </>
  );
};

export default Home;