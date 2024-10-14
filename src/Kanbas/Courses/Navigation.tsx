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

        </div>

    );
}
