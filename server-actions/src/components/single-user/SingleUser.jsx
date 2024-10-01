'use client'

import { deleteUserAction } from "@/actions"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { UserContext } from "@/context"
import { useRouter } from "next/navigation"
import { Router } from "next/router"
import { useContext } from "react"

function SingleUser({user}) {
    const {setOpenPopup, setAddNewUserFormData, setCurrentEditedId} = useContext(UserContext);
    const router = useRouter()

    const  handleDelete = async (userId) => {
        const result = await deleteUserAction(userId);
        if (result.success) {
           alert("User deleted successfully");
           router.refresh();
        }
    }

    const handleEdit = async (user) => {
        setOpenPopup(true);
        setAddNewUserFormData({
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            address: user?.address
        })
        setCurrentEditedId(user?._id);
        
    }
    
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
                    <CardDescription>{user?.email}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{user?.address}</p>
                </CardContent>
                <CardFooter className="flex justify-between" >
                    <Button onClick={() => handleEdit(user)}  className="bg-blue-500 hover:bg-blue-900">Edit</Button>
                    <Button onClick={() => handleDelete(user?._id)} className="bg-red-500 hover:bg-red-900">Delete</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SingleUser;