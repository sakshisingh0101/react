import React,{useState,useEffect} from 'react'
import {RTE,Container,PostForm} from '../components/index'
import { Navigate } from 'react-router-dom'
import service from '../appwrite/configuration'
import { useParams ,useNavigate} from 'react-router-dom'

function EditPost()
{  const [post,setPost]=useState(null)
    const {slug}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
      if(slug)
      {
        service.getPost(slug).then((post)=>{
            setPost(post)
        })
      }
      else{
        navigate('/')
      }
    },[slug,navigate])
   return (
    <>
        {post?
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>

        </div>
         :null}
    </>
   )
}
export  default EditPost