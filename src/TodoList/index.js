import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoList.css'

function TodoList(props) {
    const {notFound, loading, searchedTodos} = React.useContext(TodoContext)
    return(
        <>
            <ul className="TodoList">
                {props.children}
            </ul>
            {loading && <p>Loading your tasks, please wait...</p>}
            {(!loading && !searchedTodos.length) && <p>Create your first task</p>}
            <p>{props.notFound}</p>
        </>
    );
}

export { TodoList };