'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
export default function notFound() {
    const pathName = usePathname();

    return (
        <>
            <h1 className="text-5xl text-center font-bold">Page Not Found</h1>
            <p className="py-10 text-3xl">Sorry,  the page:<span className="text-blue-700">{pathName}</span> you're looking for doesn't exist.</p>

            <Link
                href={'/'}
                className="bg-green-800 py-5 px-10 font-bold text-lg rounded-2xl hover:shadow-green-400 hover:shadow-xl hover:bg-green-600 transition-all"
            >Go to Home page</Link>
        </>
    )
}