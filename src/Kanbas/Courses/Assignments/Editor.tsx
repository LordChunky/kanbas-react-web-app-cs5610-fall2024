export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label> <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. 
          The landing page should include the following: Your full name and section Links to each of the lab assignments 
          Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include 
          a link to navigate back to the landing page
        </textarea>
        <br />
        <table align="center">
            <tr>
                {/* Points */}
                <td align="right" valign="top"> 
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                    <input id="wd-points" value={100} />
                </td>
            </tr>

            {/* Assignment Group */}
            <tr>
                <td align="right" valign="top"> 
                    <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-group">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </select>
                </td>
            </tr>

            {/* Display Grade as */}
            <tr>
                <td align="right" valign="top"> 
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                        <option value="PERCENTAGE">Percentage</option>
                    </select>
                </td>
            </tr>

            {/* Submission Type */}
            <tr>
                <td align="right" valign="top"> 
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type">
                        <option value="ONLINE">Online</option>
                    </select> <br/> <br/>
            
                    {/* Online Entry Options */}
                
                    <label htmlFor="wd-submission-type">Online Entry Options</label> <br />
                    
                    <input type="checkbox" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label><br/>

                    <input type="checkbox" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                    <input type="checkbox" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                    <input type="checkbox" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label>
                </td>
            </tr><br/>

            {/* Assign */}
            <tr>
                <td align="right" valign="top"> 
                    <label htmlFor="wd-assign-to">Assign</label>
                </td>
                <td>
                    {/* Assign to */}
                    <label htmlFor="wd-assign-to">Assign to</label> <br />
                    <td>
                        <input id="wd-assign-to" value={"Everyone"} />
                    </td> <br />

                    {/* Due */}
                    <label htmlFor="wd-due-date">Due</label> <br />
                    <input type="date" id="wd-due-date" value="2024-05-13"/> <br/> 


                    <tr>
                        <td>
                            {/* Available from */}
                            <label htmlFor="wd-available-from">Available from</label> <br />
                            <input type="date" id="wd-available-from" value="2024-05-06"/>
                        </td>

                        <td>
                            {/* Until */}
                            <label htmlFor="wd-available-until">Until</label> <br />
                            <input type="date" id="wd-available-until" value="2024-05-20"/> <br/>
                        </td>
                    </tr>

                    
                </td>
            </tr><br/>
        </table>
        <hr/>
        
        <table align="right">
            <tr>
                <td>
                    <button>Cancel</button>
                    <button>Save</button>
                </td>
            </tr>
        </table>
        
        
        
      </div>
  );
}
  