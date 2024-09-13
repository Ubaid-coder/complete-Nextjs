'use client'

import { usePathname, useSearchParams } from "next/navigation"


export default function page() {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    console.log(searchParams.get('search'), searchParams.get('randomValue'));
    return (
        <>
            <h1>This is cart components</h1>
        </>
    )
}
