// Constants
import { reservation } from "../lib/constants";

// Components
import Button from "../components/Button";


const Reservation = () => {
  return (
    <section className="text-white relative py-[60px] lg:pt-[120px] lg:pb-[60px] bg-contain bg-no-repeat bg-bottom border-b-2 border-solid border-n-independence"
            style={{backgroundImage: "url('/footer-illustration.png')"}}>
      <div className='containerr'>
        <div className='grid gap-[60px] md:grid-cols-2'>
          <form className="bg-white p-[30px] border border-solid border-n-cultured rounded-lg" style={{boxShadow : "0 1px 2px hsla(0, 0%, 0%, 0.2)"}}>
            <div className="flex flex-row gap-[5px]">
              <p className="relative min-w-max text-n-richblackfogra text-[22px] font-rubik font-semibold tracking-[-1px] mb-[20px]">
                {reservation.form.formTitle} 
                <span className="absolute top-[50%] transform trnaslate-y-[-50%] left-[calc(100%+15px)] bg-n-saffron w-[50px] h-[4px] border-r-[5px] border-solid border-n-saffron" style={{content:"", boxShadow: "inset -5px 0px 0px 0px var(--white)"}}/>
              </p>
            </div>
            
            <div className="grid gap-[10px] mb-[10px] md:grid-cols-2">
              <input type="text" placeholder="Name" className="p-[10px] text-[#9ca3af] border border-solid border-n-cultured rounded-md w-full h-[45px]" required/>
              <input type="email" placeholder="Email" className="p-[10px] text-[#9ca3af] bg-white border border-solid border-n-cultured rounded-md w-full h-[45px]" required/>
            </div>

            <div className="grid gap-[10px] mb-[10px] md:grid-cols-2">
              <select className="p-[10px] text-[#9ca3af] bg-white border border-solid border-n-cultured rounded-md w-full h-[45px]">
                <option value="Person" disabled selected>Person</option>
                <option value="2">2 Person</option>
                <option value="3">3 Person</option>
                <option value="4">4 Person</option>
                <option value="5">5 Person</option>
              </select>

              <input type="date" placeholder="mm/dd/yyyy" className="p-[10px] text-[#9ca3af] bg-white border border-solid border-n-cultured rounded-md w-full h-[45px]" required/>
            </div>

              <textarea placeholder="Message" className="p-[10px] text-[#9ca3af] border border-solid border-n-cultured rounded-md w-full min-h-[130px] resize-none" required/>

              <Button orange={true} className="mx-auto mt-[10px]">{reservation.form.buttonText}</Button>
          
          </form>

          <div className="grid grid-rows-2 gap-[20px]">

            {reservation.sections.map((section,index) => (
              <div key={index}>
                <div className="flex flex-row gap-[5px] mb-[10px]">
                    <p className="relative min-w-max text-n-richblackfogra text-[24px] font-rubik font-semibold tracking-[-1px] mb-[20px]">
                      {section.title}
                      <span className="absolute top-[50%] transform trnaslate-y-[-50%] left-[calc(100%+15px)] bg-n-saffron w-[50px] h-[4px] border-r-[5px] border-solid border-n-saffron" style={{content:"", boxShadow: "inset -5px 0px 0px 0px var(--white)"}}/>
                    </p>
                </div>
                <div>
                  {section.description.map((desc,index) => (
                    <p key={index} className="text-n-richblackfogra font-rubik">{desc.title}: <span className="text-n-darkOrange">{desc.info}</span></p>
                  ))}
                </div>
              </div>
            ))}

            {/* <div>
              <div className="flex flex-row gap-[5px] mb-[10px]">
                  <p className="relative min-w-max text-n-richblackfogra text-[24px] font-rubik font-semibold tracking-[-1px] mb-[20px]">
                    Opening Hours
                    <span className="absolute top-[50%] transform trnaslate-y-[-50%] left-[calc(100%+15px)] bg-n-saffron w-[50px] h-[4px] border-r-[5px] border-solid border-n-saffron" style={{content:"", boxShadow: "inset -5px 0px 0px 0px var(--white)"}}/>
                  </p>
              </div>
              <div>
                <p className="text-n-richblackfogra font-rubik">Monday-Friday: <span className="text-n-darkOrange">08:00-22:00</span></p>
                <p className="text-n-richblackfogra font-rubik">Only on Tuesday: <span className="text-n-darkOrange">04:00-01:00</span></p>
                <p className="text-n-richblackfogra font-rubik">Only on Saturday: <span className="text-n-darkOrange">10:00-16:00</span></p>
              </div>
            </div>

            <div>

              <div className="flex flex-row gap-[5px] mb-[10px]">
                    <p className="relative min-w-max text-n-richblackfogra text-[24px] font-rubik font-semibold tracking-[-1px] mb-[20px]">
                      Contact Info
                      <span className="absolute top-[50%] transform trnaslate-y-[-50%] left-[calc(100%+15px)] bg-n-saffron w-[50px] h-[4px] border-r-[5px] border-solid border-n-saffron" style={{content:"", boxShadow: "inset -5px 0px 0px 0px var(--white)"}}/>
                    </p>
              </div>
              <div>
                <p className="text-n-richblackfogra font-rubik">Phone: <span className="text-n-darkOrange">+1 (062) 109-9222</span></p>
                <p className="text-n-richblackfogra font-rubik">Email: <span className="text-n-darkOrange">info@burgir.com</span></p>
                <p className="text-n-richblackfogra font-rubik">Address: <span className="text-n-darkOrange">Ulitsa Drakonova 12, Novograd, Sokovia</span></p>
              </div>

            </div> */}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation;