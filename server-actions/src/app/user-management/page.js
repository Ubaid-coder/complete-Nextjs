import { fetchUsersAction } from '@/actions'
import AddNewUser from '@/components/add-new-user/AddNewUser'
import SingleUser from '@/components/single-user/SingleUser'

async function page() {

  const getListOfUsers = await fetchUsersAction();

  return (
    <div className='p-20  '>
      <div className='flex justify-between'>
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className=' mt-6 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10'>
        {
           getListOfUsers.data && getListOfUsers.data.length>0?
            getListOfUsers.data.map(user => <SingleUser user={user} />)
            : <h3>No users found</h3>
        }

      </div>
    </div>
  )
}

export default page