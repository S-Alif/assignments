import {createSlice} from '@reduxjs/toolkit'

let data = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []

export const taskSlicer = createSlice({
  name: "task",
  initialState: {
    todo: data
  },
  reducers:{
    add: (state, action) => {
      state.todo.push(action.payload)
      localStorage.setItem("task", JSON.stringify(state.todo))
    },
    remove: (state, action) => {
      let taskID = action.payload
      state.todo = state.todo.filter((todo) => todo.id != taskID)
      localStorage.setItem("task", JSON.stringify(state.todo))
    },
    update: (state, data) => {
      let task = data.payload.updates
      let id = data.payload.id
      if (task.task){
        state.todo.find(todo => todo.id == id).task = task.task
      }
      if (task.done == true || task.done == false){
        state.todo.find(todo => todo.id == id).done = task.done
      }
      localStorage.setItem("task", JSON.stringify(state.todo))
    }
  }
})

export const { add, remove, update } = taskSlicer.actions
export default taskSlicer.reducer