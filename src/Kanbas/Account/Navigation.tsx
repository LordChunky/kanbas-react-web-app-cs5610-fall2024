import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
        <h2>Account</h2>
        <Link to={`/Kanbas/Account/Signin`}  > Signin  </Link> <br/>
        <Link to={`/Kanbas/Account/Signup`}  > Signup  </Link> <br/>
        <Link to={`/Kanbas/Account/Profile`} > Profile </Link> <br/>
    </div>
    );
}
