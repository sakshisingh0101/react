import {configureStore} from '@reduxjs/toolkit'
import { authslice } from './feature/authSlice'
export const store=configureStore({
    reducer:authslice 
})