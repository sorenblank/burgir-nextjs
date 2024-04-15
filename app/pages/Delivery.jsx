import { delivery } from "../lib/constants"
import Button from "../components/Button"
import Img from "../components/Image"

const Delivery = () => {
  return (
    <section className="relative overflow-hidden md:text-left py-[60px] lg:pt-[120px] lg:pb-[60px]">
        <div className="containerr md:grid md:grid-cols-2 md:items-center md:gap-[30px]">
        <div>
          <h2 className="h2 font-rubik text-[32px] text-n-richblackfogra leading-[1.5] tracking-[-2px] max-w-[17ch] mx-auto md:mx-0 lg:text-[42px]">
            {delivery.title.text}{" "} <span className="text-n-yellow">{delivery.title.highlight}</span>
          </h2>
          <p className="text-[16px] mt-[25px] mb-[20px]">{delivery.description}</p>
          <Button>{delivery.buttonText}</Button>
        </div>

      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[15px] bg-repeat bg-bottom"
        style={{ backgroundImage: "url('/shape-white.png')" }}
      />
    </section>
  )
}

export default Delivery