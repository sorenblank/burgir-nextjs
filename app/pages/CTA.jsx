import Img from "../components/Image"
import Button from "../components/Button";
import { cta } from "../lib/constants";

const CTA = () => {
  return (
    <section className="relative bg-n-issabeline bg-no-repeat bg-cover bg-center text-center overflow-hidden md:text-left py-[60px] lg:py-[120px]" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div
        className="absolute top-0 bottom-auto scale-y-[-1] left-0 w-full h-[15px] bg-repeat bg-bottom"
        style={{ backgroundImage: "url('/shape-grey.png')" }}
      />

      <div className="containerr md:grid md:grid-cols-2 md:items-center md:gap-[30px]">
        <div>
          <h2 className="h2 font-rubik text-[32px] text-white leading-[1.5] tracking-[-2px] max-w-[17ch] mx-auto md:mx-0 lg:text-[42px]">
            {cta.title.text}{" "} <span className="text-n-yellow">{cta.title.highlight}</span>
          </h2>
          <p className="text-n-notgray text-[16px] mt-[25px] mb-[20px]">{cta.description}</p>
          <Button className="align-middle mx-auto md:mx-0">{cta.buttonText}</Button>
        </div>
      </div>
    </section>
  )
}

export default CTA;