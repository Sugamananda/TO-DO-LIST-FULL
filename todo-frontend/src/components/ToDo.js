import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="edit-icon" onClick={updateMode} />
        <AiFillDelete className="delete-icon" onClick={deleteToDo} />
      </div>
    </div>
  )
}

export default ToDo;