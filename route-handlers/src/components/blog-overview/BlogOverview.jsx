'use client'


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useState } from "react"
import AddNewBlog from "../add-new-blog/AddNewBlog"
import { useRouter } from "next/navigation"
import { Label } from "@radix-ui/react-label"

const initialBlogFormData = {
  title: "",
  description: "",
}

function BlogOverview({ blogList }) {

  const [openchange, setOpenchange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [currentEdit, setCurrentEdit] = useState(null);
  
  const router = useRouter();

  const handleSaveBlogData = async () => {
    try {
      setLoading(true);

      const apiResponse = currentEdit !== null ? 
      await fetch(`http://localhost:3000/api/update-blog?id=${currentEdit}`,{
        method: 'PUT',
        body: JSON.stringify(blogFormData)
      })
      
     : await fetch('http://localhost:3000/api/add-blog', {
        method: 'POST',
        body: JSON.stringify(blogFormData),
      })
      const result = await apiResponse.json();
      if (result?.success) {
        router.refresh()
        setBlogFormData(initialBlogFormData);
        setOpenchange(false)
        setCurrentEdit(null);
        setLoading(false)
      }

    } catch (error) {
      console.log(error);
      setLoading(false)
      setBlogFormData(initialBlogFormData)
    }
  }

  const handleDelete = async (id) => {
     try {
      const apiResponse = await fetch(`http://localhost:3000/api/delete-blog?id=${id}`,{
        method: 'DELETE',
      })
      
      const result = await apiResponse.json();
      
      if (result?.success) {
        router.refresh()
        setOpenchange(false)
        setLoading(false)
        setBlogFormData(initialBlogFormData)
      }
      
     } catch (error) {
      console.log(error);
     }
  }

  const handleEdit = (blog) => {
    setCurrentEdit(blog?._id);
    setOpenchange(true)
    setBlogFormData({
      title: blog?.title,
      description: blog?.description,
    })
  }

  return (
    <>
      <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600">
        <AddNewBlog
          openchange={openchange}
          setOpenchange={setOpenchange}
          loading={loading}
          setLoading={setLoading}
          blogFormData={blogFormData}
          setBlogFormData={setBlogFormData}
          handleSaveBlogData={handleSaveBlogData}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-6 mt-5">
          {
            blogList && blogList.length > 0 ?
              blogList.map((blogItem) => {
                return (
                  <Card className="p-5" key={blogItem._id}>
                    <CardContent>
                      <CardTitle className="mb-5">{blogItem?.title}</CardTitle>
                      <CardDescription>{blogItem?.description}</CardDescription>
                      <div className="mt-5 flex gap-5 items-center">
                        <Button onClick={() => handleEdit(blogItem)}>Edit</Button>
                        <Button onClick={() => handleDelete(blogItem._id)} >Delete</Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              }) : <Label className="text-3xl font-bold ">No Blog Found! Please add one</Label>
          }
        </div>
      </div>
    </>
  )
}

export default BlogOverview