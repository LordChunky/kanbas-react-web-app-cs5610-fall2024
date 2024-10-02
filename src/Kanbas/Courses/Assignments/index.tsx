import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        {/* WiP */}
        <form className="d-inline-flex flex-row position-relative">
          <button className="btn btn-outline-success border-0 position-absolute start-0" type="submit">
            <HiMagnifyingGlass className="position-absolutes me-2"/>
          </button>
          <input id="wd-search-assignment" type="search" className="form-control" placeholder="     Search..."/>
        </form>
        
        {/* <input id="wd-search-assignment" placeholder="Search..." className="form-control"/> */}
        

        {/* <div className="inner-addon left-addon">
          <HiMagnifyingGlass className="position-relative me-2"/> 
          <input id="wd-search-assignment" placeholder="Search..." className="form-control"/>
        </div> */}
      

        



        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>

        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>



        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">

          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <br></br>
            Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br></br>
            <b>Due</b> May 13 at 11:59pm | 100 pts
          </li>

          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a>
            <br></br>
            Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br></br>
            <b>Due</b> May 20 at 11:59pm | 100 pts
          </li>

          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
            </a>
            <br></br>
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br></br>
            <b>Due</b> May 27 at 11:59pm | 100 pts
          </li>

        </ul>
      </div>
  );
}
  