import { Outlet, useNavigate } from "react-router";
import useTeacherApi from "../../components/hooks/useTeachersApi.js";
import List from "../../components/List.jsx";
import { useCallback, useEffect, useState } from "react";

import frontRoutes from "../../components/routes/frontRoutes.js";
import GoAddNewCardButton from "../../components/GoAddNewCardButton.jsx";

function Teachers() {
  const navigate = useNavigate();

  const [selectedTeachersId, setSelectedTeachersId] = useState([]);
  const { data: teachersList, loading, error, getTeachers } = useTeacherApi();

  //--заміна значень для кнопки
  const onSelect = useCallback((id) => {
    if (selectedTeachersId.includes(id))
      setSelectedTeachersId((prev) => prev.filter((item) => item !== id));
    else setSelectedTeachersId((prev) => [...prev, id]);
  }, []);

  //- go meeting
  function goToMeeting() {
    navigate(frontRoutes.navigate.teachersMain.meeting, {
      state: {
        teachers: teachersList.data.filter((teacher) =>
          selectedTeachersId.includes(teacher.id)
        ),
      },
    });
  }

  //--рендер teacher
  useEffect(() => {
    getTeachers();
  }, [getTeachers]);

  let content;
  if (loading) content = <p>Loading ....</p>;
  else if (error) content = <p>Error! </p>;
  else if (teachersList)
    content = (
      <List
        list={teachersList.data}
        onSelect={onSelect}
        isSelect={selectedTeachersId}
      />
    );
  return (
    <div className="sectionWrap">
      <h2>teachers</h2>
      <GoAddNewCardButton />
      <button onClick={() => goToMeeting()}>Go to meeting</button>
      <Outlet /> {content}
    </div>
  );
}
export default Teachers;
