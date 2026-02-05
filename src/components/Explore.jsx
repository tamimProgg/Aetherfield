import exploreImage from '../assets/explore-image.png'
import Button from './Button';

const Explore = () => {

    const steps = [
  {
    title: "Track",
    description: "Emissions, energy, and waste across your value chain",
    number: "001",
  },
  {
    title: "Model",
    description: "Forecast performance and goal alignment",
    number: "002",
  },
  {
    title: "Report",
    description: "Generate ESG disclosures, automate frameworks",
    number: "003",
  },
  {
    title: "Act",
    description: "Surface insights and operational next steps",
    number: "004",
  },
];

  return (
    <div className="py-20  bg-white container m-auto">
        <h1 className="text-center font-radioCanadaBig text-3xl sm:text-5xl">Everything you need to measure,<span className="block leading-15">
         model, and act on sustainability</span></h1>

         <div className='flex flex-col lg:flex-row gap-3 py-12'>
            <div className='p-2 sm:p-0'>
                <img src= {exploreImage} alt="" />
            </div>

             <div className="max-w-3xl mx-auto">
      {steps.map((item, index) => (
        <div key={index} className="border-t border-gray-200 py-6">
          <div className="flex justify-between items-start">
            
            {/* Left content */}
            <div>
              <h3 className="font-semibold text-lg text-black">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1">
                {item.description}
              </p>
            </div>

            {/* Right number */}
            <span className="text-gray-400 text-sm font-mono">
              {item.number}
            </span>
          </div>
        </div>
      ))}
      <Button className='text-lightGray'>Explore features</Button>
    </div>
         </div>
    </div>
  )
}
export default Explore