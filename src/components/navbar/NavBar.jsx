import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { Icon } from "@iconify-icon/react";
import { CartContext } from "../../store/index";
import { useContext } from "react";
function NavBar() {
  const { shoppingCart } = useContext(CartContext);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <Link to="/mansproducts" className={style.section}>
            Man
          </Link>
          <Link to={"/womansproducts"} className={style.section}>
            Woman
          </Link>
        </div>
        <div className={style.center}>
          <Link to="/" className={style.logo}>
            GRENN
          </Link>
        </div>
        <Link to="/cart" className={style.right}>
          <Icon icon="solar:cart-linear" width={30} />
          <span className={style.amount}>{shoppingCart.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
