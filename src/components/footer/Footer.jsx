import style from "./Footer.module.css";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.logo}>
          <h1>GRENN</h1>
        </div>
        <div className={style.desc}>
          <p>
            Elevate Your Style, Embrace Grennn ,Where Fashion Meets Confidence!
          </p>
        </div>
        <div className={style.socialContainer}>
          <div className={style.icon}>
            <Icon icon="lucide:instagram" width={25} />
          </div>
          <div className={style.icon}>
            <Icon icon="simple-icons:shopify" width={25} />
          </div>
          <div className={style.icon}>
            <Icon icon="teenyicons:pinterest-outline" width={25} />
          </div>
          <div className={style.icon}>
            <Icon icon="pajamas:twitter" width={25} />
          </div>
        </div>
      </div>
      <div className={style.center}>
        <div className={style.title}>
          <ul className={style.list}>
            <Link to={"/"}>
              <li className={style.listItem}>Home</li>
            </Link>
            <Link to={"/cart"}>
              <li className={style.listItem}>Cart</li>
            </Link>
            <Link to={"/mansproducts"}>
              <li className={style.listItem}>Man Fashion</li>
            </Link>
            <Link to={"/womansproducts"}>
              <li className={style.listItem}>Woman Fashion</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.title}>
          <h2>Contact</h2>
          <div className={style.contact}>
            <p>
              <Icon
                icon="ic:sharp-map"
                width={25}
                style={{ marginRight: "15px" }}
              />
              1928 Mardin , 47400 Yenikent Kızıltepe
            </p>
          </div>
          <div className={style.contact}>
            <p>
              <Icon
                icon="ph:phone"
                width={25}
                style={{ marginRight: "15px" }}
              />
              +90 555 123 45 67
            </p>
          </div>
          <div className={style.contact}>
            <p>
              <Icon
                icon="ic:outline-email"
                width={25}
                style={{ marginRight: "15px" }}
              />{" "}
              contact@grenn.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
