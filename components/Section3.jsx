import Image from "next/image"
export default function Section3() {
    return (
        <>
            <section>
                <div className="wrapper">
                    <div className="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row">
                            <Image src={'/images/section3.svg'} height={1000} width={1000} alt='Image could not be loaded' />
                            <div>
                                <h1 className="text-5xl font-bold">From few to a fandom</h1>
                                <p className="py-6">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}