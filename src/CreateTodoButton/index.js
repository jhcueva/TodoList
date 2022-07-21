import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onclickButn = (msg) => {
        alert(msg)
    }
    return(
        <button 
            className="newtaskBtn"
            onClick={ () => onclickButn('Apertura del modal') }
        >Create a new task</button>
    );
}

export { CreateTodoButton };