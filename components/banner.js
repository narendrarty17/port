const banner = () => {
    return (
        <div className="overflow-hidden mb-10 h-20 -rotate-3 text-xl bg-orange-400 flex items-center justify-center">
            <div className="flex items-center h-10 gap-12 bg-white w-full justify-center font-medium">
                <div>UX Design</div>
                <img className="h-8" src="/images/star4Sides.svg" />
                <div>App Design</div>
                <img className="h-8" src="/images/star4Sides.svg" />
                <div> Dashboard</div>
                <img className="h-8" src="/images/star4Sides.svg" />
                <div>Wireframe</div>
                <img className="h-8" src="/images/star4Sides.svg" />
                <div>User Research</div>
            </div>
        </div>
    );
}
export default banner;