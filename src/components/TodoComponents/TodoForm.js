import React from "react";


const ToDoForm = props => {

<input type="text" placeholder="..lets get it done!" onChange={props.InputChange} />
        <button onClick ={props.MoreToDo}>More To Do</button>
        <button onClick ={props.BeGone}>Be Gone!</button>
}