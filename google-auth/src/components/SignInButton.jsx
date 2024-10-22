'use client'

import Image from "next/image"
import GoogleIcon from '../public/google-icon.png'
import { signIn } from "next-auth/react"


function SignInButton() {
  return (
    <button
    onClick={() => signIn("google")} 
    className="flex items-center g-4 shadow-xl rounded-lg pl-3">
      <Image
        src={GoogleIcon}
        alt="googleIcon"
        height={50}
        width={50}
      />

      <span className="bg-blue-500 text-white px-4 py-3">SignIn with Google</span>
    </button>
  )
}

export default SignInButton