import { Link, useParams, useLocation } from "react-router-dom";
import * as db from "../../Database";


export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;
    const course = db.courses.find((course) => course._id === cid);
    return (
        <div>
            {assignments
                // assignment.course === cid: Filter the course by course id (cid comes from Kanbas/index.tsx)
                // assignment._id === aid: Filter the assignemnt by assignment id (aid comes from Kanbas/Courses/index.tsx)
                .filter((assignment: any) => assignment.course === cid && assignment._id === aid)
                .map((assignment) => (
                    <div id="wd-assignments-editor">
                        
                        {/*Assignment Name */}
                        <label htmlFor="wd-name">Assignment Name</label>
                        <div className="input-group mb-3">
                            <input id="wd-name" type="text" value={`${assignment.title}`} className="form-control" />
                        </div>


                        {/* Description area */}
                        <div id="wd-description" className="d-line-flex border border-gray border-1 rounded ps-2 pe-2 pt-4 pb-1">
                            The assignment is <p className="text-danger d-inline"> available online </p>
                                
                            <p className="pt-3">
                                Submit a link to the landing page of your Web application running on Netlify.
                            </p> 
                            
                            
                            The landing page should include the following:
                            <ul className="pt-3">
                                <li>Your full name and section </li>
                                <li>Links to each of the lab assignments </li>
                                <li>Link to the Kanbas application </li>
                                <li>Links to all relevant source code repositories </li>
                            </ul>
                            
                            The Kanbas application should include a link to navigate back to the landing page
                        </div>

                        {/* Form group for the rest */}
                        <form>
                            <div className="mt-3 float-end w-100">
                                
                                {/* Points */}
                                <div className="form-group row">
                                    <div className="input-group mb-3">
                                        <label htmlFor="wd-points" className="text-end col-sm-3 col-form-label me-3">Points</label>
                                        <input id="wd-points" className="form-control" value={`${assignment.points}`} />
                                    </div>
                                </div>

                                {/* Assignment Group */}
                                <div className="form-group row">
                                    <div className="input-group mb-3">
                                        <label htmlFor="wd-group" className="text-end col-sm-3 col-form-label me-3">Assignment Group</label>
                                        <div className="form-group flex-fill">
                                            <select className="form-select" id="wd-group">
                                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Display Grade as */}
                                <div className="form-group row">
                                    <div className="input-group mb-3">
                                        <label htmlFor="wd-display-grade-as" className="text-end col-sm-3 col-form-label me-3">Display Grade as</label>
                                        <div className="form-group flex-fill">
                                            <select className="form-select" id="wd-display-grade-as">
                                                <option value="PERCENTAGE">Percentage</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* div with className with d-inline */}
                                {/* Submission type */}
                                <div className="form-group row">
                                    <div className="input-group mb-3">
                                        <label htmlFor="wd-submission-type" className="text-end col-sm-3 col-form-label me-3">Submission Type</label>
                                        <div id="wd-submission-type-box" className="d-line flex-fill border border-gray border-1 rounded">
                                            
                                            <div id="wd-submission-type" className="input-group mb-3">
                                                <div className="form-group flex-fill mt-3 me-3 ms-3">
                                                    <select className="form-select" id="wd-submission-type">
                                                        <option value="PERCENTAGE">Online</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <label htmlFor="wd-submission-type" className="ms-3 me-3 mb-2"><b>Online Entry Option</b></label>
                                            <div className="ms-3 me-3 mb-3">
                                                {/* Text Entry */}
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="wd-text-entry"/>
                                                    <label className="form-check-label" htmlFor="wd-text-entry"> Text Entry </label>
                                                </div>

                                                {/* Website URL */}
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="wd-website-url"/>
                                                    <label className="form-check-label" htmlFor="wd-text-entry"> Website URL </label>
                                                </div>
                                                {/* Media Recordings */}
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="wd-meadia-recordings"/>
                                                    <label className="form-check-label" htmlFor="wd-text-entry"> Media Recordings </label>
                                                </div>
                                                {/* Student Annotation */}
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="wd-student-annotation"/>
                                                    <label className="form-check-label" htmlFor="wd-text-entry"> Student Annotation </label>
                                                </div>


                                                {/* File Uploads */}
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="wd-file-upload"/>
                                                    <label className="form-check-label" htmlFor="wd-text-entry"> File Uploads </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Assign */}
                                <div className="form-group row">
                                    <div className="input-group mb-3">
                                        <label htmlFor="wd-assign-to" className="text-end col-sm-3 col-form-label me-3">Assign</label>
                                        
                                        <div id="wd-assign-to-box" className="d-line flex-fill border border-gray border-1 rounded">
                                        
                                            {/* Assign to */}
                                            <label htmlFor="wd-assign-to" className="ms-3 me-3 mb-2"><b>Assign to</b></label>
                                            <div id="wd-assign-to" className="border border-gray border-1 rounded ms-3 me-3 mb-2 pt-1 pb-1 ps-1 pe-1">
                                                <div id="option-box" className="border-0 rounded bg-secondary">
                                                    Everyone <p className="d-inline ms-3">X</p>
                                                </div>
                                            </div>


                                            {/* Due */}
                                            <label htmlFor="wd-due-date" className="ms-3 me-3 mb-2"><b>Due</b></label>
                                            <input type="datetime-local" id="wd-due-date" className="form-control" value={`${assignment.due_date_val}`}/>

                                            {/* Available from and Until*/}
                                            <div className="d-flex">
                                                <div className="p-1 ms-3 me-3 mb-2 w-50">
                                                    <label htmlFor="wd-available-from"><b>Available from</b></label>
                                                    <input type="datetime-local" id="wd-available-from" className="form-control" value={`${assignment.not_available_until_date_val}`}/>
                                                </div>

                                                <div className="p-1 me-3 w-50">
                                                    <label htmlFor="wd-available-until"><b>Until</b></label>
                                                    <input type="datetime-local" id="wd-available-until" className="form-control" value=""/>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>

                                <hr />

                                <div className="mb-3">
                                    <Link  id="wd-assignment-editor-save" to={`/Kanbas/Courses/${course && course._id}/Assignments`} className="btn btn-lg btn-danger me-1 float-end">
                                        Save
                                    </Link>
                                    <Link  id="wd-assignment-editor-cancel" to={`/Kanbas/Courses/${course && course._id}/Assignments`} className="btn btn-lg btn-secondary me-1 float-end">
                                        Cancel
                                    </Link>
                                </div>
                                
                            </div> 
                        </form>

                    </div>
                ))}
        </div>
      
    );
}
  