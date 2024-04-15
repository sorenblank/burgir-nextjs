import Img from "../components/Image"
import { reviews } from "../lib/constants"
import { IoStar } from "react-icons/io5"

const Reviews = () => {
  return (
    <section id="menu" className="text-center bg-n-issabeline py-[60px] lg:py-[120px]">
      <div className="containerr">
        <p className="text-n-cinnabar font-rubik text-center font-medium text-[16px]">
          {reviews.subTitle}
        </p>

        <h2 className="h2 text-[32px] mt-[10px] mb-[20px]">
          {reviews.title.text} <span className="text-n-saffron">{reviews.title.highlight}</span>
        </h2>

        <p className="max-w-[44ch] mx-auto mb-[30px]">
          {reviews.description}
        </p>

        <ul className="flex gap-[10px] overflow-x-auto pb-[40px] scroll-snap-inline scrollbar">
          {reviews.reviews.map((item) => (
            <li className="list-none snap-start min-h-[200px] min-w-full sm:min-w-[calc(50%-5px)] lg:min-w-[calc(33.33%-6.66px)]">
              <div className="flex flex-col justify-between bg-white rounded-xl p-[40px] h-full text-left items-start gap-[15px]" style={{ boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)" }}>
                
                <div>
                  <div className="flex items-center gap-[15px] mb-[20px]">
                    <figure className="min-w-max rounded-[50%] overflow-hidden">
                      <Img src={item.avatar}
                        width={80}
                        height={80}
                        alt={item.name} />
                    </figure>
                    <div>
                      <h3 className="h4 text-[18px] font-semibold mb-[2px]">{item.name}</h3>
                      <p className="text-[14px] font-rubik">{item.title}</p>
                    </div>
                  </div>
                  <blockquote>
                    {item.review}
                  </blockquote>
                </div>
                
                <div className="flex justify-start items-center gap-[15px] mt-[20px] mb-[10px] md:justify-start">
                  <p className="font-rubik font-medium">Rating:</p>
                  <div className="flex gap-[5px] text-n-saffron text-[16px]">
                    {
                      Array.from({ length: item.rating }, (_, i) => (
                        <IoStar key={i} />
                      ))
                    }
                  </div>
                </div>
              </div>


            </li>
          )
          )}
        </ul>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[15px] bg-repeat bg-bottom"
        style={{ backgroundImage: "url('/shape-white.png')" }}
      />

    </section>

  )
}

export default Reviews;