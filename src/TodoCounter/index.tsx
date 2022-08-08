import React from 'react';
import './TodoCounter.css'
import confetti from 'canvas-confetti'

interface TodoCounterProps {
  totalTodos: number
  completedTodos: number
  loading?: boolean
}

const TodoCounter: React.FC<TodoCounterProps> = ({ totalTodos, completedTodos, loading }) => {

  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  React.useEffect(() => {
    totalTodos - completedTodos > 0
      ? (document.title = `${totalTodos - completedTodos} ${totalTodos - completedTodos === 1 ? "pending task | To do List" : "pending tasks | To do List"
        }`)
      : (document.title = `To do List`);

    if ((totalTodos === completedTodos) && totalTodos !== 0) {
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
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