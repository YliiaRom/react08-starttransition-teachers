import { useNavigate } from "react-router";
import frontRoutes from "../components/routes/frontRoutes.js";
function Page404() {
  const navigate = useNavigate();
  function infoBack() {
    navigate(frontRoutes.pages.practice);
  }
  return (
    <div className="sectionWrap">
      <h2 style={{ fontSize: "100px" }}>404</h2>
      <button onClick={() => infoBack()}>Back</button>
      <p>такого маршруту немає</p>
    </div>
  );
}
export default Page404;
