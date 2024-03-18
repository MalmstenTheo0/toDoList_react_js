import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed ? "completed" : ""} `}
        onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon className="edit" onClick={() => editTodo(task.id)} 
        icon={faPenToSquare}/>
        <FontAwesomeIcon className="trash" onClick={() => deleteTodo(task.id)} 
        icon={faTrash}/>
      </div>
    </div>
  )
}
