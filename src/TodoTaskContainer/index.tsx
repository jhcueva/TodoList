import React from 'react'

interface Props {
  loading: boolean
  children?: React.ReactNode
}

const TodoTaskContainer = ({ children, loading }: Props) => {
  return (
    <section className="todoTask">
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement( child, { loading}))
      }
    </section>
  )
}

export { TodoTaskContainer }