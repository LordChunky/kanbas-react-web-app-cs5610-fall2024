import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";
import path from "path";

export default function CoursesNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);

    const links = [
        { label: "Home", path: `/Kanbas/Courses/${course && course._id}/Home` }, 
        { label: "Modules", path: `/Kanbas/Courses/${course && course._id}/Modules`}, 
        { label: "Piazza", path: `/Kanbas/Courses/${course && course._id}/Piazza`}, 
        { label: "Zoom", path: `/Kanbas/Courses/${course && course._id}/Zoom`}, 
        { label: "Assignments", path: `/Kanbas/Courses/${course && course._id}/Assignments`}, 
        { label: "Quizzes", path: `/Kanbas/Courses/${course && course._id}/Quizzes`}, 
        { label: "Grades", path: `/Kanbas/Courses/${course && course._id}/Grades`}, 
        { label: "People", path: `/Kanbas/Courses/${course && course._id}/People`}
    ];

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 mr-4 rounded-0 d-none d-md-block">
            { /* Have to dynamically attached the course path into the URL */ }
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item text-danger border border-0
                ${pathname.includes(link.label)}`}>
                    {link.label}
                </Link>
            ))}

            {/* <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
            className="list-group-item text-danger border border-0"> 
                Home 
            </Link>

            <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
            className="list-group-item text-danger border border-0"> 
                Modules 
            </Link>

            <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
            className="list-group-item text-danger border border-0"> 
                Piazza 
            </Link>

            <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
            className="list-group-item text-danger border border-0"> 
                Zoom 
            </Link>

            <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
            className="list-group-item text-danger border border-0"> 
                Assignments 
            </Link>

            <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
            className="list-group-item text-danger border border-0"> 
                Quizzes 
            </Link>

            <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
            className="list-group-item text-danger border border-0" > 
                People 
            </Link> */}
        </div>

    );
}
