import style from "./Slider.module.css";
import { Icon } from "@iconify-icon/react";
import man from "../../assets/homeImages/manImage.png";
import woman from "../../assets/homeImages/womanImage.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Slider() {
  const [translateValue, setTranslateValue] = useState(0);

  const handleTranslateLeft = () => {
    setTranslateValue(0);
  };

  const handleTranslateRight = () => {
    setTranslateValue(-100);
  };
  return (
    <div className={style.container}>
      <div className={style.leftArrow} onClick={handleTranslateLeft}>
        <Icon icon="bx:left-arrow" />
      </div>

      <div className={style.wrapper}>
        <div
          className={style.slide}
          style={{
            transition: "transform 1s ease",
            transform: `translateX(${translateValue}vw)`,
          }}
        >
          <div className={style.ImageContainer}>
            <img src={man} alt="Man Home Page Image" />
          </div>
          <div className={style.InfoContainer}>
            <h1>SALE</h1>
            <h2>UP TO 60% OFF</h2>
            <p>On selected items</p>
            <Link to="/productList" className={style.button}>
              Buy
            </Link>
          </div>
        </div>
        <div
          className={style.slide}
          style={{
            transition: "transform 1s ease",
            transform: `translateX(${translateValue}vw)`,
          }}
        >
          <div className={style.ImageContainer}>
            <img src={woman} alt="Man Home Page Image" />
          </div>
          <div className={style.InfoContainer}>
            <h1>SALE</h1>
            <h2>UP TO 60% OFF</h2>
            <p>On selected items</p>
            <button>Buy</button>
          </div>
        </div>
      </div>

      <div className={style.rightArrow} onClick={handleTranslateRight}>
        <Icon icon="bx:right-arrow" />
      </div>
    </div>
  );
}

export default Slider;
