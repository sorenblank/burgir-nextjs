// Constants
import { cta } from "../lib/constants";

// Components
import Img from "../components/Image"
import Button from "../components/Button";


const CTA = () => {
  return (
    <section className="relative bg-n-issabeline bg-no-repeat bg-cover bg-center text-center overflow-hidden md:text-left py-[60px] lg:pt-[120px] lg:pb-[60px]" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
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

        <figure className="relative aspect-[1/0.9]">
          <Img  src= {cta.bannerImage} 
                className="w-full h-auto transform scale-[1.3] translate-y-[60px] md:translate-x-[90px] md:translate-y-[60px] lg:scale-[1.4] lg:translate-x-[20px] lg:trnaslate-y-[40px]"
                width={700}
                height={637}
                alt="CTA Banner"
            />

          <Img src= {cta.saleImage}
                className="absolute transform scale-[1] top-[50px] left-[10px] lg:left-[-50px]"
                width={216}
                height={216}
                alt="Sale Shape"
                style={{scale: '1', animation: 'scaleUp 1s linear infinite alternate'}}
            />
        </figure>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[15px] bg-repeat bg-bottom"
        style={{ backgroundImage: "url('/shape-white.png')" }}
      />
    </section>
  )
}

export default CTA;