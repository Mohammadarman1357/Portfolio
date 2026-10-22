import React, { useEffect, useState, useRef } from 'react';
import { FaUserAstronaut } from 'react-icons/fa6';

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2, // সেকশনটির ২০% স্ক্রিনে আসলেই অ্যানিমেশন ট্রিগার হবে
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id='about'
            ref={sectionRef}
            className={`p-5 md:p-10 mb-5 md:mb-10 transition-all duration-1000 ease-out transform ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
                }`}
        >

            <div className="relative">

                {/* OUTER RECTANGLE BORDER */}
                <div
                    className="
                        absolute
                        -inset-4
                        md:-inset-6
                        border
                        border-dashed
                        border-sky-300/50
                        pointer-events-none
                    "
                />

                {/* OUTER MOVING BLUE BEAM */}
                <div
                    className="
                        absolute
                        -inset-4
                        md:-inset-6
                        pointer-events-none
                        overflow-hidden
                    "
                >
                    <div
                        className="
                            absolute
                            top-0
                            left-0
                            h-[1px]
                            w-32
                            bg-gradient-to-r
                            from-transparent
                            via-sky-400
                            to-transparent
                            shadow-[0_0_10px_#38bdf8]
                            animate-[beamHorizontal_4s_linear_infinite]
                        "
                    />

                    <div
                        className="
                            absolute
                            bottom-0
                            right-0
                            h-[1px]
                            w-32
                            bg-gradient-to-r
                            from-transparent
                            via-sky-400
                            to-transparent
                            shadow-[0_0_10px_#38bdf8]
                            animate-[beamHorizontalReverse_4s_linear_infinite]
                        "
                    />

                    <div
                        className="
                            absolute
                            top-0
                            left-0
                            h-32
                            w-[1px]
                            bg-gradient-to-b
                            from-transparent
                            via-sky-400
                            to-transparent
                            shadow-[0_0_10px_#38bdf8]
                            animate-[beamVertical_4s_linear_infinite]
                        "
                    />

                    <div
                        className="
                            absolute
                            bottom-0
                            right-0
                            h-32
                            w-[1px]
                            bg-gradient-to-b
                            from-transparent
                            via-sky-400
                            to-transparent
                            shadow-[0_0_10px_#38bdf8]
                            animate-[beamVerticalReverse_4s_linear_infinite]
                        "
                    />
                </div>


                {/* INNER RECTANGLE */}
                <div
                    className="
                        relative
                        border
                        border-dashed
                        border-sky-400/60
                        bg-[#fff9df]
                        p-8
                        md:p-10
                        transition-all
                        duration-500
                        hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]
                    "
                >

                    {/* CONTENT */}

                    {/* Header */}
                    <div className="flex gap-2 items-start mb-5">

                        <FaUserAstronaut className="text-[#2e04c6] text-2xl md:text-4xl"></FaUserAstronaut>

                        <div
                            className="
                                font-bold
                                text-2xl
                                md:text-4xl
                                text-black
                                text-left
                            "
                        >
                            About Me
                        </div>

                    </div>


                    {/* Description */}
                    <p
                        className="
                            text-black
                            text-left
                            leading-relaxed
                        "
                    >
                        I'm a Computer Science student and aspiring Full Stack Developer with a
                        strong foundation in programming, web development, and software engineering.
                        Currently pursuing my BSc in CSE at Dhaka University of Engineering and
                        Technology, I work with technologies including React.js, JavaScript,
                        Node.js, Express.js, MongoDB, Firebase, and Tailwind CSS to build modern,
                        responsive, and scalable applications. I'm passionate about turning ideas
                        into real-world solutions and continuously exploring new technologies,
                        including Data Science and Machine Learning, to grow as a versatile software
                        engineer.
                    </p>

                </div>

            </div>


            {/* BEAM ANIMATIONS */}
            <style>
                {`
                    @keyframes beamHorizontal {
                        0% {
                            transform: translateX(-150%);
                        }
                        100% {
                            transform: translateX(800%);
                        }
                    }

                    @keyframes beamHorizontalReverse {
                        0% {
                            transform: translateX(150%);
                        }
                        100% {
                            transform: translateX(-800%);
                        }
                    }

                    @keyframes beamVertical {
                        0% {
                            transform: translateY(-150%);
                        }
                        100% {
                            transform: translateY(800%);
                        }
                    }

                    @keyframes beamVerticalReverse {
                        0% {
                            transform: translateY(150%);
                        }
                        100% {
                            transform: translateY(-800%);
                        }
                    }
                `}
            </style>

        </section>
    );
};

export default AboutMe;