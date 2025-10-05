import Navbar from "@/components/navbar"

export const dynamicParams = false; //normally 200 pages already build hain agar user 201 pa jata ha to new page ban jay ga par dynamicParams flase karna sa matlab 200 pages k alawa koi new page nahi banega

export const revalidate = 10; //is sa ye hoga k har 10 second ya page regenerate hoga
// Inshort specified time ka bad page regenerate hoga and this is called Incremental Static Regeneration (ISR)
// Same name function
export async function generateStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    console.log(data)

    return data.map(({ id }) => ({ blog: `${id}` }))


}

// Static site generation build time hota hai means it create files at build time only not on request time

//blog/200 tak already bana dega ssg

// blog/500 pa dynamic rendering hogi or phir
//ab blog/500 ki file bhi ban jayegi

async function page({ params }) {
    const { blog } = await params;
    console.log(blog)
    return (
        <>
            <Navbar />
            <h1 className="text-3xl font-bold">Blog Page: {params.blog}</h1>
            <h2>Data: {new Date().toLocaleString()}</h2>
        </>
    )
}

export default page