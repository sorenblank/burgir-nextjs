import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { navigation } from '../lib/constants';

import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import Button from '../components/Button';
import Toggle from '../components/Ui/Toggle';

const Header = () => {
  // Hooks
  const router = useRouter();
  const [openNavigation, setOpenNavigation] = useState(false);

  /**
   * Toggles the navigation menu open/close
   * and disables/enables page scroll accordingly.
   */
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    !openNavigation ? disablePageScroll() : enablePageScroll();
  };

  /**
   * Handles click on navigation links
   * If navigation is open, closes it and enables page scroll
   */
  const handleClick = () => {
    if (!openNavigation) {
      return;
    }
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 py-[14px] bg-[#fef1df]`} style={{boxShadow: "0 2px 6px hsla(0, 0%, 0%, 0.1)"}}>
      <div className='containerr sm:mx-auto sm:w-full sm:max-w-[550px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px] flex justify-between items-center lg:gap-[20px]'>
        <h1 className='font-rubik text-[28px] font-bold -tracking-[2px] text-n-richblackfogra'>
          <a href='/' >Burgir <span className='inline-block text-n-saffron'>.</span></a>
        </h1>

        <nav className={`${openNavigation ? 'flex border-t' : 'hidden'} fixed top-[4.5rem] left-0 right-0 bottom-0 bg-white lg:bg-transparent lg:static lg:flex lg:ml-auto`}>

          <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:gap-[5px] '>
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-rubik text-2xl text-n-richblackfogra font-medium px-[10px] py-[15px] ${item.onlyMobile ? 'lg:hidden' : ''} lg:text-[15px]`}>
                {item.title}
              </a>
            ))}
          </div>

        </nav>

        <div className='flex flex-row gap-5 items-center'>

        <Button className="hidden sm:block" orange>
          Reservation
        </Button>
        
        <Toggle clicked={openNavigation} onClick={toggleNavigation} />
          
        </div>
      </div>
    </header>
  )
}

export default Header;