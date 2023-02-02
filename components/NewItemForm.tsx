"use client"

import {useRouter} from "next/navigation";

export default function NewItemForm() {
    const router = useRouter();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await fetch('/api/wish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: e.target.title.value,
                description: e.target.description.value,
                url: e.target.url.value,
                user: e.target.user.value
            })
        })
        router.refresh();
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-2/3 gap-1 text-left bg-gray-300 px-5 py-2 rounded-sm">
            <label htmlFor="title">Titel:
                <input className="bg-gray-200 rounded-md drop-shadow-lg focus:border-blue-400 border-2 outline-0 float-right" type="text" id="title" name="title" required />
            </label>

            <label htmlFor="description">Beschreibung:
                <input className="bg-gray-200 rounded-md drop-shadow-lg focus:border-blue-400 border-2 outline-0 float-right" type="text" id="description" name="description" />
            </label>

            <label htmlFor="url">Link:
                <input className="bg-gray-200 rounded-md drop-shadow-lg focus:border-blue-400 border-2 outline-0 float-right" type="url" id="url" name="url" required />
            </label>

            <label htmlFor="lars">
                Lars:
                <input className="bg-gray-200 rounded-md drop-shadow-lg focus:border-blue-400 border-2 outline-0 float-right" type="radio" id="lars" name="user" value="Lars" />
            </label>

            <label htmlFor="nadine">
                Nadine:
                <input className="bg-gray-200 rounded-md drop-shadow-lg focus:border-blue-400 border-2 outline-0 float-right" type="radio" id="nadine" name="user" value="Nadine" />
            </label>

            <button className="bg-blue-500 rounded-sm mt-2 py-1 px-2" type="submit">Abschicken</button>
        </form>
    )
}