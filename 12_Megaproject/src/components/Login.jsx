import React,{useState} from 'react'
import {Input,Select,Button} from './index'
import { Link,useNavigate } from 'react-router-dom'
import authservice from '../appwrite/auth'
import {login as storelogin} from '../store/feature/authSlice'
import {useDispatch} from 'react-redux'
import {set, useForm } from 'react-hook-form'
import Logo from './Logo'
function Login(){
     const navigate=useNavigate();
     const dispatch =useDispatch();
     const {register ,handleSubmit}=useForm();
     const [error,setError]=useState('');
      const login=async(data)=>{
        try {
            const session=await authservice.login(data)
            if(session)
                {
                    const userdata=await authservice.getCurrentUser()
                    if(userdata)
                        { dispatch(storelogin(userdata))

                        }
                        navigate('/')
                }
        } catch (error) {
            setError(error);
        }
      }
    return (
        <> 
        <div className='flex items-center justify-center w-full'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black/10'>
              <div className='flex justify-center mb-2'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%'/>
                </span>
              </div>
              <h2 className='text-center text-2xl font-bold leading-tight '>Sign in to your account</h2>
              <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    > 
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input label='Email' 
                       placeholder='Enter Your Email'
                       type='email'
                       {...register('email',{
                         required:true,
                         validate:{
                            matchPattern:(value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                         }
                       })}
                />
               <Input label="Password"
                      placeholder="Enter Your Password "
                      type='password'
                      {...register('password',{
                        required:true
                        
                      })}
               />
               <Button children="Login"
                        type='submit'
                        className='w-full'
                       
               />
            </div>

          </form>
            </div>
        </div>
        </>
    )
}
export default Login