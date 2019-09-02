import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: "John",
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
        <TodoList task={this.state.data[1].task} />
      </div>
    );
  }
 
}



export default App;
