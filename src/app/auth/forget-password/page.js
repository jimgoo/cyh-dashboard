"use client"
import React from 'react'
import {useRouter} from "next/navigation";

const ForgetPassword = () => {
  const router=useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>ForgetPassword</div>
  )
}

export default ForgetPassword
