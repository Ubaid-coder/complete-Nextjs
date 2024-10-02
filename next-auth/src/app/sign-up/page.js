'use client'


import { Label } from "@/components/ui/label"
import { initialSignUpFormData, userRegistrationFormControls } from "../utils/formControls"
import CommonFormElement from "@/components/form-element"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { registerUserAction } from "@/actions"
import { useRouter } from "next/navigation"

export default function SignUP() {

    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData)
    const router = useRouter();

    const handleSignUP = async () => {
        const result = await registerUserAction(signUpFormData);
        console.log(result);
        if (result?.data) {
            router.push('/sign-in');
        }else{
            alert('User already registered!')
        }
    }

    const handleSignUpBtnValid = () => {
        const isValid = Object.values(signUpFormData).every(value => value.trim() !== '');
        return isValid;
    }
    return (
        <div>
            <h1>Registration</h1>
            <form action={handleSignUP}>
                {
                    userRegistrationFormControls.map(controlItem => <div key={controlItem.id}>
                        <Label>{controlItem.label}</Label>
                        <CommonFormElement
                            value={signUpFormData[controlItem.name] || ''}
                            currentItem={controlItem}
                            onChange={(e) => setSignUpFormData({
                                ...signUpFormData,
                                [e.target.name]: e.target.value
                            })} />
                    </div>)
                }
                <Button className="disabled:opacity-60 mt-5" disabled={!handleSignUpBtnValid()} type='submit' >Sign-UP</Button>
            </form>
        </div>
    )
}