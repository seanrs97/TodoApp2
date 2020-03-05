import React, {Component} from 'react';
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddToDo from "./components/AddToDo";
import './App.css';


// GO TO 1:13:30 IN THE REACT CRASH COURSE VIDEO
  
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Make dinner for kids",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {;
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: 
      [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add Todo
  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className = "container">
          <Header />
          <AddToDo addTodo = {this.addTodo}/>
          <Todos todos = {this.state.todos} 
          markComplete = {this.markComplete}
          delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
