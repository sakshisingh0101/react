import { todoReducer } from '../feature/todo/todoSlice'
import {configureStore} from '@reduxjs/toolkit'
export const store=configureStore({
    reducer:todoReducer
})