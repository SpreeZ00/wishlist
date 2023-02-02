"use client"

import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Wish } from "@/utils/services/wish.service";

export default function WishlistItem({ item }: { item: Wish }) {
    const router = useRouter();
    const handleDelete = async () => {
        await fetch(`/api/wish/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        router.refresh();
    }
    return (
            <div className="bg-violet-200 px-10 py-2 rounded-sm shadow-xl text-center relative" style={{background: item.user === "Lars" ? "#1e9dc8" : "#cb6dd5"}}>
                <AiOutlineDelete className={"absolute right-2 top-2 cursor-pointer hover:text-red-500"} onClick={handleDelete} />
                <h2>{ item.title }</h2>
                <p>{ item.description }</p>
                <a href={item.url} rel="noopener noreferrer" target={"_blank"}>{ item.url }</a>
            </div>
    )
}