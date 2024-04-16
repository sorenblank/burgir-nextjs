import Img from "../components/Image"
import { footer } from "../lib/constants"

const Footer = () => {
  return (
    <section>
        <div className='containerr relative py-6 flex flex-col gap-8 lg:flex-row lg:justify-between items-center align-middle'>
            <p className='font-rubik'>{footer.copyrightText}</p>
            <ul className='flex flex-wrap gap-5'>
                {
                    footer.socialLinks.map((link, index) => (
                        <a key={index} className="flex items-center w-10 h-10 rounded-full bg-[#e7e7e7] hover:bg-[#cccccc]" href={link.url}>
                            <Img src={link.icon} alt={link.name} width={16} height={16} className="mx-auto"/>
                        </a>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default Footer