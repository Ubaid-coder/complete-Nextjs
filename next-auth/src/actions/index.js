'use server'

import connectToDb from "@/database"
import User from "@/models"
import bcryptjs from "bcryptjs"
import Jwt from "jsonwebtoken"
import { cookies } from "next/headers"


export async function registerUserAction(formData) {
    await connectToDb();
    try {

        const { userName, email, password } = formData;
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return {
                success: false,
                message: 'User already registered!'
            }
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newlyCreatedUser = new User({
            userName,
            email,
            password: hashedPassword
        })

        const savedUser = await newlyCreatedUser.save();

        if (savedUser) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(savedUser))
            }
        } else {
            return {
                success: false,
                message: "Failed to register the user"
            }
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Internal server error"
        }
    }
}

export async function loginUserAction(formData) {
    await connectToDb();
    try {
        const { email, password } = formData;

        //chek if user exists in DB
        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return {
                success: false,
                message: "User not found! || Please Sign In"
            }
        }

        //check password is valid?
        const checkPassword = await bcryptjs.compare(password, checkUser.password);
        if (!checkPassword) {
            return {
                success: false,
                message: "Password Incorrect!"
            }
        }

        const createdTokenData = {
            id: checkUser._id,
            userName: checkUser.userName,
            email: checkUser.email
        }

        const token = Jwt.sign(createdTokenData, "DEFAULT_KEY", {
            expiresIn: "1d"
        })

        const getCookies = cookies();
        getCookies.set('token', token);

        return {
            success: true,
            message: "User logged in successfully",
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Internal server error"
        }
    }
}

export async function fetchAuthUserAction() {
    await connectToDb();
    try {
        const getCookies = cookies();
        const token = getCookies.get('token')?.value || "";
        if (token == "") {
            return {
                success: false,
                message: "Token invalid"
            }
        }

        const decodedToken = Jwt.verify(token, 'DEFAULT_KEY');
        const getUserInfo = await User.findOne({ _id: decodedToken.id })
        if (getUserInfo) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(getUserInfo))
            }
        } else {
            return {
                success: false,
                message: "User not found"
            }
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Internal server error"
        }
    }
}

export async function logoutUserAction() {
    const getCookies = cookies();
    getCookies.set('token', "");
}