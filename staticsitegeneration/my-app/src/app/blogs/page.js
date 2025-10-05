import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <>
            <Navbar />
            <p><Link href={'blogs/1'}>Blog1</Link></p>

            <p><Link href={'blogs/2'}>Blog2</Link></p>

            <p><Link href={'blogs/3'}>Blog3</Link></p>

            <p><Link href={'blogs/4'}>Blog4</Link></p>

            <p><Link href={'blogs/5'}>Blog5</Link></p>
        </>
    )
}

export default page