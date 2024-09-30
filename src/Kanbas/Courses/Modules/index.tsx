import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";


export default function Modules() {
    return (
      <div>
        <ModulesControls /><br /><br /><br /><br />

        <ul id="wd-modules" className="list-group rounded-0">
          
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" /> 
              Week 1 
              <ModuleControlButtons />
            </div>
            
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> 
                LEARNING OBJECTIVES 
                <LessonControlButtons />
              </li>
                
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course 
                <LessonControlButtons />
              </li>
              
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development 
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1"> 
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1 
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1"> 
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2 
                <LessonControlButtons />
              </li>

            </ul>
          </li>

          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" /> 
              Week 2 
              <ModuleControlButtons />
            </div>

            <ul className="wd-lessons list-group rounded-0">
              
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> 
                LEARNING OBJECTIVES 
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Learn how to create user interfaces with HTML
                <LessonControlButtons />
              </li>
              
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Keep working on assignment 1
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Deploy the assignment to Netlify
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1"> 
                <BsGripVertical className="me-2 fs-3" /> 
                LESSON 1 
                <LessonControlButtons />
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1"> 
                <BsGripVertical className="me-2 fs-3" /> 
                LESSON 2 
                <LessonControlButtons />
              </li>
            </ul>

          </li>
          
        </ul>



















        {/* Implement Collapse All button, View Progress button, etc.
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option value="PUBLISH ALL">Publish All</option>
        </select>
        <button>+ Module</button>

        <ul id="wd-modules">

          {/* Week 1 
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda, Internet, Web, HTML, Assignment 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">

                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                  <li className="wd-content-item">Creating a development environment</li>
                  <li className="wd-content-item">Creating a Web Application</li>
                  <li className="wd-content-item">Getting started with the 1st assignment</li>
                </ul>

                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                </ul>

                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                  <li className="wd-content-item">Commit your source to GitHub.com</li>
                  <li className="wd-content-item">Deploying to Netlify</li>
                  <li className="wd-content-item">Deploying multiple branches in Netlify</li>
                  <li className="wd-content-item">Kanbas Web App on Netlify</li>
                </ul>

              </li>
            </ul>
          </li>

          {/* Week 2 
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Keep working on assignment 1</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>

                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                </ul>

                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Embedding content with Iframes</li>
                  <li className="wd-content-item">Drawing with Scalable Vector Graphics</li>
                </ul>

              </li>
            </ul>
          </li>

        </ul> */}

      </div>
  );}
  