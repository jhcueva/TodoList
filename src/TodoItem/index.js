import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

  const onClickEdit = () => {
    console.log("Edit")
    props.editTask(props.text);
    props.setOpenModal(true);
  };
  
  return (
    <li className={`todoContainer ${props.completed && "todoContainer--active"}`}>
      <div className={`check ${props.completed && "check--active"}`}>
        <i className={`checkIcon fa-solid fa-check ${ props.completed && "checkIcon--active"}`}
        ></i>
      </div>
      <section className="taskContainer">
        <p
          className={`todoItem ${props.completed && "todoItem--completed"}`}
          onClick={props.onComplete}
        >
          {props.text}
        </p>
      </section>
      <section className="taskButtons">
        <i class="edit fa-solid fa-ellipsis" onClick={onClickEdit}></i>
        <i class="delete fa-solid fa-trash" onClick={props.onDelete}></i>
      </section>
    </li>
  );
}

export { TodoItem };
