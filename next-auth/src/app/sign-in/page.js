'use client'

import CommonFormElement from "@/components/form-element"
import { initialLoginFormData, userLoginFormControls } from "../utils/formControls"
import { useState } from "react"
import { Button } from "@/components/ui/button";
import { loginUserAction } from "@/actions";
import { useRouter } from "next/navigation";

export default function SignIn() {

    const [signInFormData, setSignInFormData] = useState(initialLoginFormData);
    const router = useRouter();

    const handleSignIn = async () => {
        const result = await loginUserAction(signInFormData);
        console.log(result);
        if (result?.success) {
            router.push('/')
        } else {
            alert('Account not found create account!');
            router.push('/sign-up');
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form action={handleSignIn}>
                {
                    userLoginFormControls.map(controlItem => <div key={controlItem.id}>
                        <label>{controlItem.label}</label>
                        <CommonFormElement
                            currentItem={controlItem}
                            value={setSignInFormData[controlItem.name]}
                            onChange={(e) => setSignInFormData({
                                ...signInFormData,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </div>)
                }
                <Button type="submit"
                    className="mt-5 ml-5"
                >Login
                </Button>
            </form>
        </div>
    )
}