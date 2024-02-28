import style from "./Products.module.css";
import { popularProducts } from "../../data";
import Product from "./Product";

function Products() {
  return (
    <>
      <h1 className={style.title}>It May Interest You</h1>
      <div className={style.container}>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id}></Product>
        ))}
      </div>
    </>
  );
}

export default Products;
