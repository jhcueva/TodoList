import React from 'react'

interface Props {
  children?: React.ReactNode
}

const NewTask = ({ children }: Props) => {
  return (
    <section className="newTask">
      { children }
    </section>
  )
}

export {NewTask}