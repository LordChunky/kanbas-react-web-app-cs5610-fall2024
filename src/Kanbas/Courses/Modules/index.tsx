import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

import { useParams } from "react-router";
import React, { useState } from "react";
import * as db from "../../Database";

// import reducer functions to add, delete, and update module
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";

// import useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  // const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  // const addModule = () => {
  //   setModules([ ...modules, { _id: new Date().getTime().toString(),
  //                                    name: moduleName, course: cid, lessons: [] } ]);
  //   setModuleName("");
  // };
  // const deleteModule = (moduleId: string) => {
  //   setModules(modules.filter((m) => m._id !== moduleId));
  // };

  // // set the module's editing flag to true so that we can display the input field to edit name
  // // update any field(s) of a module
  // const editModule = (moduleId: string) => {
  //   setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  // };
  // const updateModule = (module: any) => {
  //   setModules(modules.map((m) => (m._id === module._id ? module : m)));
  // };
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-module-container">
      <ModulesControls 
        setModuleName={setModuleName} 
        moduleName={moduleName} 
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} /> <br /><br /><br /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-4 fs-6 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> 

                {/* 
                  - show name if not editing and show input field if editing. 
                  - When typing edit the module's name: if "Enter" key is pressed then set editing
                field to false so we hide the text field */}
                {!module.editing && module.name} 
                { module.editing && (
                  <input className="form-control w-50 d-inline-block"
                        onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            dispatch(updateModule({ ...module, editing: false }));
                          }
                        }}
                        defaultValue={module.name}/>
                )}

                <ModuleControlButtons 
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => 
                    dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
        ))}


        {/* <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
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
        
      </ul> */}

      </ul>

    </div>
  );}
  