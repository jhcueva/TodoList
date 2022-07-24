import React from "react";
import { TodoTask } from "../TodoTask";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { NewTask } from "../NewTask"
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { EmptyTodos } from "../EmptyTodos";
import { EmptySearchResults } from "../EmptySearchResults";

import { TodoContextProps } from "../TodoContext/index.models";
import { TodoTaskContainer } from "../TodoTaskContainer";

function AppUI() {
  const {
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    totalTodos,
    completedTodos,
    addTodo,
    searchValue, 
    setSearchValue,
    error,
    setOpenModal,
    task,
    editTodo,
    editTask,
  } = useTodos()

  return (
    <React.Fragment>
      <section className="globalContainer">
        <NewTask>
          <TodoTask addTodo={addTodo}/>
        </NewTask>
        <TodoTaskContainer loading={loading}>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList
            error={error}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            onError={() => <TodoError/>}
            onLoading={() => <TodoLoading/>}
            onEmptyTodos={() => <EmptyTodos/>}
            onEmptySearchResults={() => <EmptySearchResults searchValue={searchValue}/>}
            // render={todo => (
            //   <TodoItem
            //   editTask={(text) => editTask(text)}
            //   setOpenModal={(state) => setOpenModal(state)}
            //   key={todo.text}
            //   text={todo.text}
            //   completed={todo.completed}
            //   onComplete={() => completeTodo(todo.text)}
            //   onDelete={() => deleteTodo(todo.text)}
            //   />)
            // }
          >
            {todo => (
              <TodoItem
              editTask={(text) => editTask(text)}
              setOpenModal={(state) => setOpenModal(state)}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />)
            }
          </TodoList>
        </TodoTaskContainer>
        {!!openModal && (
          <Modal>
            <TodoForm 
              task={task}
              editTodo={editTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
      </section>
    </React.Fragment>
  );
}

export { AppUI };
