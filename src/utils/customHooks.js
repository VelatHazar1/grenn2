import { useContext, useState } from "react";

const { shoppingCart, addToCart, removeFromCart } = useContext(CartContext);

export const useAddToCart = (product) => {
  const { addToCart } = useContext(CartContext);
  return () => addToCart(product);
};
