"use client"
import { useState } from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";

export default function PopupModal({ title, body, footer }: { title: string, body: React.ReactNode, footer: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleBackdropClick = () => {
        setIsOpen(false);
    }

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <>
            <button className={"bg-blue-500 rounded-sm mt-2 py-1 px-2 flex gap-2 hover:scale-105"} onClick={() => setIsOpen(!isOpen)}>
                <AiOutlinePlusCircle className={"text-2xl"} />{ title }
            </button>

            {isOpen && (
                <div className="w-full h-full bg-gray-800 bg-opacity-60 absolute top-0 left-0 fixed z-10" onClick={handleBackdropClick}>
                    <div className="w-1/2 text-center bg-gray-300 m-6 p-5 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" onClick={handleContentClick}>
                        <h2 className="text-2xl">{ title }</h2>
                        <div className="flex justify-center">
                            { body }
                        </div>
                        <div>
                            { footer }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}