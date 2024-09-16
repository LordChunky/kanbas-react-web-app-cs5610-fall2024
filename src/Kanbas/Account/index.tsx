import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";

import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
export default function Account() {
  return (
    <div id="wd-account-screen">
        {/* This is a case of misusing the table element. We need to display things horizontally but
        HTML only gear toward displaying things vertically, which is where CSS comes in later on to 
        change this*/}
        <table>
            <tbody>
                {/* tr = table row */}
                <tr>
                    {/* td = table data, a data cell in a table */}
                    <td valign="top">
                        <AccountNavigation />
                    </td>

                    <td valign="top">
                        <Routes>
                            {/* Default page when click into account */}
                            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                            
                            <Route path="/Signin" element={<Signin />} />
                            <Route path="/Profile" element={<Profile />} />
                            <Route path="/Signup" element={<Signup />} />
                        </Routes>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
  );
}
