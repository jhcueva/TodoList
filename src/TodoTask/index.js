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
        console.log('onclick started')
        document.getElementsByClassName('todoInput')[0].value = ''
        document.getElementsByClassName('writeIcon')[0].style.fontSize = 0
        document.getElementsByClassName('newtaskContainer')[0].classList.add('newtaskContainer--active')
        document.getElementById('taskInputContainer').classList.add('taskInputContainer--active')
        document.getElementsByClassName('todoInput')[0].classList.add('todoInput--active')
        document.getElementsByClassName('btnContainer')[0].style.display = 'flex'
        console.log('done onclick')
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        onCloseTodo()
    }
    
    const onCloseTodo = () => {
        document.getElementsByClassName('writeIcon')[0].style.fontSize = ('1.4rem')
        document.getElementsByClassName('newtaskContainer')[0].className = ('newtaskContainer')
        document.getElementsByClassName('taskInputContainer--active')[0].className = ('taskInputContainer')
        document.getElementsByClassName('todoInput')[0].className = ('todoInput')
        document.getElementsByClassName('btnContainer')[0].style.display = 'none'
        document.getElementsByClassName('todoInput')[0].value = ''
    }
    return (
        <>
            <h2>Create a new task</h2>
            <section className='newtaskContainer'>
                <section className='taskInputContainer'
                    id='taskInputContainer'>
                    <form 
                        className='formContainer'
                        onSubmit={onSubmit}>
                        <textarea
                            className='todoInput'
                            // value={newTodoValue}
                            onChange={onChange}
                            onClick={onClickInput}
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