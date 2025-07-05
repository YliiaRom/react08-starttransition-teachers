import { Outlet } from "react-router";
import GoTeachersMainPageButton from "../GoTeachersMainPageButton";

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
