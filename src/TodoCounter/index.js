import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    React.useEffect(() => {
        totalTodos - completedTodos > 0
            ? (document.title = `${totalTodos - completedTodos} ${
                totalTodos - completedTodos === 1 ? "pending task" : "pending tasks"
            }`)
            : (document.title = `No pending tasks`);
    }, [totalTodos, completedTodos]);
    return (
        <>
        <h2 className='title'> Your tasks </h2>
        <h3 className='description'> Completed {completedTodos} out of {totalTodos} </h3>
        </>
    )
}

export { TodoCounter };