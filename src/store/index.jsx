import { useState, useContext, createContext } from "react";

const CartContext = createContext({
  shoppingCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const removeFromCart = (product) => {
    // console.log(product);
  };
  const addToCart = (product) => {
    console.log(typeof product);

    setShoppingCart([...shoppingCart, ...product]);
    console.log(typeof shoppingCart);
  };
  return (
    <CartContext.Provider value={{ shoppingCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
