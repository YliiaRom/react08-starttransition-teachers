import { useNavigate } from "react-router";
import frontRoutes from "../components/routes/frontRoutes.js";

function GoDetailTeacherCardButton({ id, item }) {
  const navigate = useNavigate();
  function goDetail(id) {
    navigate(frontRoutes.navigate.teachersMain.teachers.detail(id), {
      state: { teacher: item },
    });
  }
  return (
    <button onClick={() => goDetail(id)} className="moreDetail">
      detail
    </button>
  );
}
export default GoDetailTeacherCardButton;
