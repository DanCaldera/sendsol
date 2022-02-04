import React from "react";

import SectionTitle from "./mini_components/SectionTitle";

interface IFAQProps {
    id: string;
}

const FAQ = ({id}: IFAQProps) => {
    return (
        <div id={id} className="min-w-full">

            <SectionTitle
                text="Frequently Asked Questions"
            />
            <h1>FAQ</h1>

        </div>
    )
};

export default FAQ;