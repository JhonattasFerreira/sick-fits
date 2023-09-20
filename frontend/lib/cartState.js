import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

/* eslint-disable react/prop-types */
const CartStateProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(!cartOpen);

  const closeCart = () => setCartOpen(false);

  const openCart = () => setCartOpen(true);

  return (
    <LocalStateProvider
      value={{ cartOpen, toggleCart, closeCart, openCart, setCartOpen }}
    >
      {children}
    </LocalStateProvider>
  );
};

const useCart = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { CartStateProvider, useCart };
