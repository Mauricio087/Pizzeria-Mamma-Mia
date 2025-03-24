import React, { createContext, useContext, useState, useEffect } from 'react';

const PizzaContext = createContext();

export const usePizza = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error al obtener las pizzas:', error);
        setPizzas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading }}>
      {children}
    </PizzaContext.Provider>
  );
};