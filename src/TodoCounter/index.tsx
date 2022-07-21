import React from 'react';
import './TodoCounter.css'

interface TodoCounterProps {
    totalTodos: number
    completedTodos: number
}

const TodoCounter: React.FC<TodoCounterProps> = ({totalTodos, completedTodos}) => {
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