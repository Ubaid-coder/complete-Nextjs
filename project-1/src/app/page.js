import Link from "next/link";

export default function page() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <h1 className="text-6xl font-bold text-pink-400 p-5">Welcome to our websit.</h1>
      <p className="text-3xl font-bold m-10 text-green-500">Are you hungry!</p>
      <Link
        href={'/recipes'}
        className="bg-blue-600 py-5 px-10 mx-10 rounded-2xl text-white font-bold hover:shadow-2xl hover:shadow-blue-400 transition-all"
      >visit here</Link>
    </div>
  )
}