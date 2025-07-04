import { useState } from "react";
import apiRoutes from "../../api/apiRoutes.js";
import styles from "./ProductsByApi.module.css";
import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch.js";
import ProductCardByApi from "./ProductCardByApi.jsx";
import CategoryList from "./CategotyApiList.jsx";

function ProductsListByApi() {
  const [productsItems, setProductitems] = useState([]);
  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
  } = useFetch(apiRoutes.productsList);

  return (
    <div>
      <h2>ProductsList</h2>

      <div className={styles.list}>
        {productsData?.products.map((item) => {
          return (
            <div key={item.id} to={`/products/${item.id}`}>
              <ProductCardByApi {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductsListByApi;
