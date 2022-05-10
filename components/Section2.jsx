import Image from "next/image"
export default function Section2() {
    return (
        <>
            <section>
                <div className="wrapper">
                    <div className="hero min-h-screen bg-base-100">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                            <Image src={'/images/section2.svg'} height={1000} width={1000} alt='Image could not be loaded' />
                            <div>
                                <h1 className="text-5xl font-bold">Where hanging out is easy</h1>
                                <p className="py-6">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}