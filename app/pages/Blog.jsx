import { IoArrowForward, IoCalendarOutline, IoPersonOutline } from "react-icons/io5"
import Img from "../components/Image"
import { blog } from "../lib/constants"


const Blog = () => {
  return (
    <section id="blog" className="relative text-center bg-n-issabeline py-[60px] lg:py-[120px]">
      <div className="containerr">
        <p className="text-n-cinnabar font-rubik text-center font-medium text-[16px]">
          {blog.subTitle}
        </p>

        <h2 className="h2 text-[32px] mt-[10px] mb-[20px]">
          {blog.title.text} <span className="text-n-saffron">{blog.title.highlight}</span>
        </h2>

        <p className="max-w-[44ch] mx-auto mb-[30px]">
          {blog.description}
        </p>

        <ul className="grid gap-[15px] md:grid-cols-2 lg:grid-cols-3">

          {
            blog.posts.map((items,index) => (
              <li key={index}>
                <div className="bg-white text-left rounded-lg md:h-full overflow-hidden" style={{ boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)" }}>
                  <Img src={items.image}
                    className="aspect-[1/0.65] w-full h-auto object-cover"
                    width={600}
                    height={390}
                    alt={items.title} />
                  
                  <div className="p-[30px]">
                    <div className="flex flex-wrap justify-start items-center gap-x-[12px] gap-y-[20px] pointer-events-none">
                      <div className="flex items-center gap-[10px]">
                        <IoCalendarOutline className="text-[18px] text-n-darkOrange" size={18}/>
                        <p className="font-rubik text-n-richblackfogra text-[14px] font-semibold leading-[1] uppercase">{items.date}</p>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <IoPersonOutline className="text-[18px] text-n-darkOrange" size={18} style={{ strokeWidth: 10 }}/>
                        <p className="font-rubik text-n-richblackfogra text-[14px] font-semibold leading-[1] uppercase">{items.author}</p>
                      </div>
                    </div>
                    <h3 className="h3 text-[18px] mt-[20px] mb-[15px] lg:text-[22px]">
                      <a href="#" className="hover:underline cursor-pointer">{items.title}</a>
                    </h3>
                    <p className="mb-[20px]">{items.description}</p>

                    <a href="#" className="flex items-center gap-[5px] text-n-richblackfogra font-rubik uppercase font-semibold text-[12px] leading-[1] hover:gap-[10px] hover:text-n-darkOrange" style={{transition:'0.25s ease'}}>
                      <span>Read More</span>
                      <IoArrowForward size={18}/>
                    </a>
                  </div>
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

export default Blog