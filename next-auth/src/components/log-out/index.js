'use client'

import { Button } from "../ui/button"
import { logoutUserAction } from "@/actions";



function Logout() {
    const handleLogout = async () => {
        await logoutUserAction();
    }

    return (
        <div>
            <Button onClick={handleLogout} >Logout</Button>
        </div>
    )
}

export default Logout