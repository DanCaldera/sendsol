import React from "react";

// Components
import SectionTitle from "./mini_components/SectionTitle";

interface IInvestorsProps {
    id: string;
}


const Investors = ({id}: IInvestorsProps) => {
    return (
        <div id={id} className="min-w-full">

            <SectionTitle
                text="Investors"
            />


        </div>

    )
}

export default Investors;