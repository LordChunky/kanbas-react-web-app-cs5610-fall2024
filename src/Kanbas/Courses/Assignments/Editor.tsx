import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import { addAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const { pathname } = useLocation();
    const courses = db.courses.find((course) => course._id === cid);
    const dispatch = useDispatch();

    const pickAssignment = assignments.find((assignment:any)=>(assignment._id === aid));

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // console.log(JSON.stringify(assignments))

    // create assignment
    const createAssignmentForCourse = async (assignment: any) => {
        if (!cid) return;
        console.log(assignment)
        const newAssignment = await coursesClient.createAssignmentForCourse(cid, assignment);
        console.log(newAssignment)
        dispatch(addAssignment(newAssignment));
    };

    
    // update assignment
    const saveAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };


    // All of these variable are State variable, which is essentially a record of object that got saved and might be able to use it later
    // "availableDay" and "availableDayVal" are 2 different variables: "availableDay" is a "Month Day" format and "availableDayVal" 
    // is in datetime-local format. When return, convert the datetime-local format into "Month Day" format. Have a handleChange event
    // that converts the datetime-local string into a string of format to your liking
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [availableDay, setAvailableDay] = useState("");
    const [dueDay, setDueDay] = useState("");
    const [untilDay, setUntilDay] = useState("");
    const [points, setPoints] = useState("");
    // const [points, setPoints] = useState("");


    // default template of the assignment
    let assignment = { 
        title: "New Assignment", 
        course: cid,
        available_from: new Date().toISOString().slice(0, 10),
        due_date: new Date().toISOString().slice(0, 10), 
        points: "100",
        until_date: new Date().toISOString().slice(0, 10),
        description : "New Description",
    }
    
    useEffect(() => {
        // if there exist an assignment, go with it
        if (pickAssignment) {
            setTitle(pickAssignment.title)
            setDescription(pickAssignment.description)
            setAvailableDay(pickAssignment.available_from)
            setDueDay(pickAssignment.due_date)
            setUntilDay(pickAssignment.until_date)
            setPoints(pickAssignment.points)
        } else {
            setTitle(assignment.title)
            setDescription(assignment.description)
            setAvailableDay(assignment.available_from)
            setDueDay(assignment.due_date)
            setUntilDay(assignment.until_date)
            setPoints(assignment.points)
        }
    }, [pickAssignment]);

    // Which ever you select will be the "template"
    // console.log(cid)
    // console.log(aid)
    console.log(assignment)
    // console.log(pickAssignment)
    return (
        <div id="wd-assignments-editor">
            {/*Assignment Name */}
            <label htmlFor="wd-name">Assignment Name</label>
            <div className="input-group mb-3">
                <input 
                    id="wd-name" 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control" />
            </div>


            {/* Description area */}
            <div className="input-group mb-3">
                <input 
                    id="wd-description" 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control" />
            </div>

            {/* Form group for the rest */}
            <form>
                <div className="mt-3 float-end w-100">
                    
                    {/* Points */}
                    <div className="form-group row">
                        <div className="input-group mb-3">
                            <label htmlFor="wd-points" className="text-end col-sm-3 col-form-label me-3">Points</label>
                            <input 
                                id="wd-points" 
                                className="form-control" 
                                value={points} 
                                onChange={(e) => setPoints(e.target.value)} />
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
                                <input 
                                    type="datetime-local" 
                                    id="wd-due-date" 
                                    className="form-control" 
                                    value={dueDay} 
                                    onChange={(e) => setDueDay(e.target.value)}/>
                                    

                                {/* Available from and Until*/}
                                <div className="d-flex">
                                    <div className="p-1 ms-3 me-3 mb-2 w-50">
                                        <label htmlFor="wd-available-from"><b>Available from</b></label>
                                        <input 
                                            type="datetime-local" 
                                            id="wd-available-from" 
                                            className="form-control" 
                                            value={availableDay} 
                                            onChange={(e) => setAvailableDay(e.target.value)}/>
                                            
                                    </div>

                                    <div className="p-1 me-3 w-50">
                                        <label htmlFor="wd-available-until"><b>Until</b></label>
                                        <input 
                                            type="datetime-local" 
                                            id="wd-available-until" 
                                            className="form-control" 
                                            value={untilDay} 
                                            onChange={(e) => setUntilDay(e.target.value)}/>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                    <hr />

                    <div className="mb-3">

                        {/* if it's the faculty, you can edit the assignment and create*/}
                        {currentUser && currentUser.role === "FACULTY" && (
                            <Link id="wd-assignment-editor-save" to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-danger me-1 float-end"
                                // Update everything that the user changed
                                onClick={() => 
                                    {
                                        if(pickAssignment){
                                            saveAssignment({
                                                _id: pickAssignment._id,
                                                title: title,
                                                course: cid,
                                                available_from: availableDay, 
                                                due_date: dueDay,
                                                points: points,
                                                until_date: untilDay,
                                                description: description
                                            })
                                        }else{
                                            const newAssignment: any = {
                                                _id: aid,
                                                title: title,
                                                course: cid,
                                                available_from: availableDay, 
                                                due_date: dueDay,
                                                points: points,
                                                until_date: untilDay,
                                                description: description
                                            }
                                            createAssignmentForCourse(newAssignment)
                                        }
                                    }
                                }>
                                Save
                            </Link>
                        )}

                        {currentUser && currentUser.role !== "FACULTY" && (
                            <Link  id="wd-assignment-editor-save" to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-danger me-1 float-end">
                            Save
                            </Link>
                        )}
                        

                        <Link  id="wd-assignment-editor-cancel" to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-secondary me-1 float-end">
                            Cancel
                        </Link>
                    </div>
                    
                </div> 
            </form>

        </div>
    );

}
  