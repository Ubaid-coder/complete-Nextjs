interface User {
  id:number,
  name:string
}

async function Users() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data:User[] = await res.json();
  console.log(data);
  return (
    <>
    <h1>Users</h1>
    <ul>
      {data.map(user => <li key={user.id}>
        <h2>{user.name}</h2>
        <p>ID: {user.id}</p>
      </li>)}
    </ul>
    </>
  )
}

export default Users