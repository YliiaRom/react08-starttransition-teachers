import { NavLink } from "react-router";
import frontRouts from "../../routes/frontRoutes.js";

function FooterTeachers() {
  return (
    <>
      <div className="headerTeachers">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={frontRouts.navigate.teachersMain.teachers.index}
        >
          Вчителі
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={frontRouts.navigate.teachersMain.meeting}
        >
          Збори
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={frontRouts.navigate.teachersMain.aboutApp}
        >
          Про Додаток
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={frontRouts.navigate.teachersMain.aboutDev}
        >
          Про Розробника
        </NavLink>
      </div>
    </>
  );
}
export default FooterTeachers;
