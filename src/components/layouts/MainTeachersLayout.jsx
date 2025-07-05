import { Outlet } from "react-router";
import GoPracticeButton from "../GoPracticeButton";
import HeaderTeachers from "./components/HeaderTeachers";
import FooterTeachers from "../../components/layouts/components/FooterTeachers";

function MainTeachersLayout() {
  return (
    <div>
      <div>
        <HeaderTeachers />
      </div>

      <div>
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
