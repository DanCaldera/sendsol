import React from "react";

interface ITeamCardProps {
    picture: string;
    full_name: string;
    rank: string
}

const TeamCard = ({picture, full_name, rank}: ITeamCardProps) => {
    return (
        <div className="flex items-center border border-gray-400 py-4 px-6 rounded-lg">
            <div className="h-12 w-12 mr-2">
                <img className="w-full h-full object-cover object-center rounded-full" src={picture} alt={full_name}/>
            </div>

            <div>
                <h3 className="text-gray-900 font-bold">{full_name}</h3>
                <h4 className="text-gray-500">{rank}</h4>
            </div>
        </div>
    )
}

export default TeamCard;