import { Outlet } from "react-router";
import TeacherForm from "./TeachersForm";

function AddTeacher() {
  return (
    <div className="sectionWrap">
      <h2>new Teacher</h2>
      <TeacherForm />
    </div>
  );
}
export default AddTeacher;
