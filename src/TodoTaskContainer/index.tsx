import React, { ReactElement, ReactNode, useEffect, useRef } from 'react'

interface Props {
  totalTodos: number
  loading: boolean
  children?: React.ReactNode
}
interface ChildrenProps {
  loading: boolean
}

const TodoTaskContainer = ({ children, loading, totalTodos }: Props) => {
  const todotaskContainer = useRef()

  // todotaskContainer.current.style.marginTop = "max(240px, 70vh)"

  // useEffect(() => {
  //   if ((totalTodos > 0)) {
  //     todotaskContainer.current.style.marginTop = "max(240px, 53vh)"
  //   } else {
  //     todotaskContainer.current.style.marginTop = "max(240px, 35vh)"
  //   }
  // }, [totalTodos])

  return (
    <section className="todoTask" ref={todotaskContainer}>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child as ReactElement<ChildrenProps>, { loading }))
      }
    </section>
  )
}

export { TodoTaskContainer }