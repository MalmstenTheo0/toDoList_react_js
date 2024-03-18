import React, { useState } from 'react'

export const EditTodoForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault()
    editTask(value.charAt(0).toUpperCase() + value.slice(1), task.id)
    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input className='todo-input' onChange={(e) => { setValue(e.target.value) }} type="text" placeholder='Update task' value={value} />
      <button className='todo-btn' type='submit'>Update</button>
    </form>
  )
}
