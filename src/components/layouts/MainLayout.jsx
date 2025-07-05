import { Outlet } from "react-router";
import MainNavBar from "../NavBar/MainNavBar";

function MainLayout() {
  return (
    <div>
      <header>
        <MainNavBar />
      </header>

      <main>
        <Outlet />
        <hr />
      </main>
      <footer>
        <h2>@2025</h2>
      </footer>
    </div>
  );
}
export default MainLayout;
