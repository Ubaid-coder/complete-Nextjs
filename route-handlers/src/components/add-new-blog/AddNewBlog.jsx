'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function AddNewBlog({
    openchange,
    setOpenchange,
    loading,
    blogFormData,
    setBlogFormData,
    handleSaveBlogData,
    currentEdit,
    setCurrentEdit
}) {

    return (
        <>
            <div>
                <Button onClick={() => setOpenchange(true)} >Add New Blog</Button>
            </div>
            <Dialog open={openchange} onOpenChange={() => {
                setOpenchange(false)
                setCurrentEdit(null)
            }} >

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {
                                currentEdit? "Edit Blog" : "Add New Blog"
                            }
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        Add a new blog here.
                    </DialogDescription>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter blog title"
                                value={blogFormData.title}
                                onChange={(e) => setBlogFormData({
                                    ...blogFormData,
                                    title: e.target.value
                                })}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                name="description"
                                placeholder="Enter blog description"
                                value={blogFormData.description}
                                onChange={(e) => setBlogFormData({
                                    ...blogFormData,
                                    description: e.target.value
                                })}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSaveBlogData} type="button">
                            {
                                loading ? "Saving..." : "set changes"
                            }
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddNewBlog