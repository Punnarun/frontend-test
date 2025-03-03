'use client'
import { useWindowListener } from "@/hooks/useWindowListener";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";

export default function PromoteCard() {

    const [playing, setPlaying] = useState(true);

    useWindowListener("contextmenu" , (e) => e.preventDefault());

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
            <VideoPlayer vdoSrc="vdo/getvaccine.mp4" isPlaying={playing} />
            <div className="m-5 text-black">
                <p className="mb-[95%]">Get your vaccine today.</p>
                <button className="block rounded-3xl bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={() => {setPlaying(!playing)}}>
                    {playing? "Pause" : "Play"}
                </button>
            </div>
        </div>
    );
}
