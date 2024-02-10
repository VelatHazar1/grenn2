import style from "./Cart.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

import { CartContext } from "../../store/index";
import { useContext, useState } from "react";

function Cart() {
  const { shoppingCart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <>
      <NavBar></NavBar>
      <div className={style.container}>
        <div className={style.wrapper}>
          <h1 className={style.title}>Your Cart</h1>
          <div className={style.top}>
            <button className={style.topButton}>Continue Shopping</button>
          </div>
          <div className={style.bottom}>
            {shoppingCart.map((item) => {
              <div className={style.product} key={item.id}>
                <div className={style.info}>
                  <img src={item.img} />
                  <p className={style.productName}>{item.name}</p>
                </div>
                <div className={style.priceDetail}>
                  <p className={style.price}>${item.price}</p>
                </div>
              </div>;
            })}
          </div>
          <hr />
        </div>
      </div>
      <div className={style.summary}>
        <h2>$25</h2>
        <button className={style.order}>Order</button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cart;
