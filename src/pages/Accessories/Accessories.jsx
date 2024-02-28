import style from "./Accessories.module.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import Announcement from "../../components/announcement/Announcement";
import { accesories } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

function Accessories() {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const handleFilter = (category) => {
    setCategoryFilter(category);
  };

  const filteredProducts = categoryFilter
    ? accesories.filter((product) => product.category === categoryFilter)
    : accesories;
  return (
    <>
      <Announcement></Announcement>
      <NavBar></NavBar>
      <div>
        <button onClick={() => handleFilter("man")}>men</button>
        <button onClick={() => handleFilter("woman")}>women</button>
      </div>
      <div className={style.products}>
        {filteredProducts.map((item, id) => (
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

export default Accessories;
