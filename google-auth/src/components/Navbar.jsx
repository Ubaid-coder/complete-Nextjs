'use client'

import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"


function Navbar() {
    const { status } = useSession();
    return (
        <div className="p-4 flex justify-between items-center shadow-md">
            <Link
                className="font-bold text-lg text-blue-700"
                href={'/'}
            >
                MU-Coding
            </Link>
            {status === 'authenticated' ? (
                <button
                onClick={() => signOut()}
                 className="bg-slate-900 text-white px-6 py-2 rounded-lg">
                    Sign OUT
                </button>
            ) : (
                <button 
                onClick={() => signIn('google')}
                className="bg-slate-900 text-white px-6 py-2 rounded-lg">
                    Sign In
                </button>
            )}

        </div>
    )
}

export default Navbar