export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string; title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;}) {
    return (
        <li className="list-group-item">

            <div className="d-flex">
                <input className="me-auto align-self-center border border-black rounded p-2" defaultValue={todo.title}
                    onChange={(e) =>
                    setTodo({ ...todo,
                        title: e.target.value })
                    }
                />
                <div className="d-flex flex-row-reverse p-2">
                    <button className="btn btn-success" onClick={() => addTodo(todo)}
                            id="wd-add-todo-click">
                        Add
                    </button>
                    <button className="btn btn-warning me-2" onClick={() => updateTodo(todo)}
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
  