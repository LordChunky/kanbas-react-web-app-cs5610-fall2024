import "./styles.css";
import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // import the redux store Provider
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as coursesClient from "./Courses/client";

// import { addCourse, deleteCourse, updateCourse }
//   from "./Dashboard/Courses/reducer";

export default function Kanbas() {
  // State variables
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [courses, setCourses] = useState<any[]>([]);

  // Standard Course template
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", 
    image: "/images/pain.jpeg", description: "New Description",
  });

  // Functions

  // Fetch the all courses
  const fetchCourses = async () => {
    try {
      const courses = await coursesClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  // Add new course
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, { ...course, newCourse}]);
  };
  

  // delete course
  const deleteCourse = async (courseId: string) => {
    const status = await coursesClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };


  // update course
  const updateCourse = async () => {
    await coursesClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  return (
    <Session>
      {/* no longer need to wrap this part with "<Provider store={store}>" since it has already been wrapped in App.tsx */}
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
                    course={course}
                    setCourse={setCourse}
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
    </Session>
  );
}
  