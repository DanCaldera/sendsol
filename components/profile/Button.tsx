import React from "react";

interface IButtonProps {
    className?: string;
    type?: "normal" | "link";
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    href?: string;
    icon: React.ComponentType<any>;
    text: string;
}

const Button = ({className = "", type = "normal", onClick, href, icon: Icon, text}: IButtonProps) => {
    if (type === "normal" && !onClick) throw new Error("Missing onClick props")
    else if (type === "link" && !href) throw new Error("Missing href props")

    const buttonClassName: string = "py-2 px-4 border rounded-lg flex items-center cursor-pointer select-none w-max"


    if (type === "link") {
        return (
            <a className={`${buttonClassName} ${className}`} href={href} target={href.startsWith("mailto:") ? "_self" : "_blank"}>
                <div className="mr-1">
                    <Icon className="h-5 w-5" />
                </div>

                <span>{text}</span>
            </a>
        )
    }

    return (
        <button className={`${buttonClassName} ${className}`} type="button" onClick={onClick}>
            <div className="mr-1">
                <Icon className="h-5 w-5" />
            </div>

            <span>{text}</span>
        </button>
    )
    
}

export default Button;