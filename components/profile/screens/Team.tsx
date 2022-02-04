import React from "react";

// Components
import SectionTitle from "./mini_components/SectionTitle";
import TeamCard from "./mini_components/TeamCard";

interface ITeam {
    picture: string;
    full_name: string;
    rank: string;
}

interface ITeamProps {
    id: string;
    description: string;
    team: ITeam[]
}

const Team = ({id, description, team}: ITeamProps) => {
    return (
        <div id={id} className="min-w-full">

            <SectionTitle
                className="mb-4"
                text="Team"
            />
            
            <p className="text-gray-500 font-medium mb-4">{description}</p>

            <div className="grid grid-cols-2 gap-4">
                {
                    team.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))
                }
            </div>
        </div>
    )
};

export default Team;