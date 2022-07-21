import React from 'react'

interface Props {
  children?: React.ReactNode
}

const TodoTaskContainer = ({ children }: Props) => {
  return (
    <section className="todoTask">
      { children }
    </section>
  )
}

export { TodoTaskContainer }