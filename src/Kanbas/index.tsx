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
import * as courseClient from "./Courses/client";
import * as enrollmentsClient from './Dashboard/Enrollment/client';

// import { addCourse, deleteCourse, updateCourse }
//   from "./Dashboard/Courses/reducer";

export default function Kanbas() {
  // State variables
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const [courses, setCourses] = useState<any[]>([]);

  // Standard Course template
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", 
    image: "/images/pain.jpeg", description: "New Description",
  });

  // Functions
  const findCoursesForUser = async () => {
    try {
      if (!currentUser) {
        return;
      }
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    // let courses = [];
    try {
      const allCourses = await courseClient.fetchAllCourses();
      let enrolledCourses: [];
      if (!currentUser) {
        enrolledCourses = []
      } else {
        enrolledCourses = await userClient.findCoursesForUser(
          currentUser._id
        );
      }
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  }; 
  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    } 
  }, [currentUser, enrolling]);

  // Add new course
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, { ...course, newCourse}]);
  };
  

  // delete course
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };


  // update course
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
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

  // Update the enrollment status of user
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };
 
  // console.log(currentUser);
  // console.log(courses);
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
                    enrolling={enrolling} 
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
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
  