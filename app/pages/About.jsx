// Constants
import { about } from "../lib/constants"

// Components
import Img from "../components/Image"
import Button from "../components/Button"

// Assets
import { IoCheckmarkCircleOutline } from "react-icons/io5"


const About = () => {
  return (
    <section className="text-center relative py-[40px] md:text-left" id="about">
      <div className="containerr lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[60px]">
        <div className="relative aspect-[1/0.9]">
          <Img className="max-w-max mx-auto w-full h-auto"
                src={about.bannerImage.url}
                width={509}
                height={459}
                alt={about.bannerImage.alt}/>
          
          <Img className="absolute top-0 left-[100px] w-[216px] h-auto" 
                style={{scale: '1', animation: 'scaleUp 1s linear infinite alternate'}}
                src={about.redShape.url}
                width={216}
                height={226}
                alt={about.redShape.alt}/>
        </div>
        <div>
          <h2 className="h2 mx-auto md:mx-0 md:text-[32px] lg:text-[42px] font-rubik max-w-[15ch] mt-[40px] mb-[10px] font-semibold leading-[1.6]">
            {about.title.text} <span className="text-n-orange">{about.title.highlight}</span>
          </h2>
          <p>{about.description}</p>
          <ul className="mt-[20px] mb-[30px]">
            {about.facilities.map((item, index) => (
              <li key={index} className="mb-[10px] flex justify-center items-center gap-[10px] md:justify-start">
                <IoCheckmarkCircleOutline className="bg-n-orange text-white text-[24px] rounded-[50%] m-0"/>
                <span className="font-rubik font-medium text-n-richblackfogra">{item}</span>
              </li>
            ))}
          </ul>

          <Button className="mx-auto lg:mx-0">
            {about.buttonText}
          </Button>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-[15px] bg-repeat bg-bottom"
        style={{backgroundImage: "url('/shape-grey.png')"}}
      />
    </section>
  )
}

export default About;