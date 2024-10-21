export default function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;}) {
    return (
        <li key={todo.id} className="list-group-item">
            <div className="d-flex">
                <div className="me-auto align-self-center p-2"><h4>{todo.title}</h4></div>
                <div className="d-flex flex-row-reverse p-2">
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}
                            id="wd-delete-todo-click"> Delete </button>
                    <button className="btn btn-primary me-2" onClick={() => setTodo(todo)}
                            id="wd-set-todo-click"> Edit </button>
                </div>
            </div>
        </li>
    );
}