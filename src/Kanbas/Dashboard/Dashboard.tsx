import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {unenrollCourse, enrollCourse, setEnrollments} from "./Enrollment/reducer";

import * as enrollmentsClient from "../Dashboard/Enrollment/client";
// import { addCourse, deleteCourse, updateCourse }
//   from "./Courses/reducer";
export default function Dashboard(
    { courses, course, setCourse, setCourses, addNewCourse, deleteCourse, updateCourse }: {
        courses: any[]; 
        course: any;
        setCourse: (course: any) => void;
        setCourses: (course: any) => void;
        addNewCourse: () => void; 
        deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }
    ) {
    
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const dispatch = useDispatch();


    const [showAllCourses, setShowAllCourses] = useState(false);


    // A page toggler for rendering all courses for the student to choose
    const toggleShowAllCourses = () => {
        if(showAllCourses) {
            setShowAllCourses(false)
        } else {
            setShowAllCourses(true)
        }
    }

    // Fetch all enrollment
    const fetchEnrollments = async () => {
        const enrollments = await enrollmentsClient.fetchAllEnrollments();
        dispatch(setEnrollments(enrollments));
    };
    useEffect(() => {
        fetchEnrollments();
    }, []);


    // Enroll user
    const handleEnrollUser = async (enrollInfo: any) => {
        await enrollmentsClient.enrollUser(enrollInfo.user, enrollInfo.course)
        dispatch(enrollCourse(enrollInfo));
    };


    // Unenroll user
    const handleUnenrollUser = async (enrollInfo: any) => {
        await enrollmentsClient.unenrollUser(enrollInfo.user, enrollInfo.course)
        dispatch(unenrollCourse(enrollInfo.enrollCourseId));
    };


    // Filter out enrolled courses to show
    const enrolledCourses = courses.filter((course) =>
        enrollments.some((enrollment: any) =>
            enrollment.user === currentUser._id && enrollment.course === course._id
        )
    )

    // console.log(courses)
    // console.log(fetchEnrollments)
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {/* Only STUDENT role can have an Enrollments button */}
            
            {currentUser && currentUser.role !== "FACULTY" && (
                <div>
                    <button className="btn btn-primary float-end"
                    id="wd-enroll-new-course-click"
                    onClick={() => {
                        // When clicking, show all courses
                        toggleShowAllCourses()
                    }}> 
                    Enrollments  
                    </button>

                    <h2 id="wd-dashboard-all-courses">All Courses ({courses.length})
                    </h2> <hr />
                    <div id="wd-dashboard-courses" className="row">
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            {showAllCourses && courses.map((course) => {
                                const isUserEnrolledInCourse = enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id );
                                return(
                                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                        <div className="card rounded-3 overflow-hidden">
                                            <img src={`${course.image}`} width="100%" height={160} />
                                            <div className="card-body">
                                                <h5 className="wd-dashboard-course-title card-title">
                                                    {course.name} </h5>
                                                <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                    {course.description} </p>

                                                {/* Only STUDENT role can enroll or unenroll courses */}

                                                {/* If the course is enrolled, show the student option to unenroll */}
                                                { currentUser && currentUser.role !== "FACULTY" && isUserEnrolledInCourse === true && (
                                                    <span>
                                                        <button onClick={(event) => {
                                                            event.preventDefault();
                                                            const enrollmentCourseId = enrollments.find((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id)._id;
                                                            if (enrollmentCourseId) {
                                                                handleUnenrollUser({enrollCourseId: enrollmentCourseId, user: currentUser._id, course: course._id});
                                                            }
                                                            }} className="btn btn-danger float-end mb-1"
                                                            id="wd-delete-course-click">
                                                            Unenroll
                                                        </button>
                                                    </span>
                                                )}

                                                {/* If the course is unenrolled, show the student option to enroll */}
                                                { currentUser && currentUser.role !== "FACULTY" && isUserEnrolledInCourse === false &&(
                                                    <span>
                                                        <button onClick={(event) => {
                                                            event.preventDefault();
                                                            handleEnrollUser({user: currentUser._id, course: course._id})
                                                            }} className="btn btn-success float-end mb-1"
                                                            id="wd-delete-course-click">
                                                            Enroll
                                                        </button>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Only FACULTY role can add courses */}
            {currentUser && currentUser.role === "FACULTY" && (
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse} > 
                            Add 
                        </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5> <br />
                    {/* Course name and description input field */}
                    <input value={course.name} className="form-control mb-2" 
                        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                    <textarea value={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value }) } />

                    <hr />
                </div>
            )}
            
            <div>
                <h2 id="wd-dashboard-published">Published Courses ({enrolledCourses.length})
                </h2> <hr />
            </div>
            
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {/* If you click on the Enrollment button, the "Published Courses" automatically "collapse" so you can see all course but the
                    total enrolled course still shows */}
                    {!showAllCourses && enrolledCourses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <img src={`${course.image}`} width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>
                                        <button className="btn btn-primary"> Go </button>

                                        {/* Only FACULTY role can delete or edit courses */}
                                        { currentUser && currentUser.role === "FACULTY" && (
                                            <span>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                    }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>

                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            </span>
                                        )}

                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
