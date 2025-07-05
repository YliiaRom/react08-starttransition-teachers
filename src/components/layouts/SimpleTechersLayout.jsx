import { Outlet } from "react-router";
import GoTeachersMainPageButton from "../GoTeachersMainPageButton";
import GoPracticeButton from "../GoPracticeButton";

function SimpleTeachersLayout() {
  return (
    <div>
      <Outlet />
      <hr />
      <GoTeachersMainPageButton />
    </div>
  );
}
export default SimpleTeachersLayout;
