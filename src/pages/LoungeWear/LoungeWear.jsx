import style from "./LoungeWear.module.css";
import Announcement from "../../components/announcement/Announcement";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { loungeWear } from "../../data";

function LoungeWear() {
  return (
    <>
      <Announcement></Announcement>
      <NavBar></NavBar>
      <div className={style.products}>
        {loungeWear.map((item, id) => (
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

export default LoungeWear;
