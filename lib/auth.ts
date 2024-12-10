import { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

const checkUser = async (credentials: any) => {
  const { email, name, password } = credentials
    return { id: "user-id111", email, name,password }
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
    email: { label: "Email", type: "text ", placeholder: "jsmith@email.com" },
    name: { label: "Username", type: "text ", placeholder: "jsmith" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
    const user = await checkUser(credentials)
    if (user) {
      return user
    } else {
      return null
    }
  },
})
],
callbacks:{
    async session({ session, token }) {
     
      return session
    },
    
},

}
