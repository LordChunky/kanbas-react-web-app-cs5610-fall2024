import { FaPlus } from "react-icons/fa6";

// import ModulesControls from "../Modules/ModuleControls";
// import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuNewspaper } from "react-icons/lu";

import { Link, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
// import AssignmentEditor from ".Courses/Assignments/Editor";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAssignment }
  from "./reducer";
import AssignmentCheckingButtons from "./AssignmentCheckingButtons";
import AssignmentEditor from "./Editor";


export default function Assignments() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // This will create an assignment with an ID, store it in the reducer using the function "addAssignment" so 
  // the website can dynamically rendered the page
  // <Navigate to={`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`} />
  const handleAddingNewAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`);
    // Create an SPA for when clicking on the +Assignment button
    <Routes>
      <Route path="Assignments/:aid" element={<AssignmentEditor/>} />
    </Routes>
  }
  
  return (
    <div id="wd-assignments">
      { currentUser.role != "FACULTY" && (
        <div className="d-flex text-nowrap p-0 mb-5 fs-5">
          <div className="me-auto p-2 bd-highlight">
            <input id="wd-search-assignment" type="search" className="form-control-sm justify-content-start pe-5 pt-2 pb-2" placeholder="Search..."/>
          </div>
        </div>
      )}
      { currentUser.role == "FACULTY" && (
        <div className="d-flex text-nowrap p-0 mb-5 fs-5">
          <div className="me-auto p-2 bd-highlight">
            <input id="wd-search-assignment" type="search" className="form-control-sm justify-content-start pe-5 pt-2 pb-2" placeholder="Search..."/>
          </div>

          <div>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group</button>
          </div>
          
          <div>

            {/* when click on it, call dispatch(addAssignment) to store assignment id into the reducer  */}
            <button onClick={handleAddingNewAssignment} className="btn btn-lg btn-danger me-1 float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
            </button>
            
          </div>
        </div>
      )}
      


      <li className="wd-module list-group-item p-0 mb-5 fs-5">
        
        <div id="wd-assignments-title" className="p-3 ps-2 bg-secondary"> 
          <BsGripVertical className="me-2 fs-3" /> 
          ASSIGNMENTS
          { currentUser.role == "FACULTY" && (
            <span>
              <AssignmentControlButtons />
            </span>
          )}

        </div>
        
        {/* Assignment List */}
        <ul id="wd-assignment-list" className="list-group rounded-0">
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li className="wd-assignment-list-item list-group-item ps-1">
                <div className="d-flex text-nowrap">
                  
                    <div className="float-start d-flex align-items-center">
                      <BsGripVertical className="me-3 fs-3" />
                      <LuNewspaper id="wd-newspaper-icon" className="me-4 fs-3"/>
                    </div>
                    <div className="flex-fill">
                        
                      {/* For edit / add I use the editor for both. And essentially if I find an assignment with the 
                      id in the edit link, I edit as normal and update it on save click. If I don't, I set the form 
                      values to blank / default and add it on save click */}
                      {/* Take a look at this maybe since it's the link to an assignment */}
                      {/* perhaps useParams might be useful  */}
                      <Link 
                        to={`${assignment._id}`} 
                        className="wd-assignment-link link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                        <b>{assignment.title}</b>
                      </Link> <br/>
                      <p className="text-danger d-inline"> Multiple Modules </p> | <b>Not available until</b> {assignment.available_from.slice(5, 10)} at {assignment.available_from.slice(11, 16)} | <br></br>
                      <b>Due</b> {assignment.due_date.slice(5, 10)} at {assignment.due_date.slice(11, 16)} | {assignment.points} pts
                    </div>


                    { currentUser.role == "FACULTY" && (
                      <div className="float-start d-flex align-items-center">
                        <AssignmentCheckingButtons 
                          assignmentId={assignment._id}
                          deleteAssignment={(assignmentId) => {
                            dispatch(deleteAssignment(assignmentId));
                          }}/>
                      </div>
                    )}
                    
                  
                </div>


              </li>
            
      
          ))}
        </ul>

      </li>

    </div>
  );
}
  