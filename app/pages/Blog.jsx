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
    </div>
    </section>
  )
}

export default Blog