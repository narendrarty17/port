const circleStyle = {
    border: '2px dotted #000',
    borderRadius: '50%',
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    bottom: '-4px',
    left: '-4px'
};

const DottedCircle = () => <div style={circleStyle} />;

const workExperience = () => {
    return (
        <div className="flex flex-col items-center pb-10">
            <div className="text-4xl m-10 tracking-tighter whitespace-nowrap">
                <span className="text-slate-700">My </span>
                <span className="text-orange-400">Work Experience</span>
            </div>

            {/* For smaller screens */}
            <div className="flex flex-col md:hidden">
                <div className="flex flex-col gap-7 items-center">
                    <div className="flex flex-col gap-3 text-center tracking-tight">
                        <div>
                            <div className="text-slate-700 text-2xl font-semibold">
                                Cognizant, Mumbai
                            </div>
                            <div className="text-gray-400 text-lg tracking-tight">
                                Sep 2016 - July 2020
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                                UI/UX Designer
                            </div>
                            <div className="text-center text-gray-400 max-w-[250px] text-lg tracking-tight">
                                Loren ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis lacus nunc, posuere in justo
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mb-8 items-center">
                        <div className="w-10 h-10 bg-orange-500 rounded-full relative">
                            <DottedCircle />
                        </div>
                        <img src='/images/downArr.svg' className="h-6" />
                    </div>
                </div>
                <div className="flex flex-col gap-7 items-center">
                    <div className="flex flex-col gap-3 text-center tracking-tight">
                        <div>
                            <div className="text-slate-700 text-2xl font-semibold">
                                Sugar Pvt Limited, Mumbai
                            </div>
                            <div className="text-gray-400 text-lg tracking-tight">
                                August 2020 - March 2021
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                                Front-end Web Developer
                            </div>
                            <div className="text-center text-gray-400 max-w-[250px] text-lg tracking-tight">
                                Loren ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis lacus nunc, posuere in justo
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mb-8 items-center">
                        <div className="w-10 h-10 bg-orange-500 rounded-full relative">
                            <DottedCircle />
                        </div>
                        <img src='/images/downArr.svg' className="h-6" />
                    </div>
                </div>
                <div className="flex flex-col gap-7 items-center">
                    <div className="flex flex-col gap-3 text-center tracking-tight">
                        <div>
                            <div className="text-slate-700 text-2xl font-semibold">
                                Cinetstox, Mumbai
                            </div>
                            <div className="text-gray-400 text-lg tracking-tight">
                                April 2021 - Till Now
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                                Full Stack Web Developer
                            </div>
                            <div className="text-center text-gray-400 max-w-[250px] text-lg tracking-tight">
                                Loren ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis lacus nunc, posuere in justo
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* for bigger screens */}
            <div className="hidden md:flex gap-20">
                <div className="flex flex-col justify-center gap-20">
                    <div>
                        <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                            Cognizant, Mumbai
                        </div>
                        <div className="text-gray-400 text-lg tracking-tight">
                            Sep 2016 - July 2020
                        </div>
                    </div>
                    <div>
                        <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                            Sugee Pvt limited, Delhi
                        </div>
                        <div className="text-gray-400 text-lg tracking-tight">
                            July 2020 - Sep 2021
                        </div>
                    </div>
                    <div>
                        <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                            Cinetstox, Pune
                        </div>
                        <div className="text-gray-400 text-lg tracking-tight">
                            Sep 2021 - July 2022
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-10">
                    <div className="w-10 h-10 bg-orange-500 rounded-full relative">
                        <DottedCircle />
                    </div>
                    <img src='/images/downArr.svg' className="h-5" />
                    <div className="w-10 h-10 bg-slate-800 rounded-full relative">
                        <DottedCircle />
                    </div>
                    <img src='/images/downArr.svg' className="h-5" />
                    <div className="w-10 h-10 bg-orange-500 rounded-full relative">
                        <DottedCircle />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-10">
                    <div>
                        <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                            UI/UX Designer
                        </div>
                        <div className="text-gray-400 text-lg tracking-tight">
                            <p>Loren ipsum dolor sit amet, consectetur</p>
                            <p>adipiscing elit. Duis lacus nunc, posuere in justo</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                            Front-end web developer
                        </div>
                        <div className="text-gray-400 text-lg tracking-tight">
                            <p>Loren ipsum dolor sit amet, consectetur</p>
                            <p>adipiscing elit. Duis lacus nunc, posuere in justo</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                            Full Stack web developer
                        </div>
                        <div className="text-gray-400 text-lg tracking-tight">
                            <p>Loren ipsum dolor sit amet, consectetur</p>
                            <p>adipiscing elit. Duis lacus nunc, posuere in justo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default workExperience;