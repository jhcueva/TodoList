import React from 'react'
import { TodoTask } from '../TodoTask'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal"
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <section className='globalContainer'>
                <section className='newTask'>
                    <TodoTask/>
                    {/* <CreateTodoButton />    */}
                </section>
                <section className='todoTask'>
                    <TodoCounter/>    
                    <TodoSearch/>
                    <TodoList
                        >
                        {searchedTodos.map(todo =>(
                            <TodoItem 
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete = {() => completeTodo(todo.text )}
                            onDelete = {() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>
                </section>
                {!!openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )}
            </section>
        </React.Fragment>
    )
}

export { AppUI }