import { productsItems } from "../helpers/products.js";
import ProductCard from "./ProductCard";
import frontRoutes from "../../components/routes/frontRoutes.js";
import { Link } from "react-router";
import styles from "./Product.module.css";

function ProductsList() {
  return (
    <div>
      <h2>ProductsList</h2>
      <div className={styles.list}>
        {productsItems.map((item) => {
          return (
            <Link key={item.id} to={`/products/${item.id}`}>
              <ProductCard {...item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default ProductsList;
