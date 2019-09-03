import React from 'react';

import ToDo from './Todo';

const ToDoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="ToDo-list">
      {props.data.map(task => (
        <ToDo key={task.id} task={task} toggleTask={props.toggleTask} />
      ))}
      <button className="completed-btn" onClick={props.completedTask}>
       Completed
      </button>
    </div>
  );
};

export default ToDoList;
