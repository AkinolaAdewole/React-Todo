import React from 'react'
import { useState } from 'react'
import '../myStyles/style.css'
import '../myStyles/style.css'
import '../myStyles/disp.css'


const TodoInput=({addTodo})=> {
  const [todo,setTodo]=useState("")
  const hSubmit=(e)=>{
    e.preventDefault()
    setTodo("")
  }
  // 
  return (
    <>
   
      <div>
        
          <div  onSubmit={hSubmit}>

            <div className='display'>
                  <h2>Todo-List</h2>
                    <div>
                      <div className='container-fluid'>
                            <input aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                            type="text" className="form-control" 
                            placeholder='Add a Todo' onChange={(e)=>setTodo(e.target.value)}/>
                      </div>
                    </div> 
                      
                      <div>
                      <button onClick={()=>addTodo(todo)}>Add a Todo</button>
                      </div>
                  </div>
                 
          </div>

{/* <form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"></input>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"></input>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
</form> */}
          
          </div>
        
     
      {/* </div> */}

      
    
    </>
  )
}

export default TodoInput