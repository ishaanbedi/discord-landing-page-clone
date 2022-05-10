import Navbar from "./Navbar";
import { HiDownload } from 'react-icons/hi';

function Hero() {
    return (
        <>
            <div className="section h-[76vh] lg:bg-[url('/images/bg.png')] lg:bg-cover bg-[#404eed]">
                <Navbar />
                <div className="hero ">
                    <div className="hero-content text-center">
                        <div className="mt-20">
                            <h1 className="text-6xl font-bold text-white">IMAGINE A PLACE...</h1>
                            <div className="lg:px-48 py-8 text-xl">
                                <p className="py-6 text-white">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often..</p>
                            </div>
                            <div className="cta-button space-x-8">
                                <a className="btn  rounded-full bg-white text-black hover:bg-white hover:text-[#404eed] hover:shadow-xl"><HiDownload /> <span className="ml-2"> Download For Mac</span></a>
                                <a className="btn rounded-full bg-black text-white hover:bg-gray-800 hover:shadow-xl">Open Discord in your browser</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero