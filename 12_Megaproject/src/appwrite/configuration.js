import {Client,ID,Databases,Storage,Query} from 'appwrite'
import conf from '../config/config'
export class Service{
    client=new Client();
    databases
    buckets 

    constructor()
    {
        this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.projectId)
        
        this.databases=new Databases(this.client)
        this.buckets=new Storage(this.client)


    }
    
    async createPost({title,content,featuredImage,slug,status,userId})
    {
        try {
            const document= await this.databases.createDocument(conf.databaseId,conf.collectionId,slug,{title,content,featuredImage,status,userId})
            if(document)
                {
                    return document
                }
               
        } catch (error) {
            console.log("Appwrite Service:: Create document error :: ",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,userId})
    {
        try 
        {
            const document=await this.databases.updateDocument(conf.databaseId,conf.collectionId,slug,
                {   title,
                    content,
                    featuredImage,
                    status
                    })
            if(document)
                {
                    return document
                }
               
        } catch (error) {
            console.log("Appwrite service error:: document updation error:: ",error)
        }
    }
    async deletePost(slug)
    {
        try {
            await this.databases.deleteDocument(conf.databaseId,conf.collectionId,slug)
            return true
            
        } catch (error) {
            console.log("Appwrite service error::deleting document error ",error)
            return false
            
        }
    }
    async getPost({slug})
    {
        try {
            const document=await this.databases.getDocument(conf.databaseId,conf.collectionId,slug)
            if(document)
                {
                    return document
                }
                else{
                    return false;
                }
        } catch (error) {
            console.log("Appwrite service error:: get document error:: ",error)
        }
    }
    async getPosts()
    {
        try {
            const document=await this.databases.listDocuments(conf.databaseId,conf.collectionId,[
                Query.equal("status","active")
            ])
           
            if(document)
                {
                    return document
                }
                else{
                    return false;
                }
        } catch (error) {
            console.log("Appwrute service error:: get document error:: ",error)
        }
    }
    //file upload services
     
    async uploadFile(file)
    {
        try {  //return file id which we will pass to featuredImage in creating post or document
           return  await this.buckets.createFile(
                conf.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service error:: uplaodfile error:: ",error)
        }
    }
    
    async deleteFile(fileId)
    { try{
        await this.buckets.deleteFile(conf.bucketId,fileId)
        return true;
    }
    catch(error)
    {
        console.log('Appwrite error:: delete file error:: ',error)
        return false;
    }
    }

     getFilePreview(fileId)
    {
      return this.buckets.getFilePreview(conf.bucketId,fileId)
            
       
    }

}
 const service=new Service();

 export default service;