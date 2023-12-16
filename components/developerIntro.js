const DeveloperIntro = () => {
    return (
        <div>
            {/* For smaller screens */}
            <div className="md:hidden flex flex-wrap lg:flex-no-wrap gap-10 mb-10 justify-center items-center mt-10">
                <div
                    className="items-center md:w-auto mb-[-25px] md:mb-auto order-1 md:order-2 flex flex-col gap-4 mt-5"
                >
                    <img loading="lazy" src="/images/hello.svg" />
                    <div className="text-5xl tracking-tighter text-center relative z-10">
                        <p className="text-neutral-900">
                            I'm <span className="text-orange-400">Narendra,</span>
                        </p>
                        <p className="text-neutral-900">Full Stack Web Developer</p>
                    </div>
                    <div className="relative mt-[-55px]">
                        <div className="z-10 rounded-t-full absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[180px] w-[360px] sm:h-[225px] sm:w-[450px] md:h-[275px] md:w-[550px] bg-orange-400" />
                        <img
                            className="relative z-20 w-72 md:w-auto"
                            src="/images/developer.png"
                            alt="Developer Portrait"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:w-lg order-3 md:order-1 items-start">
                    <img
                        src="/images/quote-up.svg"
                    />
                    <div className="text-slate-700 text-lg md:text-xl font-medium tracking-tight">
                        <p>Narendra's Exceptional </p>
                        <p>coding skills ensure</p>
                        <p> our website's success.</p>
                        <p>Highly Recommended</p>
                    </div>
                </div>
                <div className="flex flex-col w-[150px] order-2 md:order-3 items-end justify-center">
                    <div className="flex">
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                    </div>
                    <div className="text-neutral-900 text-center text-4xl font-bold tracking-tighter mt-3">
                        10 Years
                    </div>
                    <div className="text-neutral-900 text-center text-xl tracking-tight whitespace-nowrap mt-1.5">
                        Experience
                    </div>
                </div>
            </div>

            {/* For bigger screens */}
            <div className="hidden md:flex flex-wrap lg:flex-no-wrap gap-10 mb-10 md:mb-0 justify-center items-center mt-10">
                <div className="flex flex-col md:w-lg order-3 md:order-1 items-start">
                    <img
                        src="/images/quote-up.svg"
                    />
                    <div className="text-slate-700 text-lg md:text-xl font-medium tracking-tight">
                        <p>Narendra's Exceptional </p>
                        <p>coding skills ensure</p>
                        <p> our website's success.</p>
                        <p>Highly Recommended</p>
                    </div>
                </div>
                <div
                    className="items-center md:w-auto mb-[-25px] md:mb-auto order-1 md:order-2 flex flex-col gap-4 mt-5"
                >
                    <img
                        loading="lazy"
                        src="/images/hello.svg"
                    />
                    <div className="text-5xl tracking-tighter text-center relative z-10">
                        <p className="text-neutral-900">
                            I'm <span className="text-orange-400">Narendra,</span>
                        </p>
                        <p className="text-neutral-900">Full Stack Web Developer</p>
                    </div>
                    <div className="relative mt-[-55px]">
                        <div className="z-10 rounded-t-full absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[180px] w-[360px] sm:h-[225px] sm:w-[450px] md:h-[275px] md:w-[550px] bg-orange-400" />
                        <img
                            className="relative z-20 w-72 md:w-auto"
                            src="/images/developer.png"
                            alt="Developer Portrait"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-[150px] order-2 md:order-3 items-end justify-center">
                    <div className="flex">
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                        <img src="/images/star.png" />
                    </div>
                    <div className="text-neutral-900 text-center text-4xl font-bold tracking-tighter mt-3">
                        10 Years
                    </div>
                    <div className="text-neutral-900 text-center text-xl tracking-tight whitespace-nowrap mt-1.5">
                        Experience
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeveloperIntro;