import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {techStackIcons} from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";

const TechStack = () => {
    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="My Preferred Tech Stack" sub="My Technical Toolbox"/>
                <div className="tech-grid">
                    {techStackIcons.map((icon)=>(
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg relative">
                            <div className="tech-card-animated-bg bg-gradient-to-t from-blue-600 to-purple-600"/>
                            <div className="tech-card-content relative z-10">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={{...icon, scale: icon.scale?.map(s => s * 0.6) || [0.6, 0.6, 0.6]}}/>
                                </div>
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack