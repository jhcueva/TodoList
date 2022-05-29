import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoTask.css'

function TodoTask() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const { addTodo } = React.useContext( TodoContext )

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    
    const onClickInput = () => {
        document.getElementsByClassName('writeIcon')[0].style.fontSize = 0
        document.getElementsByClassName('newtaskContainer')[0].classList.add('newtaskContainer--active')
        document.getElementsByClassName('taskInputContainer')[0].classList.add('taskInputContainer--active')
        document.getElementsByClassName('todoInput')[0].classList.add('todoInput--active')
        document.getElementsByClassName('btnContainer')[0].style.display = 'flex'
    }

    const onSubmit = (event) => {
        console.log('submit')
        event.preventDefault();
        addTodo(newTodoValue)
        document.getElementsByClassName('todoInput')[0].value = ''

    }
    
    const onCloseTodo = () => {
        document.getElementsByClassName('todoInput')[0].value = ''
    }
    return (
        <>
            <h2>Create a new task</h2>
            <section 
                className='newtaskContainer'
                onClick={onClickInput}
                >
                <section className='taskInputContainer'>
                    <form 
                        className='formContainer'
                        onSubmit={onSubmit}>
                        <textarea
                            className='todoInput'
                            value={newTodoValue}
                            onChange={onChange}
                            placeholder="Launch rocket to the moon"
                        />
                        <section className='btnContainer'>
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
                    ></i>
                </section>
            </section>
        </>
    )
}

export { TodoTask };