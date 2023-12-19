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

const workExp = [
    {
        "company": "Param Environment Pvt. Ltd.",
        "period": "Sep 2021 - March 2022",
        "role": " Frontend Developer",
        "finishedTasks": [
            "Collaborated with the team to create modern and responsive user interfaces using React.js and Next.js.",
            "Implemented user authentication and authorization systems for secure login and registration processes.",
            "Developed product listing pages with dynamic data fetching and rendering for an enhanced user experience."
        ]
    },
    {
        "company": "skyAI Technologies",
        "period": "April 2021 - Nov 2022",
        "role": "Full Stack Developer(MERN)",
        "finishedTasks": [
            "Led the development of client websites, employing MongoDB, Express.js, React.js, and Node.js.",
            "Achieved optimal performance by implementing efficient backend APIs and integrating them seamlessly with the frontend using React.",
            "Utilized Next.js for server-side rendering, improving website loading speed and SEO performance."
        ]
    },
    {
        "company": "Web Innovators Ltd",
        "period": "Dec 2022 - July 2023",
        "role": "Frontend Engineer",
        "finishedTasks": [
            "Engineered visually appealing and intuitive UIs for various web applications using React.js.",
            "Integrated RESTful APIs to facilitate data retrieval and storage, enhancing overall application functionality.",
            "Applied responsive design principles to ensure a consistent user experience across different devices."
        ]
    },
    {
        "company": "Digital Ventures",
        "period": "Aug 2023 - Nov 2023",
        "role": "MERN Stack Developer",
        "finishedTasks": [
            "Spearheaded the development of a client portal, implementing user dashboards and interactive features.",
            "Integrated third-party APIs for payment gateways and social media logins, ensuring a seamless user experience.",
            "Employed Next.js for server-side rendering, optimizing the application's performance and SEO."
        ]
    }
];

const forSmallScreen = workExp.map((work, index) => (
    <div className="flex flex-col gap-7 items-center">
        <div className="flex flex-col gap-3 text-center tracking-tight">
            <div>
                <div className="text-slate-700 text-2xl font-semibold">
                    {work.company}
                </div>
                <div className="text-gray-400 text-lg tracking-tight">
                    {work.period}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                    {work.role}
                </div>
                <div className="text-center text-gray-400 max-w-[250px] text-lg tracking-tight">
                    <ul className="list-disc mt-2 flex flex-col gap-2">
                        {work.finishedTasks.map((task) => (
                            <li>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {index < workExp.length - 1 && (
            <div className="flex flex-col gap-3 mb-8 items-center">
                <div className="w-10 h-10 bg-orange-500 rounded-full relative">
                    <DottedCircle />
                </div>
                <img src='/images/downArr.svg' className="h-6" />
            </div>
        )}
    </div>
));

const forBigScreen = workExp.map((work, index) => (
    <div className="flex gap-10 justify-center items-start">
        <div className="w-[350px] mr-6 pl-2">
            <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                {work.company}
            </div>
            <div className="text-gray-400 text-lg tracking-tight">
                {work.period}
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="w-10 h-10 bg-orange-500 rounded-full relative">
                <DottedCircle />
            </div>
            <img src='/images/downArr.svg' className="h-5" />
        </div>
        <div className="ml-8 pr-2">
            <div className="text-slate-700 text-2xl font-semibold tracking-tight">
                {work.role}
            </div>
            <div className="text-gray-400 text-lg tracking-tight">
                <ul className="w-[350px] ml-5 list-disc mt-2 flex flex-col gap-2">
                    {work.finishedTasks.map((task) => (
                        <li>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
));


const workExperience = () => {
    return (
        <div className="flex flex-col items-center pb-10">
            <div className="text-4xl m-10 tracking-tighter whitespace-nowrap">
                <span className="text-slate-700">My </span>
                <span className="text-orange-400">Work Experience</span>
            </div>

            {/* For smaller screens */}
            <div className="flex flex-col md:hidden">
                {forSmallScreen}
            </div>


            {/* for bigger screens */}
            <div className="hidden md:flex gap-20">
                <div className="flex flex-col justify-center gap-20">
                    {forBigScreen}
                </div>
            </div>
        </div>
    );
}

export default workExperience;