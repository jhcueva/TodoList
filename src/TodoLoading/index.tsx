import React from 'react'
import './TodoLoading.css'

export const TodoLoading = () => {
  return (
    <li className={`todoLoading`}>
      <div className={`checkLoading`}>
        <i className={`checkIcon fa-solid fa-check`}
        ></i>
      </div>
      <section className="taskContainerLoading">
        <div
          className={`todoItemLoading__one`}
        >
        </div>
        <div
          className={`todoItemLoading__two`}
        >
        </div>
      </section>
      <section className="taskButtons">
        <i className="editLoading fa-solid fa-ellipsis"></i>
        <i className="deleteLoading fa-solid fa-trash"></i>
      </section>
    </li>
  )
}
