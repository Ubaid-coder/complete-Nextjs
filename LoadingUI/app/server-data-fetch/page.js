import Link from "next/link";

async function fetchingListOfUsers() {
    try {
        const apiRes = await fetch('https://dummyjson.com/users');
        const result = await apiRes.json();

        return (result.users);
    } catch (err) {
        console.log(err)
    }
}
export default async function page() {
    const listofUser = await fetchingListOfUsers()
    console.log(listofUser);
    return (
        <div>
            <h1>Server side data fetching</h1>
            <ul style={{ margin: '20px', listStyle: 'number' }}>
                {
                    listofUser && listofUser.length > 0 ?
                        listofUser.map((user) => {
                            return (
                                <li style={{ marginBottom: '20px', cursor: 'pointer' }} key={user.id}>
                                    <Link href={`/server-data-fetch/${user.id}`}>{user.firstName + '' + user.lastName}</Link>
                                </li>
                            )
                        })
                        : null
                }
            </ul>
        </div>
    )
}
