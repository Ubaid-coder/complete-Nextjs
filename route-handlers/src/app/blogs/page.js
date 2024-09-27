import BlogOverview from "@/components/blog-overview/BlogOverview";


const FetchListofBlog = async () => {
  try {
    const apiResponse = await fetch('http://localhost:3000/api/get-blog', {
      method: 'GET',
      cache: 'no-store'
    })

    const result = await apiResponse.json();

   return result?.data

  } catch (error) {
    console.log(error);
  }
}


export default async function Blogs() {
  const blogList = await FetchListofBlog();
  return (
    <BlogOverview blogList={blogList} />
  )
}