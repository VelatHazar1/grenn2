import { useState, createContext } from "react";
import { popularProducts, mens_products, womens_products } from "../data";

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
  const combinedData = [
    ...popularProducts,
    ...mens_products,
    ...womens_products,
  ];

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in shoppingCart) {
      if (shoppingCart[item] > 0) {
        let itemInfo = combinedData.find(
          (product) => product.id === Number(item)
        );

        totalAmount += shoppingCart[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const removeFromCart = (productId) => {
    const updatedCart = shoppingCart.filter(
      (product) => product.id !== productId
    );
    setShoppingCart(updatedCart);
  };
  const addToCart = (product) => {
    setShoppingCart([...shoppingCart, product]);
  };

  const contextValue = {
    shoppingCart,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
