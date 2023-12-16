const fromMyBlogPost = () => {
    return (
        <div className="pt-10 pl-10 pr-10 gap-5 flex flex-col">
            <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between text-3xl">
                <div className="font-bold">
                    From my blog post
                </div>
                <button
                    className="w-[100px] bg-orange-400 font-bold text-white px-4 py-2 rounded-full text-xl">
                    See All
                </button>
            </div>
            <div className="flex gap-10 flex-wrap flex-col sm:flex-row items-center justify-center pb-10">
                <div className="flex flex-col gap-5">
                    <div className="relative">
                        <img
                            className="max-w-[320px]"
                            src="/images/blogImg01.png"
                        />
                        <div className="mt-[-80px] ml-[230px] justify-center bg-slate-800 flex w-[80px] h-[80px] p-5 rounded-full">
                            <img
                                loading="lazy"
                                src="/images/up-right-arrow-white.png"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <button className="max-w-[150px] font-medium h-12 font-base bg-gray-200 px-2 py-1 rounded-full">
                                UI/UX Design
                            </button>
                            <ul className="text-gray-700 flex gap-10 list-none ml-5">
                                <li className="relative before:bg-orange-400 before:block before:content-[''] before:h-2 before:w-2 before:absolute before:-left-4 before:rounded-full before:translate-y-2">
                                    Jayesh Patil
                                </li>
                                <li className="relative before:bg-orange-400 before:block before:content-[''] before:h-2 before:w-2 before:absolute before:-left-4 before:rounded-full before:translate-y-2">
                                    10 Nov, 2023
                                </li>
                            </ul>
                        </div>
                        <div className="text-gray-700 text-2xl overflow max-w-sm">
                            Design Unraveled: Behind the scenes
                            of UI/UX Magic
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="relative">
                        <img
                            className="max-w-[320px]"
                            src="/images/blogImg01.png"
                        />
                        <div className="mt-[-80px] ml-[230px] justify-center bg-slate-800 flex w-[80px] h-[80px] p-5 rounded-full">
                            <img
                                loading="lazy"
                                src="/images/up-right-arrow-white.png"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <button className="max-w-[150px] font-medium h-12 font-base bg-gray-200 px-2 py-1 rounded-full">
                                UI/UX Design
                            </button>
                            <ul className="text-gray-700 flex gap-10 list-none ml-5">
                                <li className="relative before:bg-orange-400 before:block before:content-[''] before:h-2 before:w-2 before:absolute before:-left-4 before:rounded-full before:translate-y-2">
                                    Jayesh Patil
                                </li>
                                <li className="relative before:bg-orange-400 before:block before:content-[''] before:h-2 before:w-2 before:absolute before:-left-4 before:rounded-full before:translate-y-2">
                                    10 Nov, 2023
                                </li>
                            </ul>
                        </div>
                        <div className="text-gray-700 text-2xl overflow max-w-sm">
                            Design Unraveled: Behind the scenes
                            of UI/UX Magic
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="relative">
                        <img
                            className="max-w-[320px]"
                            src="/images/blogImg01.png"
                        />
                        <div className="mt-[-80px] ml-[230px] justify-center bg-slate-800 flex w-[80px] h-[80px] p-5 rounded-full">
                            <img
                                loading="lazy"
                                src="/images/up-right-arrow-white.png"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <button className="max-w-[150px] font-medium h-12 font-base bg-gray-200 px-2 py-1 rounded-full">
                                UI/UX Design
                            </button>
                            <ul className="text-gray-700 flex gap-10 list-none ml-5">
                                <li className="relative before:bg-orange-400 before:block before:content-[''] before:h-2 before:w-2 before:absolute before:-left-4 before:rounded-full before:translate-y-2">
                                    Jayesh Patil
                                </li>
                                <li className="relative before:bg-orange-400 before:block before:content-[''] before:h-2 before:w-2 before:absolute before:-left-4 before:rounded-full before:translate-y-2">
                                    10 Nov, 2023
                                </li>
                            </ul>
                        </div>
                        <div className="text-gray-700 text-2xl overflow max-w-sm">
                            Design Unraveled: Behind the scenes
                            of UI/UX Magic
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default fromMyBlogPost;