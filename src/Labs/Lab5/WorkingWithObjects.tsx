import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    // create a state variable that holds default values for the form below.
    // eventually we'll fetch this initial data from the server and populate
    // the form with the remote data so we can modify it here in the UI
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

    const [module, setModule] = useState({
        id: 1, 
        name: "NodeJS Module",
        description: "Module Object",
        course: "Web Development Fall 2024",
    });

    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

return (
    <div id="wd-working-with-objects">
        <h2>Working With Objects</h2> <br />

        <h3> <u>Assignment Object</u> </h3>
        <h4>Retrieving Objects</h4>
        <a id="wd-retrieve-assignments" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment`}>
            Get Assignment
        </a><hr/>

        <h4>Retrieving Properties</h4>
        <a id="wd-retrieve-assignment-title" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment/title`}>
            Get Title
        </a><hr/>
        
        <h4>Modifying Properties</h4>
        {/* encode the title in the URL that updates the title */}
        <a id="wd-update-assignment-title"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
            Update Title
        </a>
        {/* form element to edit local state variable used to encode in URL 
        that updates property in remote object */}
        <input className="form-control w-75" id="wd-assignment-title"
            defaultValue={assignment.title} onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })}/>
        <br /> 
        




        {/* update assignment score */}
        <a id="wd-update-assignment-score"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
            Update Score
        </a>
        <input className="form-control w-75" id="wd-assignment-score"
            defaultValue={assignment.score} onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })}/> <br/>
        

        {/* update assignment completion status */}
        <a id="wd-update-assignment-completion-status"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
            Update Completion Status
        </a>
        <input 
            className="form-check-input" type="checkbox" value="true" id="wd-assignment-completion-status1"
            onChange={(e) => setAssignment({ ...assignment, completed: (e.target.value === "true") })}
        /> 
        <label className="form-check-label ms-1" htmlFor="wd-assignment-completion-status1">
            True
        </label>

        <input 
            className="form-check-input ms-2" type="checkbox" value="false" id="wd-assignment-completion-status2"
            onChange={(e) => setAssignment({ ...assignment, completed: (e.target.value === "true") })}
        /> 
        <label className="form-check-label ms-1" htmlFor="wd-assignment-completion-status2">
            False
        </label> <br/> <br/>


        


        <h3> <u>Module Object</u> </h3>
        <h4>Retrieving Objects</h4>
        <a id="wd-retrieve-module" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module`}>
            Get Module
        </a><hr/>

        <h4>Retrieving Properties</h4>
        <a id="wd-retrieve-module-name" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module/name`}>
            Get Module Name
        </a><hr/>

        <h4>Modifying Properties</h4>
        <a id="wd-update-module-name"
            className="btn btn-primary float-end"
            href={`${MODULE_API_URL}/name/${module.name}`}>
            Update Name
        </a>
        <input className="form-control w-75" id="wd-module-name"
            defaultValue={module.name} onChange={(e) =>
            setModule({ ...module, name: e.target.value })}/>
        <br/>

        {/* update module description */}
        <a id="wd-update-module-description"
            className="btn btn-primary float-end"
            href={`${MODULE_API_URL}/description/${module.description}`}>
            Update Description
        </a>
        <textarea className="form-control w-75" id="wd-module-description"
            defaultValue={module.description} onChange={(e) =>
            setModule({ ...module, description: e.target.value })}/> <hr /> <br/>


    </div>
    
);}
