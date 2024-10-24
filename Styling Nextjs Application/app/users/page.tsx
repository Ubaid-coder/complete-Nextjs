interface User {
  id:number,
  name:string,
  email:string
}

async function Users() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:"no-store"});
  const data:User[] = await res.json();
 
  return (
    <>
    <h1>Users</h1>
    <table className="table-lg">
      <thead>
        <tr>
          <th>Name: </th>
          <th>Email: </th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>)}
      </tbody>
    </table>
    </>
  )
}

export default Users