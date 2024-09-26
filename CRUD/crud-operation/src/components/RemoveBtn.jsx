'use client'

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi"

export default function RemoveBtn({id}) {
  const router = useRouter();
  const removeTopic = async() => {
    const confirmed = confirm("Are you sure you want to delete");

    if(confirmed) {
      await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method: "DELETE"
      })
      router.refresh();
    }
  }
  return (
    <button>
      <HiOutlineTrash onClick={removeTopic} className="text-red-600" size={24} />
    </button>
  )
}
