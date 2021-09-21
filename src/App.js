
import './App.css';

import React, {useState, useRef} from 'react';
import {v4 as uuidv4} from 'uuid'

import TodoList from './components/TodoList';
import { Container } from 'react-bootstrap';

import { Alert } from 'react-bootstrap';

function App() {
    const todoDescription = useRef(null);
    const todoName = useRef(null);
    const [theTodo, settheTodo] = useState([]);    
    const [toggleAlert, settoggleAlert] = useState(false);

const addToList = () =>{
  const todoN = todoName.current.value
        if(todoN.length > 0){
    const todoD = todoDescription.current.value
    
           settheTodo(prevTodo =>{
               return [...prevTodo, {id: uuidv4(), name: todoN, description: todoD, complete: false}]
           })
           todoDescription.current.value = null
           todoName.current.value = null
           settoggleAlert(false)
          }
          else{
            settoggleAlert(true)
          }
       }

       const ClearTask = () =>{
         settheTodo([])
       }

  return (
    <div className="App">
      <Container>
      <h1 className="Title">To Do List </h1>
            <input className="inputBox" ref={todoName} type="text" placeholder="Add a task"/>
            <br></br>
            <textarea className="descBox" ref={todoDescription} type="text" placeholder="Add a description if needed"> </textarea>
            <br></br>
            <button className="addList" onClick={addToList}>Add</button>
            <button className="clearList" onClick={ClearTask}>Clear All Task </button>

            {toggleAlert === true &&
      <Alert variant="danger" >
      Please insert field in Add a task
      </Alert>
        }
           <TodoList theTodo={theTodo} settheTodo={settheTodo} />
        
           </Container>
    </div>
  );
}

export default App;
