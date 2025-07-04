import { useState } from "react";

import styles from "./ProductsByApi.module.css";
import ProductCardByApi from "./ProductCardByApi";

function ProductsListWithType({ productsData }) {
  return (
    <div>
      <h2>ProductsList</h2>

      <div className={styles.list}>
        {productsData?.products.map((item) => {
          return (
            <div key={item.id}>
              <ProductCardByApi {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductsListWithType;
