import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

// import ModulesControls from "../Modules/ModuleControls";
// import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuNewspaper } from "react-icons/lu";

import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <div className="d-flex text-nowrap p-0 mb-5 fs-5">

        <div className="me-auto p-2 bd-highlight">
          <input id="wd-search-assignment" type="search" className="form-control-sm justify-content-start pe-5 pt-2 pb-2" placeholder="Search..."/>
        </div>

        <div>
          <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment</button>
        </div>

        <div>
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group</button>
        </div>
        
      </div>


      <li className="wd-module list-group-item p-0 mb-5 fs-5">
        
        <div id="wd-assignments-title" className="p-3 ps-2 bg-secondary"> 
          <BsGripVertical className="me-2 fs-3" /> 
          ASSIGNMENTS
          <AssignmentControlButtons />
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
                        

                      <Link to={`${assignment._id}`} 
                      className="wd-assignment-link link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                        <b>{assignment.title}</b>
                      </Link> <br/>
                      <p className="text-danger d-inline">Multiple Modules </p>| <b>Not available until</b> {`${assignment.not_available_until_day}`} at {`${assignment.not_available_until_time}`} | <br></br>
                      <b>Due</b> {`${assignment.due_day}`} at {`${assignment.due_time}`} | {`${assignment.points}`} pts

                        
                    </div>


                    <div className="float-start d-flex align-items-center">
                      <LessonControlButtons />
                    </div>
                  
                </div>



              </li>
  
              
      
          ))}
        </ul>


        {/* 
        <ul id="wd-assignment-list" className="list-group rounded-0">
          
          <li className="wd-assignment-list-item list-group-item ps-1">
            
            <div className="d-flex text-nowrap">
              <div className="float-start d-flex align-items-center">
                <BsGripVertical className="me-3 fs-3" />
                <LuNewspaper id="wd-newspaper-icon" className="me-4 fs-3"/>
              </div>
              
              <div className="flex-fill">
                <a className="wd-assignment-link link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  <b>A1</b>
                </a> <br/>
                <p className="text-danger d-inline">Multiple Modules </p>| <b>Not available until</b> May 6 at 12:00am | <br></br>
                <b>Due</b> May 13 at 11:59pm | 100 pts
              </div>

              <div className="float-start d-flex align-items-center">
                <LessonControlButtons />
              </div>

            </div>
          </li>


          <li className="wd-assignment-list-item list-group-item ps-1">
            <div className="d-flex text-nowrap">
              <div className="float-start d-flex align-items-center">
                <BsGripVertical className="me-3 fs-3" />
                <LuNewspaper id="wd-newspaper-icon" className="me-4 fs-3"/>
              </div>
              
              <div className="flex-fill">
                <a className="wd-assignment-link link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  <b>A2</b>
                </a> <br/>
                <p className="text-danger d-inline">Multiple Modules </p> | <b>Not available until</b> May 13 at 12:00am | <br></br>
                <b>Due</b> May 20 at 11:59pm | 100 pts
              </div>

              <div className="float-start d-flex align-items-center">
                <LessonControlButtons />
              </div>

            </div>
          </li>


          <li className="wd-assignment-list-item list-group-item ps-1">
            <div className="d-flex text-nowrap">
              <div className="float-start d-flex align-items-center">
                <BsGripVertical className="me-3 fs-3" />
                <LuNewspaper id="wd-newspaper-icon" className="me-4 fs-3"/>
              </div>
              
              <div className="flex-fill">
                <a className="wd-assignment-link link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  <b>A3</b>
                </a> <br/>
                <p className="text-danger d-inline">Multiple Modules </p> | <b>Not available until</b> May 20 at 12:00am | <br></br>
                <b>Due</b> May 27 at 11:59pm | 100 pts
              </div>

              <div className="float-start d-flex align-items-center">
                <LessonControlButtons />
              </div>

            </div>
          </li>



        </ul> */}
      </li>

    </div>
  );
}
  