import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addTodo, getAllTodo } from "./utils/handleApi";

function App() {

  const [todo,setTodo]=useState([])
  const [text,setText]=useState("")

  useEffect(()=>{
    getAllTodo(setTodo)
  },[])
  return (
    <div className="App">
      <div className="container">
        <h1>WhatToDo App</h1>
        <div className="top">
          <input type="text" 
          placeholder="Add Todos..."
          value={text}
          onChange={(event)=>{
            setText(event.target.value)
          }}
          />
          <div className="add" onClick={()=>addTodo(text,setText,setTodo)}>Add</div>
        </div>
        <div className="list">
          {todo.map((item)=> <Todo key={item._id} text={item.text}></Todo>)}
        </div>
      </div>
    </div>
  );
}

export default App;
