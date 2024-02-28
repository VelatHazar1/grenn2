import style from "./Cart.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { Icon } from "@iconify-icon/react";

import { CartContext } from "../../store/index";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const { shoppingCart, removeFromCart } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPrice = () => {
    let total = 0;

    shoppingCart.forEach((item) => {
      total += item.price;
    });

    setTotalPrice(total);
  };

  useEffect(() => {
    handleTotalPrice();
  });
  return (
    <>
      <NavBar></NavBar>
      <div className={style.container}>
        <div className={style.wrapper}>
          <h1 className={style.title}>Your Cart</h1>
          <div className={style.top}>
            <Link to={"/"} className={style.topButton}>
              Continue Shopping
            </Link>
          </div>
          <div className={style.bottom}>
            {shoppingCart.map((item) => (
              <div className={style.product} key={item.id}>
                <div className={style.info}>
                  <img src={item.img} />
                  <p className={style.productName}>{item.name}</p>
                </div>
                <div className={style.priceDetail}>
                  <p className={style.price}>${item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <Icon icon="pajamas:remove" width={30} height={30} />
                </button>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
      <div className={style.summary}>
        <h2> ${totalPrice}</h2>
        <button className={style.order}>Order</button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cart;
