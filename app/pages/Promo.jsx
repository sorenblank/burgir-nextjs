// Constants
import { promo } from "../lib/constants"

// Components
import Img from "../components/Image"


const Promo = () => {
  return (
    <section className="bg-n-issabeline relative py-[40px]" id="meals">
      <div className="containerr">
      <h2 className="h2 flex justify-center py-[40px] underline underline-offset-[12px]">
        Our New&nbsp;<span className="text-n-orange">Meals!</span>
      </h2>
        <ul className="flex gap-[12px] overflow-x-auto pb-[40px] scroll-snap-inline scrollbar">
          {
            promo.map((item) => (
              <li key={item.id} className="overflow-hidden min-w-full w-full min-h-[350px] bg-white rounded-xl snap-start list-none sm:min-w-[calc(50%-5px)] lg:min-w-[calc(33.33%-6.66px)] xl:min-w-[calc(25%-7.5px)]" style={{boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)"}}>
                <div className="flex flex-col min-h-[450px] justify-between relative text-center px-[40px] py-[30px] z-[1]">
                  <div>
                    <h3 className="h3 my-[15px]" style={{transition:'0.25s ease'}}>
                      {item.cardTitle}
                    </h3>

                    <p className="mb-[15px]" style={{transition:'0.25s ease'}}>
                      {item.cardDescription}
                    </p>
                  </div>
                  <Img 
                    src={item.cardImage}
                    className="max-w-max w-full h-auto mx-auto aspect-square"
                    width={300}
                    height={300}
                    alt={item.cardTitle}
                  />
                  <div className="absolute inset-0 bg-n-darkOrange scale-y-[0.3] origin-bottom z-[-1]"
                      style={{clipPath:'polygon(0 40%, 100% 0%, 100% 100%, 0 100%) ',
                              transition:'0.25s ease',
                              content:''}}/>
                </div>
                
              </li>
            ))
          }
        </ul>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[15px] bg-repeat bg-bottom"
        style={{backgroundImage: "url('/shape-white.png')"}}
      />
    </section>
  )
}

export default Promo;