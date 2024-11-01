import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import { addAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";


export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const { pathname } = useLocation();
    const courses = db.courses.find((course) => course._id === cid);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location = useLocation();


    // const EditAssignmentPage = () => {
    //     const [assignment, setAssignment] = useState(location.state?.assignment || {});
    //     const handleSaveAssignment = () => {
    //         dispatch(addAssignment(assignment));
    //     };
    // }

    // const assignment_template = assignments.find((a:any) => a._id === aid) || {
        // _id: aid, 
        // title: "New Assignment", 
        // description : "New Description",
        // course: cid,
        // not_available_until_day: "May 13", 
        // not_available_until_date_val: "2024-05-13T00:00",
        // not_available_until_time: "12:00am",
        // due_day: "May 20",
        // due_date_val: "2024-05-20T23:59",
        // due_time: "11:59pm",  
        // points: 100
    // };

    // default template of the assignment
    let assignment = {
        _id: aid, 
        title: "New Assignment", 
        description : "New Description",
        course: cid,
        not_available_until_day: "May 13", 
        not_available_until_date_val: "2024-05-13T00:00",
        not_available_until_time: "12:00am",
        due_day: "May 20",
        due_date_val: "2024-05-20T23:59",
        due_time: "11:59pm",  
        points: "100"
    }
    
    // Which ever you select will be the "template"
    const pickAssignment = assignments.filter((assignment:any)=>(assignment._id === aid))[0];
    if(pickAssignment) {
        assignment = pickAssignment
    }

    // All of these variable are State variable, which is essentially a record of object that got saved and might be able to use it later
    const [title, setTitle] = useState(assignment.title);
    const [description, setDescription] = useState(assignment.description);
    const [availableDay, setAvailableDay] = useState(assignment.not_available_until_date_val);
    const [availableTime, setAvailableTime] = useState(assignment.not_available_until_time);
    const [dueDay, setDueDay] = useState(assignment.due_date_val);
    const [dueTime, setDueTime] = useState(assignment.due_time);
    const [points, setPoints] = useState(assignment.points);
    
    // const [editedAssignment, setEditedAssignment] = useState(assignment);
    // const handleAddingAssignment = () => {
    //     dispatch(addAssignment(assignment_template));
    //     navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`);
    // }

    // const handleEditingAssignment = () => {
    //     dispatch(addAssignment(assignment_template));
    //     navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`);
    // }

    return (
        <div>
            {/* if aid = new Date().getTime().toString() */}
            {assignments
                // assignment.course === cid: Filter the course by course id (cid comes from Kanbas/index.tsx)
                // assignment._id === aid: Filter the assignemnt by assignment id (aid comes from Kanbas/Courses/index.tsx)
                .filter((assignment: any) => assignment.course === cid && assignment._id === aid)
                .map((assignment: any) => (
                    <div id="wd-assignments-editor">
                        
                        {/* {!assignment.editing && ()} */}
                        {/* { assignment.editing && ()} */}

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
                                {/* { assignment.editing &&(...)} */}
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
                                                        value={dueDay} 
                                                        onChange={(e) => setDueDay(e.target.value)}/>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>

                                <hr />

                                <div className="mb-3">
                                    {/* Maybe it's similar design to the module editor? */}
                                    {/* onClick={() => dispatch(addAssignment)} */}

                                    {/* Idea: 
                                        - when you click on +Assignment button to create an assignment the aid will not exist
                                        - When you click on assignment that's already exist in the DB, tha aid will show up */}

                                    {/* This will show up when user click on the "+assignment" button the "Assignments" screen */}
                                    {!assignment.editing && (
                                        <Link onClick={() => 
                                            dispatch(addAssignment(
                                                {
                                                    title,
                                                    description,
                                                    course:cid,
                                                    availableDay, 
                                                    availableTime, 
                                                    dueDay,
                                                    dueTime,
                                                    points
                                                }
                                            ))
                                        } id="wd-assignment-editor-save" to={`/Kanbas/Courses/${courses && courses._id}/Assignments`} className="btn btn-lg btn-danger me-1 float-end">
                                            Save and Create
                                        </Link>
                                    )}
                                
                                    
                                    {/* This will show up when user click on the assignment title that is already existed in the "Assignments" screen */}
                                    {assignment.editing && (
                                        <Link id="wd-assignment-editor-save" to={`/Kanbas/Courses/${courses && courses._id}/Assignments`} className="btn btn-lg btn-danger me-1 float-end"
                                            // Update everything that the user changed
                                            onClick={() => 
                                                dispatch(updateAssignment({
                                                    _id:pickAssignment._id,
                                                    title,
                                                    description,
                                                    course:cid,
                                                    availableDay, 
                                                    availableTime, 
                                                    dueDay,
                                                    dueTime,
                                                    points
                                                }))
                                            }>
                                                Save the edit
                                        </Link>
                                    )} 


                                    <Link  id="wd-assignment-editor-cancel" to={`/Kanbas/Courses/${courses && courses._id}/Assignments`} className="btn btn-lg btn-secondary me-1 float-end">
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
  