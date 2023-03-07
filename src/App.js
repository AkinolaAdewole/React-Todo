import React from 'react';
import './myStyles/disp.css';
import DisplayTodo from './Components/DisplayTodo';
import Formik from './Components/Formik';
import TodoInput from './Components/TodoInput';
import { useState } from 'react';

function App() {
  const [allTodo, setallTodo]= useState([]);
  
  const addTodo=(myTodo)=>{
    
    setallTodo([...allTodo,myTodo])
  //  myTodo.preventDefault()
  }

  


  return (
    <>
    <div className='bg'>
      <div className='app-wrapper'>
           <TodoInput addTodo={addTodo} />
           <DisplayTodo allTodo={allTodo} setallTodo={setallTodo}/>
           
      </div>
    </div>
    
      
    </>
  );
}

export default App;
