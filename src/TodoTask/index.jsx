import React, { useRef } from 'react';
import './TodoTask.css'


function TodoTask({ addTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const taskInputContainer = useRef()
  const newTaskContainer = useRef()
  const btnContainer = useRef()
  const todoInput = useRef()
  const writeIcon = useRef()

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onClickInput = () => {
    writeIcon.current.style.fontSize = 0
    todoInput.current.value = ''
    newTaskContainer.current.classList.add('newtaskContainer--active')
    taskInputContainer.current.classList.add('taskInputContainer--active')
    todoInput.current.classList.add('todoInput--active')
    btnContainer.current.style.display = 'flex'
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    onCloseTodo()
  }

  const onCloseTodo = () => {
    writeIcon.current.style.fontSize = ('1.4rem')
    newTaskContainer.current.className = ('newtaskContainer')
    taskInputContainer.current.className = ('taskInputContainer') 
    todoInput.current.className = ('todoInput')
    btnContainer.current.style.display = 'none'
    todoInput.current.value = ''
  }

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      // event.preventDefault()
      // addTodo(newTodoValue)
      // onCloseTodo()
      onSubmit(event)
    }
  }

  return (
    <>
      <h2 className='todoTask__title'>Create a new task</h2>
      <section className='newtaskContainer' ref={newTaskContainer}>
        <section className='taskInputContainer'
          id='taskInputContainer'
          ref={taskInputContainer}
          >
          <form
            className='formContainer'
            onSubmit={onSubmit}>
            <textarea
              className='todoInput'
              // value={newTodoValue}
              onChange={onChange}
              onClick={onClickInput}
              placeholder=" Launch rocket to the moon"
              ref={todoInput}
              onKeyDown={handleKey}
            />
            <section className='btnContainer' ref={btnContainer}>
              <button
                id='cancelBtn'
                className='cancelBtn'
                type="button"
                onClick={onCloseTodo}
              >Cancel</button>
              <button
                type="submit"
                disabled={newTodoValue.length < 4 ? true : false}
              >Done</button>
            </section>
          </form>
          <i
            className="writeIcon fa-solid fa-pen"
            onClick={onClickInput}
            ref={writeIcon}
          ></i>
        </section>
      </section>
    </>
  )
}

export { TodoTask };