import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import Courses from "./Courses";

export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <h1>Kanbas</h1>
        <table>
          <tbody>
            <tr>

              <td valign="top">
                <KanbasNavigation />
              </td>

              <td valign="top">
                <Routes>
                  <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
                  <Route path="/Account/*" element={<Account />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Courses/:cid/*" element={<Courses />} />
                  <Route path="/Calendar" element={<h1>Calendar</h1>} />
                  <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
              </td>
              
            </tr>
          </tbody>
        </table>

      </div>
  );
}
  