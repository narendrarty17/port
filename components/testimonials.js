import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 2000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
};

const testimonials = () => {
    return (
        <div className="overflow-hidden p-10 flex flex-col gap-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-3xl">
            <div className="flex flex-col gap-3 items-center">
                <div className="text-3xl font-medium leading-10">
                    <p className="text-white">Testimonials That</p>
                    <p>
                        <span className="text-white">Speak to</span>
                        <span className="text-orange-400"> My Results</span>
                    </p>
                </div>
                <p className="max-w-[600px] justify-center text-gray-50 text-center text-lg tracking-tight">
                    "Discover excellence, creativity, and seamless collaboration in the testimonials below."
                </p>
            </div>
            <Carousel responsive={responsive}>
                <div className="flex flex-col gap-2 mr-4 bg-gray-600  text-white max-w-[500px] p-3 rounded-xl">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="/images/Narendra.jpg"
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="text-xl font-medium">
                                        Jayesh Patil
                                    </div>
                                    <div className="text-sm text-gray-200">
                                        Director, Swanetra
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                            </div>
                        </div>
                        <img
                            className="w-20"
                            src="/images/quote-down.svg"
                        />
                    </div>
                    <p className="text-white max-w-[480px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed lobortis orci elementum egestas
                        lobortis.
                    </p>
                </div>
                <div className="flex flex-col gap-2 mr-4 bg-gray-600  text-white max-w-[500px] p-3 rounded-xl">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="/images/Narendra.jpg"
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="text-xl font-medium">
                                        Jayesh Patil
                                    </div>
                                    <div className="text-sm text-gray-200">
                                        Director, Swanetra
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                            </div>
                        </div>
                        <img
                            className="w-20"
                            src="/images/quote-down.svg"
                        />
                    </div>
                    <p className="text-white max-w-[480px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed lobortis orci elementum egestas
                        lobortis.
                    </p>
                </div>
                <div className="flex flex-col gap-2 mr-4 bg-gray-600  text-white max-w-[500px] p-3 rounded-xl">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="/images/Narendra.jpg"
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="text-xl font-medium">
                                        Jayesh Patil
                                    </div>
                                    <div className="text-sm text-gray-200">
                                        Director, Swanetra
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                            </div>
                        </div>
                        <img
                            className="w-20"
                            src="/images/quote-down.svg"
                        />
                    </div>
                    <p className="text-white max-w-[480px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed lobortis orci elementum egestas
                        lobortis.
                    </p>
                </div>
                <div className="flex flex-col gap-2 mr-4 bg-gray-600  text-white max-w-[500px] p-3 rounded-xl">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="/images/Narendra.jpg"
                                />
                                <div className="flex flex-col gap-1">
                                    <div className="text-xl font-medium">
                                        Jayesh Patil
                                    </div>
                                    <div className="text-sm text-gray-200">
                                        Director, Swanetra
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                                <img className="w-7 h-7" src="/images/star.png" />
                            </div>
                        </div>
                        <img
                            className="w-20"
                            src="/images/quote-down.svg"
                        />
                    </div>
                    <p className="text-white max-w-[480px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed lobortis orci elementum egestas
                        lobortis.
                    </p>
                </div>
            </Carousel>
        </div>
    );
}

export default testimonials;