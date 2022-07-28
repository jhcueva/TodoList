import React from 'react';
import './TodoCounter.css'

interface TodoCounterProps {
  totalTodos: number
  completedTodos: number
  loading: boolean
}

const TodoCounter: React.FC<TodoCounterProps> = ({ totalTodos, completedTodos, loading }) => {

  React.useEffect(() => {
    totalTodos - completedTodos > 0
      ? (document.title = `${totalTodos - completedTodos} ${totalTodos - completedTodos === 1 ? "pending task" : "pending tasks"
        }`)
      : (document.title = `No pending tasks`);
  }, [totalTodos, completedTodos]);

  return (
    <>
      <h2 className='title'> Your tasks </h2>      
      {
        (!loading && totalTodos) 
          ? <h3 className='description'> Completed {completedTodos} out of {totalTodos} </h3>
          : null
      }
    </>
  )
}

export { TodoCounter };