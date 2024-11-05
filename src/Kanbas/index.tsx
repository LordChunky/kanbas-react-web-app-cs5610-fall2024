import "./styles.css";
import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import { useSelector } from "react-redux"; // import the redux store Provider
import ProtectedRoute from "./Account/ProtectedRoute";
// import { addCourse, deleteCourse, updateCourse, setCourse }
//   from "./Dashboard/Courses/reducer";

export default function Kanbas() {
  // State variables
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  
  const [courses, setCourses] = useState<any[]>(db.courses.filter((course) =>
    enrollments.some(
    (enrollment:any) =>
    enrollment.course === course._id))
  );
  const [courseTemplate, setCourseTemplate] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", 
    image: "/images/pain.jpeg", description: "New Description",
  });


  // Functions
  const addNewCourse = () => {
    setCourses([...courses, { ...courseTemplate, _id: new Date().getTime().toString() }]);
  };
  
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === courseTemplate._id) {
          return courseTemplate;
        } else {
          return c;
        }
      })
    );
  };


  return (
    // no longer need to wrap this part with "<Provider store={store}>" since it has already been wrapped in App.tsx
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={courseTemplate}
                  setCourse={setCourseTemplate}
                  setCourses={setCourses}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                /> 
              </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
      </div>
    </div>
  );
}
  