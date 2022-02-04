import React from "react";
import {toast} from "react-hot-toast";

// Components
import {LocationMarkerIcon, UsersIcon, BriefcaseIcon, CurrencyDollarIcon, LinkIcon, MailIcon, CalendarIcon} from "@heroicons/react/solid";
import {FaLinkedin} from "react-icons/fa";
import IconData from "./IconData";
import Button from "./Button";


interface ICompanyMainInfoProps {
    picture: string;
    name: string;
    description: string;
    location: string;
    linkedinPage: string;
    contactEmail: string;
}

const CompanyMainInfo = ({picture, name, description, location, linkedinPage, contactEmail}: ICompanyMainInfoProps) => {
    const handleOnClickShareThisLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Url copied successfully")
        }

        catch(e) {
            console.log(e);
            console.log("handleOnClickShareThisLink() Error");
        }

    }

    return (
        <div className="mb-4">
            <div className="h-20 w-20 mb-4">
                <img className="h-full w-full object-cover object-center rounded-full" src={picture} alt="picture"/>
            </div>

            <div className="mb-3">
                <h1 className="text-3xl text-gray-900 font-bold mb-1">{name}</h1>
                <h2 className="text-xl text-gray-500 font-medium">{description}</h2>
            </div>

            <div className="flex flex-wrap mb-4">
                <IconData
                    icon={LocationMarkerIcon}
                    text={location}
                />

                <IconData
                    icon={UsersIcon}
                    text="1-9 Employees"
                />

                <IconData
                    icon={BriefcaseIcon}
                    text="Industry"
                />

                <IconData
                    icon={CurrencyDollarIcon}
                    text="$100K - $150K"
                />
            </div>

            <div className="flex flex-wrap">
                <Button
                    className="mr-2 text-gray-700 border-gray-400 mb-1"
                    icon={LinkIcon}
                    text="Share this link"
                    onClick={handleOnClickShareThisLink}
                />

                <Button
                    className="mr-2 text-gray-700 border-gray-400 mb-1"
                    type="link"
                    icon={FaLinkedin}
                    href={linkedinPage}
                    text="Linkedin"
                />

                <Button
                    className="mr-2 text-white bg-green-700 border-transparent mb-1"
                    type="link"
                    icon={MailIcon}
                    href={`mailto:${contactEmail}`}
                    text="Contact"
                />

                <Button
                    className="text-white bg-green-700 border-transparent mb-1"
                    type="link"
                    icon={CalendarIcon}
                    href="https://www.youtube.com/watch?v=yappQQtfk8Q"
                    text="Book a meeting"
                />
            </div>
        </div>
    )
};

export default CompanyMainInfo;