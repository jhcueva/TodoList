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
import { TodoProgress } from "../TodoProgress";
import { TodoLoadingContainer } from "../TodoLoadingContainer";

import { TodoTaskContainer } from "../TodoTaskContainer";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

function AppUI() {
  const { state, stateUpdaters } = useTodos()

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    notFound,
    task,
  } = state
  
  const {
    setSearchValue,
    addTodo,
    editTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    editTask,
    synchronizeTodos,
  } = stateUpdaters

  return (
    <React.Fragment>
      <section className="globalContainer">
        <NewTask>
          <TodoTask addTodo={addTodo}/>
          <TodoProgress
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
        </NewTask>
        <TodoTaskContainer 
          loading={loading}
          totalTodos={totalTodos}
          >
          <ChangeAlertWithStorageListener
            synchronize={synchronizeTodos}
          />
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            totalTodos={totalTodos}
          />
          <TodoList
            error={error}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            onError={() => <TodoError/>}
            onLoading={() => <TodoLoadingContainer/>}
            onEmptyTodos={() => <EmptyTodos/>}
            onEmptySearchResults={() => <EmptySearchResults searchValue={searchValue}/>}
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
