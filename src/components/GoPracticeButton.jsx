import { useNavigate } from "react-router";
import frontRoutes from "../components/routes/frontRoutes.js";

function GoPracticeButton() {
  const navigate = useNavigate();
  function goPactice() {
    navigate(frontRoutes.pages.practice);
  }
  return <button onClick={() => goPactice()}>Go Practice</button>;
}
export default GoPracticeButton;
