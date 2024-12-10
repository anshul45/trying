"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { getToken } from 'next-auth/jwt'

const Dashboard = () => {


 const session = useSession()
 console.log(session)
  return (
    <div>Hello {session.data?.user?.name}</div>
  )
}

export default Dashboard