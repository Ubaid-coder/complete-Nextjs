import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="p-4 bg-gray-100">
            <ul className="list-none flex gap-4 m-0 p-0">
                <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
                <li><Link href="/about" className="text-blue-600 hover:underline">About</Link></li>
                <li><Link href="/blogs" className="text-blue-600 hover:underline">Blogs</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar