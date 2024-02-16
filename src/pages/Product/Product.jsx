import style from "./Product.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import { popularProducts, mens_products, womens_products } from "../../data";
import { CartContext } from "../../store/index";
import { useContext, useState } from "react";

function Product() {
  const { shoppingCart, addToCart, removeFromCart } = useContext(CartContext);
  // Get the product id from the params:
  const { id } = useParams();
  const combinedData = [
    ...popularProducts,
    ...mens_products,
    ...womens_products,
  ];
  return (
    <>
      <NavBar></NavBar>
      <div className={style.container}>
        {combinedData.map((item) => {
          if (item.id == id) {
            return (
              <div key={item.id} className={style.wrapper}>
                <div className={style.imgContainer}>
                  <img src={item.img} />
                </div>
                <div className={style.infoContainer}>
                  <h1 className={style.title}>{item.name}</h1>
                  <p className={style.price}>${item.price}</p>
                  <Link
                    className={style.addToCartButton}
                    to={"/cart"}
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    Add to Card
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Product;
