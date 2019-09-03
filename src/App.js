import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: "John",
      SavedText: [],
      newData:[
    ],
      data: [
        {
          task: 'Clean Apartment',
          id: 1,
          completed: false
        },
        {
          task: 'practice keyboard',
          id: 2,
          completed: false
        }
      ]
      
    };
  }


  
  render() {
  
    return (
      <div>
         <h1> Hello {this.state.name}</h1>
        <h2>Welcome to your Todo App!</h2>
       <TodoList data = {this.state.data} />
        <ToDoForm />
         
        
    
      </div>
    );
  }
 
}



export default App;
