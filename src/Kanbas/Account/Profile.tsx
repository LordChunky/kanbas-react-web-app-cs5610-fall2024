import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
        <h3>Profile</h3>
        <input id="wd-username" placeholder="alice" className="form-control mb-2"/>
        <input id="wd-password" value="123" placeholder="password" type="password" className="form-control mb-2"/>
        <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2"/>
        <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-2"/>
        <input id="wd-dob" placeholder="mm/dd/yyyy" value="01-01-2000" type="date" className="form-control mb-2"/>
        <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-2"/>
        <div className="form-group">
            <select id="wd-role" className="form-control mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
        </div>
        <Link className="btn btn-danger w-100" to="/Kanbas/Account/Signin">Sign out</Link>
    </div>
    );
}
