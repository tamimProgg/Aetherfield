import Button from "./Button"
import bannerImage from '../assets/Hero image.png'

const Hero = () => {
  return (
    <div className="text-center py-20 px-4 container m-auto">
        {/* Hero Section Content */}
        <h1 className="text-4xl sm:text-7xl font-sourceSerif4 font-semibold">Sustaiability insights, <span className="block font-bold font-radioCanadaBig">built for business</span></h1>
        <p className="py-5 font-sourceSerif4 text-xl text-darkGray">Track impact, reduce emissions, and accelerate progress—with clarity and confidence.</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button className="text-lightGray">Request a demo</Button>
            <Button className="text-lightGray">Explore the platform</Button>
        </div>

        <div className="mt-16">
            <img src={bannerImage} alt="Hero Banner" className="w-full max-w-4xl mx-auto" />
        </div>
    </div>
  )
}
export default Hero