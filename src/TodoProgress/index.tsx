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
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `rgba(112, 224, 0)`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'round',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: '0',
                  transformOrigin: 'center center',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: '#d6d6d6',
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'round',
                  // Rotate the trail
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                // Customize the text
                text: {
                  // Text color
                  fill: 'white',
                  // Text size
                  fontSize: '16px',
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: '#70e000',
                },
              }}
            />
          )}
        </ChangingProgressProvider>
        : null
      }
    </div>
  )
}
