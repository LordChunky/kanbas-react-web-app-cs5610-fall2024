import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <div className="d-flex">

                <input className="me-auto align-self-center border border-black rounded p-2" 
                    value={todo.title}
                    onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />


                <div className="d-flex flex-row-reverse p-2">
                    <button className="btn btn-success" onClick={() => dispatch(addTodo(todo))}
                            id="wd-add-todo-click">
                        Add
                    </button>
                    <button className="btn btn-warning me-2" onClick={() => dispatch(updateTodo(todo))}
                            id="wd-update-todo-click">
                        Update 
                    </button>
                </div>

            </div>            





            {/* <button onClick={() => addTodo(todo)}
                    id="wd-add-todo-click"> Add </button>
            <button onClick={() => updateTodo(todo)}
                    id="wd-update-todo-click"> Update </button>
            <input defaultValue={todo.title}
            onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }/> */}
        </li>
    );
}
  