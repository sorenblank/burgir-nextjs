import Img from "../components/Image";
import Button from "../components/Button";
import { banner } from "../lib/constants";

const Banner = () => {
  return (
    <section className="text-white relative py-[60px] lg:py-[120px]">
      <div className='containerr'>
        <ul className='grid gap-[10px] md:grid-cols-4'>
          <li className='md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 h-[430px]'>
            <div className='relative h-full overflow-hidden rounded-xl' style={{ boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)" }}>
              
              <Img  src={banner.banner1.bannerImg}
                    className="w-full h-full object-cover transform scale-[1] hover:scale-[1.05]"
                    style={{transition: '0.5s ease'}}
                    width={banner.banner1.bannerWidth}
                    height={banner.banner1.bannerHeight}
                    alt={banner.banner1.texts.text1}/>
              
              <div className="absolute top-[30%] transform translate-y-[-50px] left-[20px] right-[20px]">
                <p className="text-[22px] lg:text-[32px] mb-[10px] font-rubik font-semibold leading-[1.2] tracking-[-0.5px]">{banner.banner1.texts.text1}</p>
                <h3 className="text-[32px] lg:text-[36px] font-rubik font-semibold max-w[16ch]">{banner.banner1.texts.text2}</h3>
                <p className="text-[16px] font-rubik mt-[10px] mb-[15px]">{banner.banner1.texts.text3}</p>
                <Button orange={true}>{banner.banner1.buttonText}</Button>
              </div>
            </div>
          </li> 

          <li className="h-[200px]">
            <div className="relative h-full overflow-hidden rounded-xl" style={{ boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)" }}>
            <Img  src={banner.banner2.bannerImg}
                    className="w-full h-full object-cover transform scale-[1] hover:scale-[1.05]"
                    style={{transition: '0.5s ease'}}
                    width={banner.banner2.bannerWidth}
                    height={banner.banner2.bannerHeight}
                    alt={banner.banner2.texts.text1}/>
            
            <div className="absolute top-[50%] transform translate-y-[-50%] left-[20px] right-[20px] ">
              <h3 className="text-[22px] lg:text-[32px] max-w-[10ch] font-rubik font-semibold leading-[1.2] tracking-[-0.5px]">
                {banner.banner2.texts.text1}
              </h3>

              <p className="mt-[10px] mb-[15px]">{banner.banner2.texts.text2}</p>

              <Button orange={true}>{banner.banner2.buttonText}</Button>
            </div>
            </div>  
          </li>
          <li className="h-[200px]">
            <div className="relative h-full overflow-hidden rounded-xl" style={{ boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)" }}>
            <Img  src={banner.banner3.bannerImg}
                    className="w-full h-full object-cover transform scale-[1] hover:scale-[1.05]"
                    style={{transition: '0.5s ease'}}
                    width={banner.banner3.bannerWidth}
                    height={banner.banner3.bannerHeight}
                    alt={banner.banner3.texts.text1}/>
            
            <div className="absolute top-[50%] transform translate-y-[-50%] left-[20px] right-[20px] ">
              <h3 className="text-[22px] lg:text-[32px] max-w-[10ch] font-rubik font-semibold leading-[1.2] tracking-[-0.5px]">
                {banner.banner3.texts.text1}
              </h3>

              <p className="mt-[10px] mb-[15px]">{banner.banner3.texts.text2}</p>

              <Button orange={true}>{banner.banner3.buttonText}</Button>
            </div>
            </div>  
          </li>

          <li className="md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3 h-[220px] min-h-[calc(100%-30px)]">
            <div className="relative h-full overflow-hidden rounded-xl" style={{ boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)" }}>
            <Img  src={banner.banner4.bannerImg}
                    className="w-full h-full object-cover transform scale-[1] hover:scale-[1.05]"
                    style={{transition: '0.5s ease'}}
                    width={banner.banner4.bannerWidth}
                    height={banner.banner4.bannerHeight}
                    alt={banner.banner4.texts.text1}/>
            
            <div className="absolute top-[50%] transform translate-y-[-50%] left-[55%] right-[20px] ">
              <h3 className="text-[22px] lg:text-[32px] max-w-[10ch] font-rubik font-semibold leading-[1.2] tracking-[-0.5px]">
                {banner.banner4.texts.text1}
              </h3>

              <p className="mt-[10px] mb-[15px]">{banner.banner4.texts.text2}</p>

              <Button orange={true}>{banner.banner3.buttonText}</Button>
            </div>
            </div>
          </li>
        </ul>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[15px] bg-repeat bg-bottom"
        style={{backgroundImage: "url('/shape-grey.png')"}}/>
    </section>
  )
}

export default Banner;