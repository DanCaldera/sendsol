import React, {useEffect, useState, useRef} from "react";
import {Toaster} from "react-hot-toast";

// Components
import CompanyMainInfo from "@/components/profile/CompanyMainInfo";
import Navigation from "@/components/profile/Navigation";
import Introduction from "@/components/profile/screens/Introduction";
import Team from "@/components/profile/screens/Team";
import DeckAndVideo from "@/components/profile/screens/DeckAndVideo";
import Statistics from "@/components/profile/screens/Statistics";
import FAQ from "@/components/profile/screens/FAQ";
import Investors from "@/components/profile/screens/Investors";

const CompanyProfile = () => {
    const [navScreen, setNavScreen] = useState<string>("introduction")

    return (
        <>
        <Toaster/>
        <div>
            {/* Raise title */}
            <div className="bg-green-500 px-7 py-3">
                <h3 className="text-3xl text-white font-bold">raise</h3>
            </div>

            {/* content */}

            <div className="w-95p max-w-screen-2xl mx-auto my-8">
                <CompanyMainInfo
                    picture="https://c.tenor.com/0fXLNUQv3BwAAAAM/penguin-wave.gif"
                    name="Iron Will"
                    description="lorem ipsum lorem ipsum"
                    location="Chile"
                    contactEmail="tomas@mis.fans"
                    linkedinPage="https://linkedin.com/in/tomas-duclos"
                />

                <Navigation navScreen={navScreen} setNavScreen={setNavScreen} />

                <div className="mt-8">
                    <Introduction
                        id="introduction"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed justo dictum habitant viverra nullam. Sagittis semper vestibulum eget tristique etiam neque. Ut etiam aenean ornare sem. Tempus, elementum, vitae bibendum nascetur. Phasellus ut et faucibus mauris viverra neque hac. Viverra amet lobortis vestibulum, urna lectus."
                    />

                    <hr className="bg-gray-300 border-none h-hr mt-8 mb-7"/>

                    <Team
                        id="team"
                        description="Team"
                        team={[
                            { full_name: "Carl Jhonson", rank: "Fullstack developer", picture: "/cj.jpg" },
                            { full_name: "Carl Jhonson", rank: "Fullstack developer", picture: "/cj.jpg" },
                            { full_name: "Carl Jhonson", rank: "Fullstack developer", picture: "/cj.jpg" },
                            { full_name: "Carl Jhonson", rank: "Fullstack developer", picture: "/cj.jpg" }
                        ]}
                    />

                    <hr className="bg-gray-300 border-none h-hr mt-8 mb-7"/>


                    <DeckAndVideo id="deck_and_video" />
                    
                    <hr className="bg-gray-300 border-none h-hr mt-8 mb-7"/>

                    <Statistics id="statistics" />

                    <hr className="bg-gray-300 border-none h-hr mt-8 mb-7"/>

                    <FAQ id="faqs" />

                    <hr className="bg-gray-300 border-none h-hr mt-8 mb-7"/>

                    <Investors id="investors" />
                </div>
            </div>

            
        </div>
        </>
    )
}

export default CompanyProfile;