import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {login } from '../store/feature/authSlice'
import service from '../appwrite/configuration'
import { Container,PostCard} from '../components/index'
import { useNavigate } from 'react-router-dom'
function Home()
{   const [posts,setPosts]=useState([])
    useEffect(()=>{
        service.getPosts().then((posts)=>{
            setPosts(posts.documents)
        })
    },[])
  
        if(posts.length===0)
        {
            return (
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
            )
        }
        else{
            return (
                <div className='py-8 w-full mt-8 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        
                           {posts.map((post)=>(
                            <div key= {post.$id}className='p-2 w-1/4' >
                            <PostCard {...post}/>
                            </div>
                           ))}
                        
                    </div>
                </Container>
            </div>
        
            )
        }
        
    

}
export default Home