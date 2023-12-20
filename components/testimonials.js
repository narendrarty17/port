import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const reviews = [
    {
        "name": "Ankur Singh",
        "image": "/images/testimonials/ankur.jpg",
        "role": "Director, Param Environment",
        "review": "Outstanding work! Demonstrates a unique blend of technical expertise and creative finesse. Consistently delivers top-notch solutions with precision and attention to detail. A collaborative team player who goes the extra mile to ensure project success. Highly recommended for their dedication and exceptional results!",
        "rating": 5
    },
    {
        "name": "Neha Puri Malhotra",
        "image": "/images/testimonials/neha.jpg",
        "role": "Director, Dental Guardians",
        "review": "Remarkable contributor! Brings a creative approach and technical excellence to every project. Consistently delivers high-quality results with precision and attention to detail. A true team player, always going above and beyond to ensure project success. Exceptional work ethic and skill set, highly recommended!",
        "rating": 5
    },
    {
        "name": "Ali Asgar Fanaswalla",
        "image": "/images/testimonials/ali.jpg",
        "role": "Director, M.J. Enterprises",
        "review": "Outstanding work! Demonstrates a unique blend of technical expertise and creative finesse. Consistently delivers top-notch solutions with precision and attention to detail. A collaborative team player who goes the extra mile to ensure project success. Highly recommended for their dedication and exceptional results!",
        "rating": 5
    },
];

const RatingComponent = (rating) => {
    const starImage = <img className="w-7 h-7" src="/images/star.png" alt="rating" />;
    const starElements = [];

    for (let i = 0; i < rating; i++) {
        starElements.push(starImage);
    }

    return (
        <div className="flex">
            {starElements}
        </div>
    );
}

const clientReviews = reviews.map((review) => (
    <div className="flex flex-col gap-2 mr-4 bg-gray-600  text-white max-w-[500px] p-3 rounded-xl">
        <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={review.image}
                    />
                    <div className="flex flex-col gap-1">
                        <div className="text-xl font-medium">
                            {review.name}
                        </div>
                        <div className="text-sm text-gray-200">
                            {review.role}
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
        <p className="text-white overflow-hidden h-[300px] sm:h-[320px] md:h-[200px] ">
            {review.review}
        </p>
    </div>
));

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 2000 },
        items: 4,
        partialVisibilityGutter: 30
    },
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        partialVisibilityGutter: 30
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
            <Carousel responsive={responsive} swipable={true} removeArrowOnDeviceType={['tablet', 'mobile']} partialVisbile={true}>
                {clientReviews}
            </Carousel>
        </div >
    );
}

export default testimonials;