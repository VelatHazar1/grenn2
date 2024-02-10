import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { Icon } from "@iconify-icon/react";
function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <div className={style.section}>Man</div>
          <div className={style.section}>Woman</div>
        </div>
        <div className={style.center}>
          <div className={style.logo}>
            <h1>GRENN</h1>
          </div>
        </div>
        <Link to="/cart" className={style.right}>
          <Icon icon="solar:cart-linear" width={30} />
          <span className={style.amount}>0</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
