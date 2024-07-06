import conf from '../config/config'
import { Client, Account, ID } from "appwrite";
export class AuthService{
    client=new Client()
    account
    constructor()
    { this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectId);
      this.account=new Account(this.client)
      

    }
    async createaccount({email,password,name})
    {
        try 
        {  const useraccount=await this.account.create(ID.unique,email,password,name)
            if(useraccount)
                {
                    // return useraccount;
                    //call another method
                    return this.login({email,password})
                }
                else{
                    return error
                }

            
        } catch (error) {
            throw error;
        }
    }
      async login({email,password})
      {
        try {
            const session=await this.account.createEmailPasswordSession(email,password)
            if(session)
                {
            return session
                }
                else{return null}
        } catch (error) {
            throw error
        }
      }
      async getCurrentUser()
      {
        try {
           const userAccount= await this.account.get()
           if(userAccount)
            {
                return userAccount
            }
            else{
                return null            }
        } catch (error) {
            // throw error

            console.log("Appwrite error:: ",error)
            
        }
      }
      async logout()
      {
        try {
             await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
      }

}
const authservice=new AuthService()
export default authservice;