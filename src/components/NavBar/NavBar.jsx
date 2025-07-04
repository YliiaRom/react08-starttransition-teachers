import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className={`navBar`}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Головна
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Магазин
      </NavLink>
      <NavLink
        to="/products-api"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Магазин + fakestoreapi
      </NavLink>
      <NavLink
        to="/payment"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Правила оплати
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Контакти
      </NavLink>
    </div>
  );
}
export default Navbar;
