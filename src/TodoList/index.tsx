import React from "react";
import "./TodoList.css";
import {Item} from '../TodoContext/useLocalStorage.models'

interface ToDoListProps {
  children?: React.ReactNode;
  loading: boolean;
  searchedTodos: Item[]
}

function TodoList({ children, loading, searchedTodos }: ToDoListProps) {
  return (
    <>
      <ul className="TodoList">{children}</ul>
      {loading && <p>Loading your tasks, please wait...</p>}
      {!loading && !searchedTodos.length && <p>Create your first task</p>}
    </>
  );
}

export { TodoList };
