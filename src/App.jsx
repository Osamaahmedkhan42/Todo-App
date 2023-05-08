import { useState } from "react"
import "./style.css"
export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [...currentTodos, {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false
      },]
    })
    // setTodos([...todos])

    setNewItem("")
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {

      return currentTodos.map(todo => {

        if (todo.id === id) {

          return { ...todo, completed }

        }
        return todo
      })
    })
  }

  return <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />

      </div>
      <button className="btn">Add</button>

    </form>
    <h1 className="header">Todo List</h1>
    <ul>
      {todos.map(todos => {
        return <li key={todos.id}>
          <label >
            <input type="checkbox" checked={todos.completed} onChange={e => toggleTodo(todos.id, e.target.checked)} />
            {todos.title}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      })}


    </ul>
  </>
}