import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi'


const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error("Failed to get topics")
        }

        return res.json();
    } catch (err) {
        console.log('Error loading topics: ');
    }
}

export default async function TopicsList() {
    const  {topics } = await getTopics()
    console.log(topics);
    return (
        <>
            {topics.length ? topics.map((t) => {
                return (
                    <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5  items-start">
                        <div>
                            <h2 className="font-bold text-2xl">{t.title}</h2>
                            <div>{t.description}</div>
                        </div>

                        <div className="flex gap-2 ">
                            <RemoveBtn id={t._id} />
                            <Link href={`editTopic/${t._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                        </div>
                    </div>
                )
            }) : <h1 className="text-3xl font-semibold ">No Topics are here</h1>}

        </>
    )
}
