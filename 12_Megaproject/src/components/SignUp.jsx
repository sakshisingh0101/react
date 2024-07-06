import React,{useState} from 'react'
import { Input,Button } from './index'
import {Link, useNavigate} from 'react-redux'
import { useForm } from 'react-hook-form'
import authservice from '../appwrite/auth'
import { login as storelogin } from '../store/feature/authSlice'
import {useDispatch} from 'react-redux'
function SignUp()
{  const navigate=useNavigate()
    const dispatch =useDispatch()
    const [register,handleSubmit]=useForm()
    const [error , setError]=useState('')

    const signup=async (data)=>{
        setError('')
        try {
            const account=await authservice.createaccount(data)
            if(account)
                {
                    const userdata=await authservice.getCurrentUser()
                    if(userdata)
                        { dispatch(storelogin(userdata))

                        }
                        navigate('/')
                }
        } catch (error) {
            setError(error)
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
              <h2 className='text-center text-2xl font-bold leading-tight '>Sign Up to create an account</h2>
              <p  className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    > 
                        Login
                    </Link> 
                    </p>
                 {error&&<p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(signup)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input label='Email'
                               placeholder='Enter your email'
                               type='email'
                               {...register('email',{
                                required:true,
                                validate:{ matchPattern:(value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                 }

                                
                               })}
                        />
                        <Input label="Password"
                               placeholder='Password'
                               type="password"
                               {...register('password',{
                                required:true
                               })}
                        />
                        <Input label='Name'
                            placeholder="Enter your username"
                            type="text"
                            {...register('name',{
                                required:true
                            })}
                        />
                        <Button children='Create Account'
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
export default SignUp