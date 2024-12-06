import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import PeopleDetails from "./Details";
import { Link, useParams  } from "react-router-dom";
import * as courseClient from "../client"


export default function PeopleTable({ users = [] }: { users?: any[] }) {
  const { cid } = useParams();
  const [enrolledUsers, setEnrolledUsers] = useState(users)

  const getEnrolledUsers = async () => {
    if(users.length === 0 && cid){
      const enrolledUsersList = await courseClient.findUsersForCourse(cid);
      setEnrolledUsers(enrolledUsersList);
    }
  }
  useEffect(() => {
    getEnrolledUsers();
  }, []);

  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          {enrolledUsers.map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-last-name text-danger">{user.firstName} {user.lastName}</span>
                  </Link>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div> 
    );
}