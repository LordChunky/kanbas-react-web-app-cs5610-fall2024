import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";
import path from "path";

export default function CoursesNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();
    // const course = courses.find((course) => course._id === cid);

    const links = [
        { label: "Home", path: `/Kanbas/Courses/${cid}/Home` }, 
        { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules`}, 
        { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza`}, 
        { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom`}, 
        { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments`}, 
        { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes`}, 
        { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades`}, 
        { label: "People", path: `/Kanbas/Courses/${cid}/People`}
    ];

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 mr-4 rounded-0 d-none d-md-block">
            
            { /* Have to dynamically attached the course path into the URL */ }
            {links.map((link) => (
                <Link 
                key={link.path} 
                to={link.path} 
                className={`list-group-item text-danger border border-0
                ${pathname.includes(link.label)}`}>
                    {link.label}
                </Link>
            ))}

        </div>

    );
}
