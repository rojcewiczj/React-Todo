import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

const listData = [
  
    {
      name: 'Clean Apartment',
      id: 1,
      completed: false
    },
    {
      name: 'practice keyboard',
      id: 2,
      completed: false
    }
 

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: "John",
      data: listData,
      
    };
  }

toggleTask= id => {
  console.log(id);
  this.setState({
    data: this.state.data.map(task=> {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    })
  });
};
addTask = taskName => {
  const newTask = {
    name: taskName,
    id: Date.now(),
   completed: false
  };
  this.setState({
    data: [...this.state.data, newTask]
  });
};

completedTask = () => {
  this.setState({
    data: this.state.data.filter(task => !task.completed)
  });
};
  
  render() {
  
    return (
      <div className="App">
        <div className="header">
          <h1> Hello {this.state.name}</h1> 
          <h2>Welcome to your Todo App!</h2>
           <ToDoForm addTask = {this.addTask} />
        </div>
         
       <TodoList 
       data = {this.state.data}
        toggleTask = {this.toggleTask} 
        completedTask = {this.completedTask}/>
       
         
      </div>
    );
  }
 
}



export default App;
