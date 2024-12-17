import { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

const loginUser = async (credentials: any) => {
  const { email, password,name } = credentials
  if(email && password && name){
    const response = await fetch("http://127.0.0.1:8000/signupwithcredential",{method:"POST",body:JSON.stringify({email,password,"username":name,"provider":"credential"})})
    return await response.json()
  }
  else{
    const response =  await fetch("http://127.0.0.1:8000/loginwithcredential",{method:"POST",body:JSON.stringify({email,password})})
    return await response.json()
  }
}

const saveUser = async(credentials:any) => {
  const response =  await fetch("http://127.0.0.1:8000/login",{method:"POST",body:JSON.stringify(credentials)})
   return  await response.json()
}

export const authoptions:AuthOptions = {
providers:[
Google({
    clientId:(process.env.GOOGLE_CLIENT_ID || ""),
    clientSecret:(process.env.GOOGLE_CLIENT_SECRET || "")
}),
Github({
    clientId:(process.env.GITHUB_CLIENT_ID || ""),
    clientSecret:(process.env.GITHUB_CLIENT_SECRET || "")
}),
Credentials({
  credentials:{
    name: { label: "Name", type: "text ", placeholder: "jsmith123" },
    email: { label: "Email", type: "text ", placeholder: "jsmith@email.com" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
    const user = await loginUser(credentials)
    return {
      token:user.token,
      ...user.user
    }
  },
})
],
callbacks:{
    async jwt({token,user})
    {
      if(user)
      if(user.id && user.name && user.email){
        const userData  = await saveUser(user);
        token = {
          id: userData.user.id,
          email: userData.user.email,
          username: userData.user.username,
          token: userData.token,
        }
      }
      else{
        token = {
          id: user.id,
          email: user.email,
          username: user.username,
          token: user.token,
        }
      }
        
      return token
    },

    async session({ session,token }) {
      if(token)
      {
        session.user = {
         ...token
        };
      }
      return session
    },
    
},

}
