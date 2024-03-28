import NavButton from "@/components/ui/navbutton";
import Image from "next/image";
import heroImg from "@/public/photos/hero-img.jpg";

const Hero = () => {
    return (
        <section className="section flex items-center" id="home">
            <div className="section-container items-center flex-col lg:flex-row">

                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h1 className="heading-1 text-center lg:text-left">BRUNCH with a twist</h1>
                    <p className="heading-2 w-100 text-center lg:text-left lg:w-80 leading-tight">
                        East and Southeast Asian cuisine-inspired classic brunch food with flavors we know (or don&apos;t know yet) and love.
                    </p>
                    <div className="flex gap-2 mb-10 lg:mb-0">
                        <NavButton name='Reserve a table' color='green' sectionLink="#reserve" />
                        <NavButton name='See Menu' color='white' sectionLink="#menu" />
                    </div>
                </div>

                <div className="mx-auto">
                    <Image src={heroImg} alt="by Brooke Lark on Unsplash" className="w-[39rem] h-[31rem] object-cover" />
                </div>

            </div>
        </section>
    )
}

export default Hero