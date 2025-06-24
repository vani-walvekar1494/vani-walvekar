import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

    const ShowcaseSection = () => {
        const sectionRef = useRef(null);
        const project1Ref = useRef(null);
        const project2Ref = useRef(null);
        const project3Ref = useRef(null);
        const project4Ref = useRef(null);
        const project5Ref = useRef(null);
        const project6Ref = useRef(null);

        useGSAP(() => {
            // Animation for the main section
            gsap.fromTo(
                sectionRef.current,
                {opacity: 0},
                {opacity: 1, duration: 1.5}
            );

            // Animations for each app showcase
            const cards = [
                project1Ref.current,
                project2Ref.current,
                project3Ref.current,
                project4Ref.current,
                project5Ref.current,
                project6Ref.current,
            ];

            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        y: 50,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.3 * (index + 1),
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom-=100",
                        },
                    }
                );
            });
        }, []);

        return (
            <div id="work" ref={sectionRef} className="app-showcase">
                <div className="w-full">
                    <div className="showcaselayout">
                        <div ref={project1Ref} className="first-project-wrapper">
                            <div className="image-wrapper">
                                <img src="/images/project1.jpg" alt="Homelessness Prevention"/>
                            </div>
                            <div className="text-content">
                                <h2>HOMELESSNESS_PREVENTION</h2>
                                <p className="text-white-50 md:text-xl">
                                    A predictive tool that identifies individuals at risk of homelessness and connects
                                    them to timely support and prevention resources.
                                </p>
                            </div>
                        </div>

                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={project2Ref}>
                                <div className="image-wrapper bg-[#FFEFDB]">
                                    <img src="/images/project2.png" alt="StockSavvy"/>
                                </div>
                                <h2>STOCKSAVVY</h2>
                            </div>

                            <div className="project" ref={project3Ref}>
                                <div className="image-wrapper bg-[#FFE7EB]">
                                    <img src="/images/project3.png" alt="Cognitive Health App"/>
                                </div>
                                <h2>COGNITIVE HEALTH APP</h2>
                            </div>
                        </div>
                    </div>

                    <div className="showcaselayout">
                        <div className="first-project-wrapper" ref={project4Ref}>
                            <div className="image-wrapper">
                                <img src="/images/project4.png" alt="Exoplanet Prediction Web App"/>
                            </div>
                            <div className="text-content">
                                <h2>EXOPLANET PREDICTION WEB APP</h2>
                                <p className="text-white-50 md:text-xl">
                                    A web-based machine learning tool that predicts exoplanet presence using NASA data,
                                    enabling interactive exploration and classification.
                                </p>
                            </div>
                        </div>

                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={project5Ref}>
                                <div className="image-wrapper bg-[#F0E6FF]">
                                    <img src="/images/project5.jpg" alt="Blind Hurdle Stick"/>
                                </div>
                                <h2>BLIND HURDLE STICK</h2>
                            </div>

                            <div className="project" ref={project6Ref}>
                                <div className="image-wrapper bg-[#FFF7CC]">
                                    <img src="/images/project6.jpg" alt="ESP32S3 LoRa MicroPython Application"/>
                                </div>
                                <h2>ESP32S3 LORA MICROPYTHON APPLICATION</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default ShowcaseSection;