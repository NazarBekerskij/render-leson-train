import './App.css'
import { Component } from 'react'
import initialTodos from "./todo.json"
// import Info from './components/Info/Info';
// import TodoList from './components/TodoList/TodoList';
// import TodoEditor from './components/TodoEditor/TodoEditor';
// import { nanoid } from "nanoid";
console.log(initialTodos.completed);
class App extends Component {
 state = {
    todos: initialTodos,
    filter: "",
  };


 


  render(){
    return(
      <h1></h1>
    )
  }
}

export default App