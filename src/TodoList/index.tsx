import React from "react";
import "./TodoList.css";
import { Item } from '../TodoContext/useLocalStorage.models'

interface ToDoListProps {
  error: boolean
  loading: boolean
  searchedTodos: Item[]
  totalTodos: number
  onError: () => void
  onLoading: () => void
  onEmptyTodos: () => void
  onEmptySearchResults: () => void
  render?: (todo) => JSX.Element
  children?: (todo) => JSX.Element

}


function TodoList (props: ToDoListProps) {
  return (
    <>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults()}

      <section className="TodoList">
        {props.searchedTodos.map(props.render || props.children)}
      </section>
    </>
  );
}

export { TodoList };
