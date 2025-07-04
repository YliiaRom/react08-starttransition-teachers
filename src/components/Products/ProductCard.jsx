import { useMemo } from "react";
import styles from "./Product.module.css";

function ProductCard({ id, name, price, imageUrl }) {
  const oldPrice = useMemo(() => {
    if (typeof price === "number") {
      return (price * 1.5).toFixed(2);
    } else {
      return "";
    }
  }, [price]);
  return (
    <div className={styles.card}>
      <div>
        <img src={imageUrl} alt={`${name}-${id}`} />
      </div>
      <div>
        <p>{name}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.</p>
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
export default ProductCard;
// "id": 8,
// "name": "Monitor",
// "price": 299.99,
// "imageUrl
