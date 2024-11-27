// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button className="btn1" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
