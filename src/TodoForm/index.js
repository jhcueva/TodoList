import React from "react";
import './TodoForm.css'

function TodoForm({ setOpenModal,task, editTodo }) {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    const onCloseModal = () => {
        setOpenModal(prevState => !prevState)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        editTodo(task, newTodoValue)
        setOpenModal(prevState => !prevState)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>..</label>
            <textarea
                // value={newTodoValue}
                onChange={onChange}
                placeholder={task}
            >{task}</textarea>
            <div>
                <button
                    type="button"
                    onClick={onCloseModal}
                >Cancel</button>
                <button
                    type="submit"
                    disabled={newTodoValue.length < 4 ? true : false}
                >Done</button>
            </div>
        </form>
    )
}

export { TodoForm }