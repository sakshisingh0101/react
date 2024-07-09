import React,{useState,useEffect, useState} from 'react'
import {PostCard,Container} from '../components/index'
import service from '../appwrite/configuration'
import { useSelector } from 'react-redux'

function AllPost()
{  const [posts,setPosts]=useState([])
    useEffect(()=>{
      service.getPosts([]).then((posts)=>{
        if(posts)
            {
                setPosts(posts.documents)
            }
      })
    },[])
    return (
        <>  <div className='w-full py-8 '>
            <Container>
                <div className='flex flex-wrap'>
                {posts&&posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard  post={post}/>
                    </div>
                ))}
                </div>
            </Container>
        </div>

        </>
    )
}
export default AllPost