'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function page() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/products')
  }

  return (
    <>
      <h1>Welcome to Home Page</h1>
      <Link href={'products'}>Navigate to products</Link>
      <Link href={'about'}>Navigate to blog page</Link>

      <Link href={'account'} >Navigate to Accoutn page</Link>
      <h2 >Alternative way of navigating usign useRouter</h2>
      <button onClick={handleClick}>Router</button>

    </>
  );
}
