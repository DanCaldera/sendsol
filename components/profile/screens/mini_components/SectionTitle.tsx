import React from "react";

interface ISectionTitleProps {
    className?: string;
    text: string;
}

const SectionTitle = ({className, text}: ISectionTitleProps) => {
    return <h2 className={`text-green-700 font-bold text-xl ${className}`}>{text}</h2>
};

export default SectionTitle;