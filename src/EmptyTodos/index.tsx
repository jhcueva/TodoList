import React from 'react'
import Logo from './done.png'
import './EmptyTodos.css'


export const EmptyTodos = () => {
  return (
    <div className='emptyTodosContainer'>
      <h3 className='emptyTodos__title'>Welcome! <br/> Create your first task</h3>
      <img src={Logo} alt='logo' className='doneImg'/>
    </div>
  )
}
