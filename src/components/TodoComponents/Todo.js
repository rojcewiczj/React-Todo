import React from "react";

const ToDo = props => {
  return (
    <div
      className={`task${props.task.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      <p>{props.task.name}</p>
    </div>
  );
};
export default ToDo;

