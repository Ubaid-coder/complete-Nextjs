'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function page() {
  const [loading, setloading] = useState(false);
  const [users, setusers] = useState([]);

  const fetchListOfUser = async () => {
    try {
      setloading(true);
      const api = await fetch(`https://dummyjson.com/users`);
      const result = await api.json();

      if (result?.users) {
        setusers(result.users);
        setloading(false);
      }
    } catch (err) {
      console.log(err);
      setusers([]);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchListOfUser();
  }, []);

  if (loading) return <h1>Loading users Data! wait</h1>
  return (
    <>
      <h1>Client side data fetching</h1>
      {
        users ? users.map((user) => {
          return (
            <div key={user.id}>
              <Link href={`/client-data-fetch/${user.id}`}>{user.firstName + '' + user.lastName}</Link>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
              <hr />
            </div>
          )
        }) : null
      }
    </>
  )
}
