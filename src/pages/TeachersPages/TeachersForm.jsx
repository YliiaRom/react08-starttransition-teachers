import { useNavigate } from "react-router";
import useFetchWithBtn from "../../components/hooks/useFetchWithBtn.js";
import useInputParams from "../../components/hooks/useInputParams.js";
import frontRoutes from "../../components/routes/frontRoutes.js";
function TeacherForm() {
  const { addTeacher } = useFetchWithBtn();
  const navigate = useNavigate();
  const { valueInput: valueInputName, handlerInput: handlerInputName } =
    useInputParams();
  const { valueInput: valueInputSubject, handlerInput: handlerInputSubject } =
    useInputParams();
  const { valueInput: valueInputPhoto, handlerInput: handlerInputPhoto } =
    useInputParams();
  const { valueInput: valueInputId, handlerInput: handlerInputId } =
    useInputParams();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const newCard = {
      name: valueInputName || "not value",
      photo:
        valueInputPhoto ||
        `https://cdn-icons-png.flaticon.com/512/168/168723.png`,
      subject: valueInputSubject || "not value",
    };
    console.log(newCard);
    await addTeacher(newCard);
    navigate(frontRoutes.navigate.teachersMain.teachers.index);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h2>Teacher Form</h2>
      <label>
        photo:{" "}
        <input
          type="text"
          placeholder="url"
          value={valueInputPhoto}
          onChange={handlerInputPhoto}
        />
      </label>
      <hr />
      <label>
        id:{" "}
        <input
          type="number"
          required
          placeholder="number"
          value={valueInputId}
          onChange={handlerInputId}
        />
      </label>
      <label>
        name:{" "}
        <input
          type="text"
          required
          placeholder="name"
          value={valueInputName}
          onChange={handlerInputName}
        />
      </label>
      <hr />
      <label>
        subject:
        <input
          type="text"
          required
          placeholder="subject"
          value={valueInputSubject}
          onChange={handlerInputSubject}
        />
      </label>
      <button className="more" type="submit">
        Create
      </button>
      треба потім оновити щоб побачити данні нового вчителя
    </form>
  );
}
export default TeacherForm;
