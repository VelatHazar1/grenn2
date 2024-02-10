import style from "./Categories.module.css";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";

function Categories() {
  return (
    <div className={style.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </div>
  );
}

export default Categories;
