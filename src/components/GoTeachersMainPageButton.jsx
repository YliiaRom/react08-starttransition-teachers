import { useNavigate } from "react-router";
import frontRoutes from "./routes/frontRoutes.js";

function GoTeachersMainPageButton() {
  const navigate = useNavigate();
  function goMainPage() {
    navigate(frontRoutes.navigate.teachersMain.teachers.index);
  }
  return <button onClick={() => goMainPage()}>Go Page Teachers</button>;
}
export default GoTeachersMainPageButton;
