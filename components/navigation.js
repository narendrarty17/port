const navigation = () => {
    return (
        <div>
            <div className="hidden sm:flex justify-between rounded-[50px] bg-neutral-900 px-2 py-2 mx-8 my-4">
                <a className="text-white text-base font-bold tracking-tight bg-orange-400 px-5 py-3 rounded-[60px]">Home</a>
                <a className="text-white text-base tracking-tight px-5 py-3">About</a>
                <a className="text-white text-base tracking-tight px-5 py-3">Service</a>
                <div className="flex ">
                    <img
                        className="hidden sm:block"
                        loading="lazy"
                        src="/images/company_logo.svg"
                        alt="company logo"
                    />
                    &nbsp;
                    <img
                        className="hidden md:block"
                        loading="lazy"
                        src="/images/company_name.svg"
                        alt="company name"
                    />
                </div>
                <a className="text-white text-base tracking-tight px-5 py-3">Resume</a>
                <a className="text-white text-base tracking-tight px-5 py-3">Project</a>
                <a className="text-white text-base tracking-tight px-5 py-3">contact</a>
            </div>
            <div class="absolute top-0 right-0 p-5">
                <img
                    className="w-10 sm:hidden"
                    src="/images/menubar.svg"
                    alt="Menu Bar"
                />
            </div>

        </div>
    );
}

export default navigation;