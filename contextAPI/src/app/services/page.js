import React from 'react'

function page() {
    return (
        <>
            <div className='flex justify-center items-center mt-20'>
                <ul>
                    <li className='px-10 bg-red-500 cursor-pointer hover:scale-110 transition-all py-5 border m-5'>Web Development</li>
                    <li className='px-10 bg-red-500 cursor-pointer hover:scale-110 transition-all py-5 border m-5'>App Development</li>
                    <li className='px-10 bg-red-500 cursor-pointer hover:scale-110 transition-all py-5 border m-5'>Desktop Development</li>
                    <li className='px-10 bg-red-500 cursor-pointer hover:scale-110 transition-all py-5 border m-5'>Embeded System</li>
                </ul>
            </div>
        </>
    )
}

export default page