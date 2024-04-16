// Libraries
import { useEffect, useState, useRef } from 'react';

// Constants
import { delivery } from "../lib/constants"

// Components
import Img from "../components/Image"
import Button from "../components/Button"


const Delivery = () => {
  const [deliveryBoyMove, setDeliveryBoyMove] = useState(-80);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const deliveryBoy = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let deliveryBoyTopPos = deliveryBoy.current.getBoundingClientRect().top;

      if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
        let activeScrollPos = window.scrollY;

        if (lastScrollPos < activeScrollPos) {
          setDeliveryBoyMove(deliveryBoyMove + 1);
        } else {
          setDeliveryBoyMove(deliveryBoyMove - 1);
        }

        setLastScrollPos(activeScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [deliveryBoyMove, lastScrollPos]);

  return (
    <section id='delivery' className="relative overflow-hidden md:text-left py-[60px] lg:pt-[120px] lg:pb-[60px]">
      <div className="containerr md:grid md:grid-cols-2 md:items-center md:gap-[30px]">
        <div className='mb-[60px] lg:mb-0'>
          <h2 className="h2 font-rubik text-[32px] text-n-richblackfogra leading-[1.5] tracking-[-2px] max-w-[17ch] mx-auto md:mx-0 lg:text-[42px]">
            {delivery.title.text}{" "} <span className="text-n-yellow">{delivery.title.highlight}</span>
          </h2>
          <p className="text-[16px] mt-[25px] mb-[20px]">{delivery.description}</p>
          <Button>{delivery.buttonText}</Button>
        </div>
        <figure className="relative aspect-[1/0.9]" ref={deliveryBoy}>
          <Img
            src={delivery.bgImage}
            className="w-full h-auto"
            width={700}
            height={602}
            alt="Delivery Background"
            />
          
          <Img 
            src={delivery.bannerImage}
            className="absolute w-full h-auto top-0 left-0"
            style={{ transform: `translateX(${deliveryBoyMove}px)`, transition: '0.25s ease'}}
            width={1000}
            height={880}
            alt="Delivery Banner"
            />
        </figure>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[15px] bg-repeat bg-bottom"
        style={{ backgroundImage: "url('/shape-grey.png')" }}
      />
    </section>
  )
}

export default Delivery;