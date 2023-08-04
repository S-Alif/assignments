import {useDispatch} from 'react-redux'
import { remove, update } from './features/slices/taskSlice';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const List = ({ task }) => {

  const dispatch = useDispatch()
  // console.log(task)

  let updateTask = (updates) => {
    dispatch(update({ updates: updates, id: task.id }))
    Swal.fire({
      icon: 'success',
      text: "Task Updated",
      showConfirmButton: false,
      timer: 2000,
    })
  }

  let update_popup = () => {
    Swal.fire({
      title: 'Update task',
      input: 'text',
      showCancelButton: true,
      confirmButtonColor: '#198754',
      confirmButtonText: 'Update',
    }).then(() => {
      let data = Swal.getInput().value
      updateTask({ task: data, id: task.id })
    })
  }

  let delete_popup = () => {
    Swal.fire({
      icon: "warning",
      title: 'Delete task',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'delete',
    }).then((result) => {
      if(result.isConfirmed){
        dispatch(remove(task.id))
      }
    })
  }
  

  return (
    <>
      <div className="col-12">
        <div className="task-box mb-3 p-2 pb-3 d-flex justify-content-start align-items-center border-bottom border-secondary-subtle">

          <input type="checkbox" className="form-check form-check-input" defaultChecked={task.done} onChange={(e) => updateTask({done: e.target.checked, id: task.id})} />

          <div className="task ps-4 pe-4 w-100">
            <p className="text-dark fw-bold mb-0">{task.task}</p>
          </div>

          <div className="controls d-flex">
            <button className="btn btn-success" value={task.id} onClick={(e) => update_popup()}><i className="fa-solid fa-pen-to-square"></i></button>
            <button className="btn btn-danger ms-2" value={task.id} onClick={() => delete_popup()}><i className="fa-solid fa-trash-can"></i></button>
          </div>

        </div>
      </div>
    </>
  );
};

export default List;