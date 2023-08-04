import {configureStore} from '@reduxjs/toolkit'
import task from '../slices/taskSlice'


export default configureStore({
  reducer:{
    manager: task
  }
})