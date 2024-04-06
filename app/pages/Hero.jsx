import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-center pt-[145px] pb-[60px] text-center md:relative md:text-left md:overflow-hidden md:z-[1] lg:min-h-[660px] lg:grid lg:items-center xl:min-h-[770px]" style={{backgroundImage: "url('/hero-bg.jpg')"}}>
        <div className="container">
            <div className="md:mx-0">
                <p className="text-n-darkOrange font-shadows text-[1.8rem] tracking-[1px] mb-[25px] lg:text-[32px]">Eat Sleep And</p>
                <h2 className="h1 text-[32px] text-n-champagnepink max-w-[12ch] mx-auto sm:text-[42px] lg:text-[70px] lg:tracking-[-2.5px] md:mx-0">Supper delicious Burger in town!</h2>
                <p className="text-n-desertSand text-[16px] mx-auto max-w-[44ch] mt-[15px] mb-[30px] lg:text-[18px] md:mx-0">Food is any substance consumed to provide nutritional support for an organism.</p>
                <Button className="mx-auto md:mx-0">Book A Table</Button>
            </div>
        </div>
    </section>
  )
}

export default Hero