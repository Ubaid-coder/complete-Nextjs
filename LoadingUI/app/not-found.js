import Link from "next/link";


export default function notfound() {

  return (
     <>
     <h1>This page doesn't exist.</h1>
    <Link href={'/'}>Go to home page</Link>
     </>
  )
}
