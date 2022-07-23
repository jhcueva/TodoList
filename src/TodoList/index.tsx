import React from "react";
import "./TodoList.css";
import {Item} from '../TodoContext/useLocalStorage.models'

interface ToDoListProps {
  error: boolean
  loading: boolean
  searchedTodos: Item[]
  onError: () => void
  onLoading: () => void
  onEmptyTodos: () => void
  render: (todo) => JSX.Element
  // children: React.ReactNode | React.ReactNode[]

}


function TodoList (props: ToDoListProps) {
  return (
    <>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
      <section className="TodoList">
        {props.searchedTodos.map(props.render)}
      </section>
    </>
  );
}

export { TodoList };
