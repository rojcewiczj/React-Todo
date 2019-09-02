// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react' ;
import ToDoCard from './TodoCard';

const TodoList = props => 
<ToDoCard task={props.task} />

export default TodoList; 