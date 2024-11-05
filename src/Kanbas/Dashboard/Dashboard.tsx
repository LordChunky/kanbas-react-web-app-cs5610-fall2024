import { useDispatch, useSelector } from "react-redux";
import * as db from "../Database";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {unenrollCourse, enrollCourse} from "./Enrollment/reducer";
import { addCourse, deleteCourse, updateCourse }
  from "./Courses/reducer";
export default function Dashboard(
    // { courses, course, pageToggle, setCourse, addNewCourse, deleteCourse, updateCourse, togglePage }: {
    //     courses: any[]; 
    //     course: any; 
    //     pageToggle: boolean;
    //     setCourse: (course: any) => void;
    //     addNewCourse: () => void; 
    //     deleteCourse: (course: any) => void;
    //     updateCourse: () => void;
    //     togglePage: () => void }
    ) {
    
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const dispatch = useDispatch();


    const [showAllCourses, setShowAllCourses] = useState(false);
  
    const [courses, setCourses] = useState<any[]>(db.courses.filter((course) =>
        enrollments.some(
        (enrollment:any) =>
        enrollment.course === course._id))
    );
    
    const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", 
    image: "/images/pain.jpeg", description: "New Description",
    });


    // A toggler for rendering a part of the page
    const toggleShowAllCourses = () => {
        if(showAllCourses || currentUser.role === "FACULTY") {
        setCourses(
            db.courses.filter( (course) => 
            enrollments.some(
            (enrollment: any) => 
            enrollment.user === currentUser._id && 
            enrollment.course === course._id)
            ).map((course:any) => ({...course, courseEnrolled: true}))
        )
        setShowAllCourses(false)
        } else {
        setCourses(
            db.courses.map((course) => {
                if(enrollments.some(
                (enrollment: any) => 
                    enrollment.user === currentUser._id && 
                    enrollment.course === course._id)){
                    return {...course, courseEnrolled: true}
                } else {
                return {...course, courseEnrolled: false}
                }
            }
            )
        )
        setShowAllCourses(true)
        }
    }



    console.log(showAllCourses)
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
                

                    <h2 id="wd-dashboard-all-courses">All Courses ({showAllCourses && (courses.length)})
                    </h2> <hr />
                    <div id="wd-dashboard-courses" className="row">
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            {showAllCourses && courses.map((course) => {
                                if(enrollments.some(
                                    (enrollment: any) => 
                                    enrollment.user === currentUser._id && 
                                    enrollment.course === course._id)){
                                    return {...course, courseEnrolled: true}
                                } else {
                                    return {...course, courseEnrolled: false}
                                }
                            }).map((course) => (
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


                                                {/* Only STUDENT role can enroll or unenroll courses */}

                                                {/* If the course is enrolled, show the student option to unenroll */}
                                                { currentUser && currentUser.role !== "FACULTY" && course.courseEnrolled === true &&(
                                                    <span>
                                                        <button onClick={(event) => {
                                                            event.preventDefault();
                                                            dispatch(unenrollCourse({
                                                                course: course._id,
                                                                user: currentUser._id
                                                            }));
                                                            }} className="btn btn-danger float-end"
                                                            id="wd-delete-course-click">
                                                            Unenroll
                                                        </button>
                                                    </span>
                                                )}

                                                {/* If the course is unenrolled, show the student option to enroll */}
                                                { currentUser && currentUser.role !== "FACULTY" && course.courseEnrolled === false &&(
                                                    <span>
                                                        <button onClick={(event) => {
                                                            event.preventDefault();
                                                            dispatch(enrollCourse({
                                                                course: course._id,
                                                                user: currentUser._id
                                                            }));
                                                            }} className="btn btn-success float-end"
                                                            id="wd-delete-course-click">
                                                            Enroll
                                                        </button>
                                                    </span>
                                                )}

                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                            }
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
                            onClick={() => addCourse(courses)} > 
                            Add 
                        </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={() => updateCourse(courses)} id="wd-update-course-click">
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
            

            {currentUser && currentUser.role === "FACULTY" && (
                <div>
                    <h2 id="wd-dashboard-published">Published Courses ({courses.length})
                    </h2> <hr />
                </div>
            )}

            {currentUser && currentUser.role !== "FACULTY" && (
                <div>
                    <h2 id="wd-dashboard-published">Published Courses ({courses.filter((course) => enrollments.some((enrollment:any) => enrollment.user === currentUser._id && enrollment.course === course._id )).length})
                    </h2> <hr />
                </div>
            )}
            {/* <h2 id="wd-dashboard-published">Published Courses ({courses.filter((course) => enrollments.some((enrollment:any) => enrollment.user === currentUser._id && enrollment.course === course._id )).length})
            </h2> <hr /> */}
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {/* If you click on the Enrollment button, the "Published Courses" automatically "collapse" so you can see all course but the
                    total enrolled course still shows */}
                    {!showAllCourses && courses.filter((course) =>
                        enrollments.some(
                        (enrollment:any) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    )).map((course) => (
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


                                        {/* Only STUDENT role can enroll or unenroll courses */}

                                        {/* If the course is enrolled, show the student option to unenroll */}
                                        { currentUser && currentUser.role !== "FACULTY" && course.courseEnrolled === true &&(
                                            <span>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    dispatch(unenrollCourse({
                                                        course: course._id,
                                                        user: currentUser._id
                                                    }));
                                                    }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Unenroll
                                                </button>
                                            </span>
                                        )}

                                        {/* If the course is unenrolled, show the student option to enroll */}
                                        { currentUser && currentUser.role !== "FACULTY" && course.courseEnrolled === false &&(
                                            <span>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    dispatch(enrollCourse({
                                                        course: course._id,
                                                        user: currentUser._id
                                                    }));
                                                    }} className="btn btn-success float-end"
                                                    id="wd-delete-course-click">
                                                    Enroll
                                                </button>
                                            </span>
                                        )}


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
