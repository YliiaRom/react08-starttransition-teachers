import { Outlet } from "react-router";
import GoPracticeButton from "../GoPracticeButton";
import HeaderTeachers from "./components/HeaderTeachers";
import FooterTeachers from "./components/FooterTeachers";

function MainTeachersLayout() {
  return (
    <div>
      <div>
        <HeaderTeachers />
      </div>

      <div>
        <h2>
          Треба трохи зачекати —і сервер поверне свіжі дані. Воно того варте{" "}
        </h2>
        <Outlet />
        <hr />
        <GoPracticeButton />
      </div>

      <div>
        <FooterTeachers />
      </div>
    </div>
  );
}
export default MainTeachersLayout;
