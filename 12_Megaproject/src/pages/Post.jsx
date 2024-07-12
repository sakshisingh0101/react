import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import service from '../appwrite/configuration'
import parse from 'html-react-parser'
import { Container } from '../components'
function Post()
{
    const navigate=useNavigate()
    const {slug}=useParams()
    const [post,setPost]=useState(null)
    const userdata=useSelector((state)=>(state.userdata))
    const isauthor=post&&userdata? post.userId===userdata.$id:false


    useEffect(()=>{
        if(slug)
        {
        service.getPost(slug).then((post)=>{
            if(post) setPost(post)
            else navigate('/')
        })
    }
    else{
        navigate('/')
    }
    },[slug,navigate])
    const deletepost=()=>{
        const status=service.deletePost(post.$id)
        if(status)
        {
            service.deleteFile(post.featuredImage)
            navigate('/')
        }
    }
    if(post)
    {
        return (
            <> 
               <div  className="py-8">
                <Container >
                    <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                        <img src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className='rounded-xl'
                            />
                        {isauthor&& (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                <Button  bgColor="bg-green-500" className="mr-3">Edit</Button>

                                </Link>
                                <Button  bgColor="bg-red-500" onClick={deletepost}>Delete</Button>

                        </div>
                        

                        

                    )}
                    <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>


                    </div>
                </Container>
               </div>
            </>
        )
    }
    else{
            return (
                <>
                 <div className='py-8 w-full mt-8 text-center'>
                    <Container>
                        <div className='flex flex-wrap'>
                            <div className='p-2 w-full'>
                                <h1 className='text-2xl font-bold hover:text-gray-500'>
                                    Login to read posts
                                </h1>
                            </div>
                        </div>
                    </Container>
                </div>
                </>
            )
    }
}
export default Post