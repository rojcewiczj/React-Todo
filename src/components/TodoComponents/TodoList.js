// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react' ;
import ToDo from './Todo';

const TodoList = props => { 
    return ( 
    <div>
{props.data.map(element => {
    return (
     <ToDo task = {element.task} id={element.id} completed ={element.completed} /> 
     
    )
  })}
   <button className="finished-btn" onClick={props.completedTask}>
      Completed-Task
   </button>
  </div>
);
}
export default TodoList; 