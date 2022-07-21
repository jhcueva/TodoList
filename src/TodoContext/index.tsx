import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import {TodoContextProps, BaseLayoutProps} from './index.models'

const TodoContext = React.createContext<TodoContextProps | {}>({});

const TodoProvider: React.FC<BaseLayoutProps> = ({children}) => {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", []);

    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false)
    const [task, editTask] = React.useState("")

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    let notFound = "";

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            if (!todoText.includes(searchText)) {
                notFound = `No task with name: ${searchText}`;
            }
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text: string) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text,
        });
        saveTodos(newTodos);
    }
    const editTodo = (text: string, newText: string) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos)
    }

    const completeTodo = (text: string) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text: string) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            searchedTodos,
            setSearchValue,
            notFound,
            addTodo,
            editTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            task,
            editTask
        }}>{
            children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }
