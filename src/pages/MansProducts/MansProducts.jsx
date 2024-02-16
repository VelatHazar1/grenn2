import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import style from "./MansProducts.module.css";
import { mens_products } from "../../data.js";
import { Link } from "react-router-dom";

function MansProducts() {
  return (
    <>
      <Announcement></Announcement>
      <NavBar></NavBar>
      <div className={style.products}>
        {mens_products.map((item, id) => (
          <div key={id} className={style.product}>
            <Link to={`/products/${item.id}`}>
              <img src={item.img} alt="" />
            </Link>

            <p className={style.productName}>{item.name}</p>
            <p className={style.productPrice}>${item.price}</p>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default MansProducts;
