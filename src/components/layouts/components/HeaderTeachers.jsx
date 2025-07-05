import { NavLink } from "react-router";
import frontRouts from "../../routes/frontRoutes.js";

function HeaderTeachers() {
  return (
    <div className="headerTeachers">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={frontRouts.navigate.teachersMain.teachers.index}
      >
        Вчителі
      </NavLink>
      <NavLink
        to={frontRouts.navigate.teachersMain.meeting}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Збори
      </NavLink>
      <NavLink
        to={frontRouts.navigate.teachersMain.aboutApp}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Про Додаток
      </NavLink>
      <NavLink
        to={frontRouts.navigate.teachersMain.aboutDev}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Про Розробника
      </NavLink>
    </div>
  );
}
export default HeaderTeachers;
