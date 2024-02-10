import style from "./Product.module.css";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/index";
import { useContext, useState } from "react";

function Product({ item }) {
  const { shoppingCart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={item.img} alt="Product Image" />
        <div className={style.info}>
          <div className={style.icon}>
            <Link
              to="/cart"
              onClick={() => {
                addToCart([item]);
              }}
            >
              <Icon icon="solar:cart-linear" width={30} height={30} />
            </Link>
          </div>
          <div className={style.icon}>
            <Icon icon="ic:round-search" width={30} height={30} />
          </div>
          <div className={style.icon}>
            <Icon icon="mdi:heart-outline" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
