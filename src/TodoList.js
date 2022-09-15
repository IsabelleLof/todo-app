import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import './App.css';
import './TodoList.css';

export default function TodoList () {

  const [isHandleAddPopupDisplayed, setHandleAddPopupDisplay] = React.useState(false);
    
  const [todos, setTodos] = React.useState([
    
  ]);
  const [todo, setTodo] = React.useState("");
  //console.log(typeof TodoList);
  //Hooks
  
  //ComponentDidMount
  React.useEffect(() => {
    fetchTodos()
}, []); 

const fetchTodos = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    setTodos(response.data)
  })
}

const deleteTodo = (todoToDeleteId) => {
    console.log(todoToDeleteId);
    const newTodos = todos.filter(todo => todo.id !== todoToDeleteId);
    setTodos(newTodos);
}

function handleSubmit (e) {
  e.preventDefault();

  const newTodo = {
      id: todo,
      title: "",
      completed: false,
  }
  setTodos([...todos].concat(newTodo))
  setTodo("");

}

const [isEditing, setIsEditing] = useState(false);

const [currentTodo, setCurrentTodo] = useState({});

function handleEditInputChange(e) {
  setCurrentTodo({ ...currentTodo, text: e.target.value });
  console.log(currentTodo);
  //const handleEditInputChange = (handleEditInputChange) => {
    //  setCurrentTodo(handleEditInputChange);
//  }  
}

const handleAddPopup = () => {
    setHandleAddPopupDisplay(!isHandleAddPopupDisplayed)
}

//const fetchTodos = () => {
//  axios.get('https://jsonplaceholder.typicode.com/todos')
//  .then((response) => {
//      setTodos(response.data)
//  })
//}

  return (
    <div className="App">
        {isHandleAddPopupDisplayed ? 
        (<div className='popup'>
        <div className='popup-card'>
        <div className='popup-card-content'><h2> You created your first todo! </h2>
        <button>Save your Todo</button>
        </div>
        </div>
        </div>) : null}
      <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        onChange={(e) => setTodo(e.target.value)} 
        value={currentTodo.text} />
        <button onClick={handleAddPopup} type='submit'>Add Todo</button>
      </form>
      {todos.map(todo => 
      <Todo key={todo.id}
      todo={todo} 
      deleteTodo={deleteTodo}
      onChange={handleEditInputChange} />)}
      </div>
   )
  } 