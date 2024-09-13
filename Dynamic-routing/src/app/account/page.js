import { redirect } from "next/navigation";


export default function page() {
    const userProfileInfo = null;

    if(userProfileInfo == null) redirect('products?search=product1');
    return (
        <>
        <h1>Account Details</h1>
        </>
    )
}
