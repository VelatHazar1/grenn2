import style from "./ProductList.module.css";
import NavBar from "../../components/navbar/NavBar";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";

function ProductList() {
  return (
    <div className={style.container}>
      <NavBar></NavBar>
      <div className={style.title}>
        <h1>Clothes</h1>
      </div>
      <div className={style.filterContainer}>
        <div className={style.filter}>
          <span>Filter Products:</span>
          <div className={style.select}>
            <select>
              <option>Man</option>
              <option>Woman</option>
            </select>
          </div>
        </div>
      </div>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default ProductList;
