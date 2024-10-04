import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group fs-5 me-4 rounded-0 d-none d-md-block">
        <Link to={`/Kanbas/Account/Signin`}  id="wd-signin-home-link" 
          className="list-group-item text-danger border border-0">
          Signin  
        </Link> 

        <Link to={`/Kanbas/Account/Signup`}  id="wd-signup-home-link" 
          className="list-group-item text-danger border border-0">
          Signup  
        </Link> 

        <Link to={`/Kanbas/Account/Profile`} id="wd-profile-home-link" 
          className="list-group-item text-danger border border-0">
          Profile 
        </Link>
    </div>
    );
}
