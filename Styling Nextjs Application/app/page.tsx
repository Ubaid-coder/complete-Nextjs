import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
    <h1 className="py-5">HelloWorld</h1>
    <Link href="/users" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Users</Link>
    <ProductCard/>
  </main>
  );
}
