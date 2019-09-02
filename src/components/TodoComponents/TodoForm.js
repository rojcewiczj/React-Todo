import React from "react";


const ToDoForm = props => {
    return (
        <div>

<input type="text" placeholder="..lets get it done!" onChange={props.InputChange} />
        <button onClick ={props.MoreToDo}>More To Do</button>
        <button onClick ={props.BeGone}>Be Gone!</button>
}
</div>
)
}
export default ToDoForm;