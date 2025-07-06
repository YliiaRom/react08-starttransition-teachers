import { Route, Routes } from "react-router";
import frontRoutes from "./frontRoutes.js";
import Practice from "../../pages/Practice.jsx";
import Page404 from "../../pages/Page404.jsx";

import TeachersMain from "../../pages/TeachersPages/TeacherMain.jsx";

import Teachers from "../../pages/TeachersPages/Teachers.jsx";
import Meeting from "../../pages/TeachersPages/Meeting.jsx";
import AboutApp from "../../pages/TeachersPages/AboutApp.jsx";
import AboutDev from "../../pages/TeachersPages/AboutDev.jsx";

import AddTeacher from "../../pages/TeachersPages/AddTeacher.jsx";
import EditTeacher from "../../pages/TeachersPages/EditTeacher.jsx";
import Detail from "../../pages/TeachersPages/Detail.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import MainTeachersLayout from "../Layouts/MainTeachersLayout.jsx";
import SimpleTeachersLayout from "../Layouts/SimpleTeachersLayout.jsx";
function ApiRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path={frontRoutes.pages.practice} element={<Practice />} />

        <Route
          path={frontRoutes.pages.teachersMain.index}
          element={<MainTeachersLayout />}
        >
          {/* ====main teachers>> */}
          <Route
            path={frontRoutes.pages.teachersMain.index}
            element={<TeachersMain />}
          >
            {/* ==== teachers>> */}
            <Route
              path={frontRoutes.pages.teachersMain.teachers.index}
              element={<Teachers />}
            >
              <Route
                path={frontRoutes.pages.teachersMain.teachers.add}
                element={<AddTeacher />}
              />
              <Route
                path={frontRoutes.pages.teachersMain.teachers.edit}
                element={<EditTeacher />}
              />
            </Route>

            <Route
              path={frontRoutes.pages.teachersMain.meeting}
              element={<Meeting />}
            />
            <Route
              path={`${frontRoutes.pages.teachersMain.teachers.index}/:id/detail`}
              element={<Detail />}
            />
          </Route>
        </Route>

        {/* ===========simple layout */}
        <Route
          path={`${frontRoutes.pages.teachersMain.index}/simple`}
          element={<SimpleTeachersLayout />}
        >
          <Route
            path={frontRoutes.pages.teachersMain.aboutApp}
            element={<AboutApp />}
          />
          <Route
            path={frontRoutes.pages.teachersMain.aboutDev}
            element={<AboutDev />}
          />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
export default ApiRoutes;
