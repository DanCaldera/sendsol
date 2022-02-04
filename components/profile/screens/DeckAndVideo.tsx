import React from "react";

// Components
import SectionTitle from "./mini_components/SectionTitle";

interface IDeckAndVideoProps {
    id: string;
}

const DeckAndVideo = ({id}: IDeckAndVideoProps) => {
    return (
        <div id={id} className="min-w-full">
            <SectionTitle
                text="Deck"
            />
            <div className="w-full bg-red-400">
                <video className="w-full h-auto" src="/test.mp4" controls></video>
            </div>

            <SectionTitle
                text="Video"
            />

        </div>
    )
};

export default DeckAndVideo;