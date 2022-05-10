import Image from "next/image"
import { HiDownload } from 'react-icons/hi';

function Section4() {
    return (
        <>
            <div className="section bg-base-100">
                <div className="hero ">
                    <div className="hero-content text-center">
                        <div className="">
                            <h1 className="text-4xl font-bold text-black">RELIABLE TECH FOR STAYING CLOSE</h1>
                            <div className="lg:px-48 py-2 text-xl">
                                <p className=" text-gray-800">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                            </div>
                            <div className="img-container my-0">
                                <Image src={'/images/section4.svg'} height={1000} width={1000} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta-button flex flex-col my-auto items-center">
                    <h1 className="font-bold text-4xl px-4">Ready to start your journey?</h1>
                    <a className="btn mt-8 mb-24  rounded-full bg-[#404eed] text-white hover:cursor-pointer  hover:bg-[#5d68e0] hover:shadow-xl"><HiDownload /> <span className="ml-2"> Download For Mac</span></a>
                </div>
            </div>
        </>
    )
}
export default Section4