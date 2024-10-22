'use client'

import Image from "next/image";
import SignInButton from "./SignInButton"
import { useSession } from "next-auth/react"

function UserInfo() {
  const {status, data: session} = useSession();
  
  if(status == 'authenticated') {
    return <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200">
    <Image 
    className="rounded-full"
    src={session?.user?.image}
    width={60}
    height={60}
    />
    <div>Name: <span className="font-bold">{session?.user?.name}</span></div>
    <div>E-mail: <span className="font-bold">{session?.user?.email}</span></div>
    </div>
  }else{

    return <SignInButton/>
  }
}

export default UserInfo