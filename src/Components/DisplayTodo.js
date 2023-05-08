import React, { useState } from "react";
import "../myStyles/disp.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";


const DisplayTodo = ({ allTodo, setallTodo}) => {
  const [newTodo, setNewTodo] = useState("");
  const [editedIndex, setEditedIndex] = useState(0);
  const [todoToEdit,setTodoToEdit]=useState("")
  const [editedTodo, setEditedTodo]=useState([])

  const editTodo = (index,todo) => {
    setEditedIndex(index)
    setTodoToEdit(todo)
  };

  const updateTodo = (index) => {
    let updatedTodo = newTodo
    let updateDetail = [...allTodo];
    // console.log( allTodo);
    setEditedIndex(index)
    updateDetail[editedIndex] = updatedTodo
      setallTodo(updateDetail)
    setNewTodo("");
  };
  
  const deleteTodo=(index)=>{
    // console.log(index);
    let newAllTodo=[...allTodo]
    newAllTodo.splice(index,1)
    setallTodo(newAllTodo)
    
    // let filteredTodo=newAllTodo.filter((todo,ind)=>index!==ind)
    // allTodo(newAllTodo)
  } 

  return (
    <>
      <div className="display">
        <table className="table table-responsive" >
          <thead>
            <tr>
                <td>S/N</td>
                <td>Todo</td>
                <td>Actions</td>
            </tr>
          </thead>
          {allTodo.map((todo, index) => (
            <>
             <tbody>
                  <tr key={index} className='' >
                    <td>{index + 1}</td>
                    <td className="colspan-9">{todo}</td>
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
            </tbody>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit Todo
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                   
                   
                    <div className="modal-body">
                      <input
                        type="text"
                        placeholder={todoToEdit}
                        className="form-control"
                        onChange={(e) => setNewTodo(e.target.value)}
                      />
                    
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={()=>updateTodo(index)}
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
