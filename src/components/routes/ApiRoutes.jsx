import { Route, Routes } from "react-router";
import frontRoutes from "./frontRoutes.js";
import Home from "../../pages/Home";
import Contacts from "../../pages/Contacts.jsx";
import Shop from "../../pages/Shop.jsx";
import Payment from "../../pages/Payment.jsx";
import Layout from "../Layout.jsx";
import Detail from "../../pages/Detail.jsx";
import ShopByApi from "../../pages/ShopByApi.jsx";
function ApiRoutes() {
  return (
    <div className="sectionWrap">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={frontRoutes.pages.products.index} element={<Shop />} />
          <Route
            path={frontRoutes.pages.products.api}
            element={<ShopByApi />}
          />
          <Route path={frontRoutes.pages.contacts} element={<Contacts />} />
          <Route path={frontRoutes.pages.payment} element={<Payment />} />
          <Route
            path={frontRoutes.pages.products.detail}
            element={<Detail />}
          />
        </Route>
      </Routes>
    </div>
  );
}
export default ApiRoutes;
