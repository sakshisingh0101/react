import React,{useCallback,useEffect} from 'react'
import {Button ,Select,Input,RTE} from '../index'
import {useForm} from 'react-hook-form'
import authservice from '../../appwrite/auth'
import service from '../../appwrite/configuration'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
function PostForm({post}){
    const navigate=useNavigate();
    const userData=useSelector((state)=>(state.userData))
    const {register,handleSubmit,control,watch,setValue,getValues}=useForm({
        defaultValues:{
            title:post?.title||'',
            slug:post?.slug||'',
            content:post?.content||'',
            status:post?.status||'active',
            slug:post?.slug||''

        }
    });
   const submit=async(data)=>{
    if(post)
    { const file= data.image[0]? await service.uploadFile(data.image[0]):null
        if(file)
            {
                service.deleteFile(post.featuredImage)
            }
        const dbpost=await service.updatePost(post.slug,
        {
            ...data,
            
            featuredImage:file?file.$id:undefined
            
        })
        if(dbpost)
            {
                navigate(`post/${dbpost.slug}`)
            }
  
    }
    else{
       const file= data.image[0]?service.uploadFile(data.image[0]):null
       if(file)
        {
            const dbpost=await service.createPost({
                ...data,
                slug,
                featuredImage:file? file.$id:undefined,
                userId:userData.$id
            })
            if(dbpost)
                {
                    navigate(`/post/${dbpost.$id}`)
                }
        }
          
    }
   }
   const slugTransform=useCallback((value)=>{
    if(value&&typeof(value)===string)
        { const slug=value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g,'-')
            .replace(/[\s]/g,'-')
          
            return slug
            //const slug=value.toLowerCase().replace(/ /g,'-')
            //setValue('slug',slug)
            //return slug
        }
        else{
            return ''
        }
   },[])
     useEffect(()=>{
        const subscription =watch((value,{name})=>{
            if(name==='title'){
                setValue('slug',slugTransform(value.title,{
                    shouldValidate:true
                }))
            }
        })

        return ()=>{
            subscription.unsubscribe()
        }

     },[watch,slugTransform,setValue])
    
  
    return (
        <>
         <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
         <div className="w-2/3 px-2">
         <Input 
         label='title' 
         placeholder='title' 
         {...register('title',
         {required:true})}/>

         <Input label='slug'
                placeholder='slug'
                {...register('slug',{required:true})}
                onInput={(e)=>{
                    setValue('slug',slugTransform(e.currentTarget.value, { shouldValidate: true }))
                }}
                />
         </div>
         <div className='w-1/3 px-2'>
         <Input label="Featured Image"
                type='file'
                className='mb-4'
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register('image',{required:!post})}
                 />
         </div>
        {post&&( <div className='w-full mb-4' >
            <img 
              src={service.getFilePreview(post.featuredImage)} 
              alt={post.title} 
              className='rounded-lg'/>
         </div>)}
         <Select options={['active','inactive']}
                 label='status'
                 className='mb-4'
                 {...register('status',{required:true})}


         
          />
          <Button children={post?'update':'submit'}
          type='submit'
                  bgcolor={post? 'bg-green-500' : undefined}

                  />
         </form>
        </>
    )
}
export default PostForm