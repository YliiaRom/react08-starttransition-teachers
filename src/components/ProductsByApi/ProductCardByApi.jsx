import { useMemo, useState } from "react";
import styles from "./ProductsByApi.module.css";

function ProductCardByApi({
  id,
  title,
  image,
  price,
  description,
  brand,
  category,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const oldPrice = useMemo(() => {
    if (typeof price === "number") {
      return (price * 1.1).toFixed(2);
    } else {
      return "";
    }
  }, [price]);
  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h2>{`${brand} id:${id}`}</h2>
        <p style={{ color: "green" }}>{category}</p>

        <p>{title}</p>
        <p className="more" onClick={() => setIsOpen((v) => !v)}>
          Опис
        </p>
        {isOpen && <p className="moreBody">{description}</p>}

        <h2>{price}</h2>
        {oldPrice && (
          <p style={{ textDecoration: "line-through", color: "red" }}>
            {oldPrice}
          </p>
        )}
      </div>
    </div>
  );
}
export default ProductCardByApi;
