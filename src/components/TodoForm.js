import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value.charAt(0).toUpperCase() + value.slice(1))
    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input className='todo-input' onChange={(e) => { setValue(e.target.value) }} type="text" placeholder='What`s the task today?' value={value} />
      <button className='todo-btn' type='submit'>Add task</button>
    </form>
  )
}
