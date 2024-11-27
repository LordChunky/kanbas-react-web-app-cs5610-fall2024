import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router'
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();
  return (
    // <div>
    //   { links.length == 2 && (
    //     <div id="wd-account-navigation" className="list-group fs-5 me-4 rounded-0 d-none d-md-block">
    //       <Link to={`/Kanbas/Account/Signin`}  id="wd-signin-home-link" 
    //       className="list-group-item text-danger border border-0">
    //       Signin  
    //       </Link> 

    //       <Link to={`/Kanbas/Account/Signup`}  id="wd-signup-home-link" 
    //       className="list-group-item text-danger border border-0">
    //       Signup  
    //       </Link> 
    //     </div>
    //   )}
      
    //   { links.length == 1 && (
    //     <div id="wd-account-navigation" className="list-group fs-5 me-4 rounded-0 d-none d-md-block">
    //       <Link to={`/Kanbas/Account/Profile`} id="wd-profile-home-link" 
    //       className="list-group-item text-danger border border-0">
    //       Profile 
    //       </Link>
    //     </div>
    //   )}
    // </div>
    <div id="wd-account-navigation" className="list-group fs-5 me-4 rounded-0 d-none d-md-block">
      {links.map((link) => (
        <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item text-danger border border-0 ${active(link)}`}> {link} </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kanbas/Account/Users`} className={`list-group-item text-danger border border-0 ${active("Users")}`}> Users </Link> )}
    </div>
  );
}
