import { Outlet } from "react-router";
import Navbar from "./NavBar/NavBar";

function Layout() {
  return (
    <div>
      <header>
        <Navbar key={1234} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Navbar key={12345} />
      </footer>
    </div>
  );
}
export default Layout;
