import Image from "next/image"
export default function Section1() {
    return (
        <>
            <section>
                <div className="wrapper">
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <Image src={'/images/section1.svg'} height={1000} width={1000} alt='Image could not be loaded' />
                            <div>
                                <h1 className="text-5xl font-bold">Create an invite-only place where you belong</h1>
                                <p className="py-6">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}