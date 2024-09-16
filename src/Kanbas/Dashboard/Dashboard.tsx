import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                {/* Course 1 */}
                <div className="wd-dashboard-course">
                    <img src="/images/shocked.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title"> Algorithm </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* Course 2 */}
                <div className="wd-dashboard-course"> 
                    <img src="/images/shocked.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title"> Web Development </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* Course 3 */}
                <div className="wd-dashboard-course"> 
                <img src="/images/shocked.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title"> Mobile App Development </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* Course 4 */}
                <div className="wd-dashboard-course"> 
                <img src="/images/shocked.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title"> Database Management </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                
                {/* Course 5 */}
                <div className="wd-dashboard-course"> 
                <img src="/images/shocked.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title"> Information Retrieval </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* Course 6 */}
                <div className="wd-dashboard-course"> 
                <img src="/images/shocked.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title"> Foundation of Software Engineering </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/* Course 7 */}
                <div className="wd-dashboard-course"> 
                <img src="/images/shocked.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
                        <p className="wd-dashboard-course-title"> Full Stack software developer </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>


            </div>
        </div>
    );
}
