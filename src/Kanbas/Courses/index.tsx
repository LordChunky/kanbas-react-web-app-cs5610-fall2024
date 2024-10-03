import { Routes, Route, Navigate } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";

export default function Courses() {
    return (
      <div id="wd-courses">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">

            <li className="breadcrumb-item active">
              <a href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <h2 className="text-danger">
                  <FaAlignJustify className="me-4 fs-4 mb-1" />
                  Course 1234
                </h2>
              </a>
            </li>
            
          </ol>
        </nav>


        {/* <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#/Kanbas/Courses/1234/Home">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav> */}


        {/* <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          Course 1234
        </h2> <hr /> */}
        <hr />
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CoursesNavigation />
          </div>

          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
          </div>
        </div>

      </div>
  );
}
  