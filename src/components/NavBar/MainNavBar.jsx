import { NavLink } from "react-router";
import frontRouts from "../routes/frontRoutes.js";

function MainNavBar() {
  return (
    <div className="navWrap">
      <NavLink to={frontRouts.pages.practice}>Practice</NavLink>
      <NavLink to={frontRouts.pages.teachersMain.index}>
        Practice: Site For Teachers
      </NavLink>
    </div>
  );
}
export default MainNavBar;
