import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

// import reducer functions to add, delete, and update module
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";

// import useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // Fetch all modules
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  // create module
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  // remove module
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  // update module
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };


  return (
    <div id="wd-module-container">
      <ModulesControls 
        setModuleName={setModuleName} 
        moduleName={moduleName} 
        addModule={createModuleForCourse} /> <br /><br /><br /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        
        {modules.map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-4 fs-6 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> 
                { currentUser.role != "FACULTY" && (
                  <span>
                    { module.name }
                  </span>
                )}

                { currentUser.role == "FACULTY" && (
                  <span>
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
                                saveModule({ ...module, editing: false });
                              }
                            }}
                            defaultValue={module.name}/>
                    )}
                    <ModuleControlButtons 
                      moduleId={module._id}
                      deleteModule={(moduleId) => removeModule(moduleId)}
                      editModule={(moduleId) => 
                        dispatch(editModule(moduleId))}
                    />
                  </span>
                )}
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} 
                        { currentUser.role == "FACULTY" && (
                          <LessonControlButtons />
                        )}  
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
  