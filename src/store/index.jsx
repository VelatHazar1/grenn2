import { useState, useContext, createContext } from "react";

import p8 from "../assets/products/p8.png";
const CartContext = createContext({
  shoppingCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([
    {
      id: 8,
      img: p8,
      price: 25,
      name: "Oversize Hoodie",
    },
  ]);
  const removeFromCart = (productId) => {
    const updatedCart = shoppingCart.filter(
      (product) => product.id !== productId
    );
    setShoppingCart(updatedCart);
  };
  const addToCart = (product) => {
    console.log(product);

    setShoppingCart([...shoppingCart, product]);
    console.log(shoppingCart);
  };
  return (
    <CartContext.Provider value={{ shoppingCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
