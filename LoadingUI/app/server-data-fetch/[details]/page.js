
const fetchUserDetails = async (currUserId) => {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currUserId}`)
        const result = await apiResponse.json();

        return result;

    } catch (err) {
        throw new Error(err);
    }

}

export default async function page({ params }) {

    const userDetails = await fetchUserDetails(params.details)

    return (
        <>
            <h1>This is user detail page</h1>
            <p><b>UserName:</b> {userDetails?.firstName + ' ' + userDetails?.lastName}</p>
            <p><b>Age:</b> {userDetails?.age}</p>
            <p><b>Email:</b> {userDetails?.email}</p>
            <p><b>gender:</b> {userDetails?.gender}</p>
        </>
    )
}
