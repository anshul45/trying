import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"

export const authOptions={
    providers:[
        Google({
            clientId:"",
            clientSecret:""
        }),
        Github({
            clientId:"",
            clientSecret:""
        })
    ],
}

export default NextAuth(authOptions)