import { memo } from "react";
import CategoryItem from "./CategoryItem";
import styles from "./ProductsByApi.module.css";
function CategoryList({ dataCategiries, getData }) {
  return (
    <div className={styles.categoryList}>
      {dataCategiries?.categories.map((el) => (
        <CategoryItem title={el} key={el} getData={getData} />
      ))}
    </div>
  );
}
export default memo(CategoryList);
