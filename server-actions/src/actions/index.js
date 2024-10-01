'use server'

import connectToDB from "@/database"
import user from "@/models/user";

// add new user action
export async function addNewUserAction(formData) {
    await connectToDB();

    try {
        //validate data using joi

        const newCreatedUser = await user.create(formData);
        if (newCreatedUser) {
            return {
                success: true,
                message: "User added successfully",
            }
        } else {
            return {
                success: false,
                message: "Error adding new user",
            }
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error adding new user",
        }
    }
}

//fetch users action
export async function fetchUsersAction() {
    await connectToDB();
    try {
        const listofUsers = await user.find({});
        if (listofUsers) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(listofUsers))
            }
        } else {
            return {
                success: false,
                message: "Error adding new user",
            }
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error adding new user",
        }
    }
}

//edit a user action
export async function editUserAction(currentUserId, formData) {
    await connectToDB();
    try {
        const { firstName, lastName, email, address } = formData;
        const updatedUser = await user.findOneAndUpdate(
            {
                _id: currentUserId
            },
            { firstName, lastName, email, address },
            { new: true }
        )
        if (updatedUser) {
            return {
                success: true,
                message: "User edited successfully",
            }
        } else {
            return {
                success: false,
                message: "Error editing user",
            }
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error editing user",
        }
    }

}

//delete a user action
export async function deleteUserAction(id) {
    await connectToDB();
    try {
        const deletedUser = await user.findByIdAndDelete(id);
        if (deletedUser) {
            return {
                success: true,
                message: "User deleted successfully",
            }
        } else {
            return {
                success: false,
                message: "Error deleting user",
            }
        }
    }
    catch (err) {
        console.log(err);
        return {
            success: false,
            message: "Error deleting user",
        }
    }
}