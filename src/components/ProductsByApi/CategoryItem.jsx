import styles from "./ProductsByApi.module.css";
function CategoryItem({ title, getData }) {
  return (
    <div className={styles.moreCategory} onClick={() => getData(title)}>
      {title}
    </div>
  );
}
export default CategoryItem;
