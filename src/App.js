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
      <div className=''>
        <div className=' disp col-9 shadow-sm mx-auto'>
           <TodoInput addTodo={addTodo} />
           <DisplayTodo allTodo={allTodo} setallTodo={setallTodo}/>
        </div>
      </div>
    </div>
    
      
    </>
  );
}

export default App;
