import { useFetch } from "../components/hooks/useFetch";
import apiRoutes from "../api/apiRoutes.js";
import ProductsList from "../components/Products/ProductsList";
import CategoryList from "../components/ProductsByApi/CategotyApiList";
import ProductsListByApi from "../components/ProductsByApi/ProductListByApi";
import { useCallback, useState } from "react";
import useFetchWithBtn from "../components/hooks/useFetchWithBtn.js";
import ProductsListWithType from "../components/ProductsByApi/ProductsListWithType.jsx";

function ShopByApi() {
  const [typeList, setTypeList] = useState([]);
  const {
    data: dataTypeCategory,
    loader: loaderTypeCategory,
    error: errorTypeCategory,
    getData,
  } = useFetchWithBtn();
  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch(apiRoutes.category);

  return (
    <div className="sectionWrap">
      <h2>Shop</h2>
      <CategoryList dataCategiries={categoryData} getData={getData} />
      {dataTypeCategory && (
        <ProductsListWithType productsData={dataTypeCategory} />
      )}

      <hr />
      <ProductsListByApi />
    </div>
  );
}
export default ShopByApi;
