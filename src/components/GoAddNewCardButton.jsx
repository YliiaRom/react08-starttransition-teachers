import { useNavigate } from "react-router";
import frontRoutes from "../components/routes/frontRoutes.js";

function GoAddNewCardButton() {
  const navigate = useNavigate();
  function goCreateNewCard() {
    navigate(frontRoutes.navigate.teachersMain.teachers.add);
  }
  return <button onClick={() => goCreateNewCard()}>create new Teacher</button>;
}
export default GoAddNewCardButton;
