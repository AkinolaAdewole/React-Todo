import React, { useState } from "react";
import "../myStyles/disp.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";


const DisplayTodo = ({ allTodo, setallTodo}) => {
  const [newTodo, setNewTodo] = useState("");
  const [editedIndex, setEditedIndex] = useState(0);

  const [todoToEdit,setTodoToEdit]=useState("")

  const editTodo = (index,todo) => {
    setEditedIndex(index);

    setTodoToEdit(todo)
  };

  const updateTodo = (allTodo) => {
    // let updateDetail = [...allTodo];
    console.log( allTodo);
    // updateDetail[editedIndex] = newTodo
    setNewTodo("");
    setallTodo(newTodo);
  };
  
  const deleteTodo=(index)=>{
    console.log(index);
    let newAllTodo=[...allTodo]
    newAllTodo.splice(index,1)
    setallTodo(newAllTodo)
    
    // let filteredTodo=newAllTodo.filter((todo,ind)=>index!==ind)
    // allTodo(newAllTodo)
  } 

  return (
    <>
      <div className="bg">
        <table className="table" >
          <tr>
            <td>S/N</td>
            <td>Todo</td>
            <td>Actions</td>
          </tr>
          {allTodo.map((todo, index) => (
            <>
              <tr>
                <td>{index + 1}</td>
                <td>{todo}</td>
                <td>
                  <div className="d-flex">
                    {/* Edit Todo */}
                    <TiEdit
                      onClick={() => editTodo(index,todo)}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />

                    <RiCloseCircleLine btn onClick={()=>deleteTodo(index)} />
                  </div>
                </td>
              </tr>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit Todo
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                   
                   
                    <div class="modal-body">
                      <input
                        type="text"
                        placeholder={todoToEdit}
                        className="form-control"
                        onChange={(e) => setNewTodo(e.target.value)}
                      />
                    
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={()=>updateTodo()}
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </table>
      </div>
    </>
  );
};

export default DisplayTodo;
