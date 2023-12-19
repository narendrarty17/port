const whyHire = () => {
    return (
        <div className="flex flex-col py-10 md:flex-row gap-10 md:gap-10 bg-gray-100 items-center justify-center">
            <div className="relative">
                <div
                    className="absolute bg-orange-400 h-2/3 w-full bottom-0 rounded-full"
                />
                <img
                    className="h-[450px] md:h-[470px] relative"
                    src="/images/developerStanding.png"
                />
            </div>
            <div className="flex flex-col items-center md:items-start gap-10 items-start">
                <div className="text-4xl font-semibold tracking-tighter">
                    <span className="text-slate-700">Why </span>
                    <span className="text-orange-400">Hire me</span>
                    <span className="text-slate-700">?</span>
                </div>
                <div className="pl-5 pr-5 md:pl-0 md:pr-0 md:w-[400px] italic text-gray-400 text-xl tracing-tight">
                    "I bring a proven track record of MERN stack expertise, a commitment to excellence, and a results-oriented mindset."
                </div>
                <div className="flex gap-20">
                    <div>
                        <div className="text-slate-800 text-3xl font-medium tracking-tight">
                            10+
                        </div>
                        <div className="text-gray-500 text-lg tracking-tight mt-2">
                            Project Completed
                        </div>
                    </div>
                    <div>
                        <div className="text-slate-800 text-3xl font-medium tracking-tight">
                            5+
                        </div>
                        <div className="text-gray-500 text-lg tracking-tight mt-2">
                            Satisfied Clients
                        </div>
                    </div>
                </div>
                <button className="px-3 py-2 rounded-lg text-neutral-900 text-2xl font-semibold tracking-tight justify-center border border-solid border-neutral-900">
                    Hire me
                </button>
            </div>
        </div>
    );
}

export default whyHire;