import { fetchAuthUserAction } from "@/actions";
import Logout from "@/components/log-out";
import {redirect} from 'next/navigation'


export default async function Home() {

  const currentUser = await fetchAuthUserAction();

  if (!currentUser?.success) {
    return redirect("/sign-in");
  }
  return (
    <div>
      <h1>Next js authentication</h1>
      <h2>User Name: {currentUser?.data?.userName}</h2>
      <h2>User E-mail: {currentUser?.data?.email}</h2>
      <Logout />
    </div>
  );
}
