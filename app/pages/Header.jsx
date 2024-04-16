// Importing React hooks and router functionality
import { useState } from 'react';

// Importing functions to control page scroll behavior
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

// Importing navigation constants
import { navigation } from '../lib/constants';

// Importing UI components
import Toggle from '../components/Ui/Toggle';
import Button from '../components/Button';

/**
 * Header component that contains navigation and branding.
 */
const Header = () => {
  // Initializing router and state for navigation toggle
  const [openNavigation, setOpenNavigation] = useState(false);

  /**
   * Toggles the navigation menu visibility and page scroll.
   */
  const toggleNavigation = () => {
    const isNavigationOpen = !openNavigation;
    setOpenNavigation(isNavigationOpen);

    // Disabling page scroll when navigation is open
    if (isNavigationOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  };

  /**
   * Handles navigation link clicks.
   * Closes the navigation menu and enables page scroll if open.
   */
  const handleClick = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 py-[14px] bg-[#fef1df]" style={{ boxShadow: "0 2px 6px hsla(0, 0%, 0%, 0.1)" }}>
      <div className="containerr mx-auto flex justify-between items-center gap-[20px]">
        {/* Brand logo and name */}
        <h1 className="font-rubik text-[28px] font-bold tracking-[-2px] text-n-richblackfogra">
          <a href="/">Burgir<span className="inline-block text-n-saffron">.</span></a>
        </h1>

        {/* Navigation menu */}
        <nav className={`${openNavigation ? 'flex border-t' : 'hidden'} fixed top-[4.5rem] left-0 right-0 bottom-0 bg-white lg:bg-transparent lg:static lg:flex lg:ml-auto`}>
          <div className="relative z-20 flex flex-col items-center justify-center m-auto lg:flex-row lg:gap-[5px]">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-rubik text-2xl text-n-richblackfogra font-medium px-[10px] py-[15px] ${item.onlyMobile ? 'lg:hidden' : ''} lg:text-[15px] hover:text-n-darkOrange`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Action buttons */}
        <div className="flex flex-row gap-[5px] items-center">
          <Button className="hidden sm:block" orange>
            Reservation
          </Button>
          <Toggle clicked={openNavigation} onClick={toggleNavigation} />
        </div>
      </div>
    </header>
  );
};

export default Header;