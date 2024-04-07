import Button from "../components/Button"
import Img from "../components/Image"

const Hero = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-center pt-[145px] pb-[60px] text-center md:relative md:text-left md:overflow-hidden md:z-[1] lg:min-h-[660px] lg:grid lg:items-center xl:min-h-[770px]" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="container">
        <div className="md:mx-0">
          <p className="text-n-darkOrange font-shadows text-[1.8rem] tracking-[1px] mb-[25px] lg:text-[32px]">Eat Sleep And</p>
          <h2 className="h1 text-[32px] text-n-champagnepink max-w-[12ch] mx-auto sm:text-[42px] lg:text-[70px] lg:tracking-[-2.5px] md:mx-0">Supper delicious Burger in town!</h2>
          <p className="text-n-desertSand font-roboto text-[16px] mx-auto max-w-[44ch] mt-[15px] mb-[30px] lg:text-[18px] md:mx-0">Food is any substance consumed to provide nutritional support for an organism.</p>
          <Button className="mx-auto md:mx-0">Book A Table</Button>
        </div>

        <figure className="hidden md:block absolute top-[calc(50%+86px)] -translate-y-1/2 right-[50px] max-w-[40%] aspect-[1/0.9] lg:max-w-[45%] lg:top-auto lg:bottom-0 lg:translate-y-0">
          <Img
            className="w-full h-auto md:scale-[1.4] md:translate-x-[20px] md:translate-y-[-20px]"
            src={"hero-banner-bg.png"}
            width={820}
            height={716}
            alt="Burgir Bg" />
          <Img
            src={"hero-banner.png"}
            width={700}
            height={637}
            alt="Burgir"
            className="absolute bottom-0" />
        </figure>
      </div>

      <div className="hidden md:block absolute right-0 bottom-[-2px] w-full h-full bg-no-repeat bg-contain bg-right-bottom pointer-events-none z-[-1]" style={{ backgroundImage: "url('/hero-bg-shape.png')"}}></div>
    </section>
  )
}

export default Hero