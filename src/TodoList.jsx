import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return <>
        <ul>
            {todos.length === 0 && "NO Todos"}
            {todos.map(todos => {
                return <TodoItem id={todos.id} completed={todos.completed} title={todos.title} key={todos.id}
                    toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            })}


        </ul>
    </>

}