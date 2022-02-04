import React from "react";

// Components
import SectionTitle from "./mini_components/SectionTitle";

interface IIntroductionProps {
    id: string;
    description: string;
}

const Introduction = ({id, description}: IIntroductionProps) => {
    return (
        <div id={id} className="min-w-full">

            <SectionTitle
                className="mb-4"
                text="Introduction"
            />

            <p className="text-gray-500 font-medium">{description}</p>

        </div>
    )
};

export default Introduction;