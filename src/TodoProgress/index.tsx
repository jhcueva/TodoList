import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ChangingProgressProvider from './ChangingProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import './TodoProgress.css'

export const TodoProgress = ({ totalTodos, completedTodos}) => {
  const progress = Math.round((completedTodos * 100) / totalTodos)
  return (
    <div className='progressContainer'>
      {totalTodos !== 0 ?
        <ChangingProgressProvider values={[progress]}>
          {percentage => (
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathTransitionDuration: 0.15
              })}
            />
          )}
        </ChangingProgressProvider>
        : null
      }
    </div>
  )
}
