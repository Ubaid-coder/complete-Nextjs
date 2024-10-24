interface User {
  id:number,
  name:string
}

async function Users() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:"no-store"});
  const data:User[] = await res.json();
  console.log(data);
  return (
    <>
    <h1>Users</h1>
    <p>{ new Date().toLocaleTimeString()}</p>
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