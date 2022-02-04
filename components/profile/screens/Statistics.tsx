import React from "react";

// Components
import SectionTitle from "./mini_components/SectionTitle";

interface IStatisticsProps {
    id: string;
}

const Statistics = ({id}: IStatisticsProps) => {
    return (
        <div id={id} className="min-w-full">

            <SectionTitle
                text="Statistics"
            />
            <h1>Statistics</h1>

        </div>
    )
};

export default Statistics;