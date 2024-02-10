import style from "./Product.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import img from "../../assets/products/p1.png";

function Product() {
  return (
    <>
      <NavBar></NavBar>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.imgContainer}>
            <img src={img} />
          </div>
          <div className={style.infoContainer}>
            <h1 className={style.title}>Slim Fit Jeans</h1>
            <p className={style.price}>$24.99</p>
            <button>Add to Card</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Product;
