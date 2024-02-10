import style from "./CategoryItem.module.css";

function CategoryItem({ item }) {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={item.img} alt="" />
      </div>
      <div className={style.info}>
        <div className={style.title}>
          <h1>{item.title}</h1>
        </div>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default CategoryItem;
