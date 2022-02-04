import React from "react";

interface IIconDataProps {
    icon: React.ComponentType<any>;
    text: string;
}

const IconData = ({icon: Icon, text}: IIconDataProps) => {
    return (
        <div className="flex items-center mr-3">
            <div className="mr-1 mb-1">
                <Icon className="h-5 w-5 text-green-700" />
            </div>

            <span className="text-sm font-bold text-gray-500">{text}</span>
        </div>
    )
}

export default IconData;