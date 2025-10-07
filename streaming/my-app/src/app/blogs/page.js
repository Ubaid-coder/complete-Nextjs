import { Comments } from '@/components/Comments'
import { Likes } from '@/components/Likes'
import Navbar from '@/components/navbar'
import { Views } from '@/components/Views'
import Link from 'next/link'
import React, { Suspense } from 'react'

function page() {
    return (
        <>
            <Navbar />
            <p><Link href={'blogs/1'}>Blog1</Link></p>

            <p><Link href={'blogs/2'}>Blog2</Link></p>

            <p><Link href={'blogs/3'}>Blog3</Link></p>

            <p><Link href={'blogs/4'}>Blog4</Link></p>

            <p><Link href={'blogs/5'}>Blog5</Link></p>

            <div>
                <Suspense fallback={<div className=''>Loading Likes...</div>}>
                    <Likes />
                    
                </Suspense>

                <Suspense fallback={<div>Loading Comments...</div>}>
                    <Comments />
                </Suspense>

                <Suspense fallback={<div>Loading Views...</div>}>
                    <Views />
                </Suspense>

            </div>
        </>
    )
}

export default page