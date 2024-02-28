import style from "./SummerWear.module.css";
import Announcement from "../../components/announcement/Announcement";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { summerWear } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";
function SummerWear() {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const handleFilter = (category) => {
    setCategoryFilter(category);
  };

  const filteredProducts = categoryFilter
    ? summerWear.filter((product) => product.category === categoryFilter)
    : summerWear;
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

export default SummerWear;
