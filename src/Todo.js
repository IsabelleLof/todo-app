export default function Todo (props) {
    return (
        <div>
            <h1>{props.todo.id}</h1>
            <p>{props.todo.title}</p>
            <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
            <button onClick={() => props.handleEditInputChange(props.todo.text)}>Edit</button>
        </div>
    )
}