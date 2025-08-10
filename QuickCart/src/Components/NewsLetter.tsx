const NewsLetter = () => {
    return (
        <div className="mt-10">
            <div className="flex flex-col items-center justify-center gap-2">
                <div>
                    <p className="md:text-4xl text-2xl font-medium">Subscribe now & get 20% off</p>
                    <p className="md:text-base text-gray-500/80 pb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="flex flex-row items-center">
                        <input className="py-4 border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500" type="email" placeholder="Enter your email id" required />
                        <button className="py-4 md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter;