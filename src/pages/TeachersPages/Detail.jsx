import { useLocation } from "react-router";
import TeacherDetailCard from "../../components/Layouts/components/TeacherDetailCard";
const itemVal = {
  id: "x",
  name: "Not value",
  subject: "Not value",
  photo: "https://cdn-icons-png.flaticon.com/512/168/168724.png",
};
function Detail() {
  const { state } = useLocation();
  const data = state?.teacher || itemVal;

  return (
    <div className="sectionWrap">
      <h2>Detail</h2>
      <TeacherDetailCard item={data} />
    </div>
  );
}
export default Detail;
