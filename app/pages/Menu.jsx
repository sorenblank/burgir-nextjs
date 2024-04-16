// Libraries
import { useState, useEffect } from 'react';

// Constants
import { menu } from "../lib/constants";

// Components
import Img from "../components/Image";

// Assets
import { IoStar } from "react-icons/io5"

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredMenu, setFilteredMenu] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (selectedCategory === 'All') {
        setFilteredMenu(menu.items);
    } else {
        setFilteredMenu(menu.items.filter(dish => dish.category === selectedCategory));
    }
    }, [selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      };

  return (
    <section id="menu" className="text-center bg-n-issabeline py-[60px] lg:py-[120px]">
      <div className="containerr">
        <p className="text-n-cinnabar font-rubik text-center font-medium text-[16px]">
          {menu.subTitle}
        </p>

        <h2 className="h2 text-[32px] mt-[10px] mb-[20px]">
          {menu.title.text} <span className="text-n-saffron">{menu.title.highlight}</span>
        </h2>

        <p className="max-w-[44ch] mx-auto mb-[30px]">
          {menu.description}
        </p>

        <ul className="flex flex-wrap justify-center gap-[10px] mb-[40px]">
          {
            menu.filterItems.map((item, index) => (
              <li key={index} className="list-none">
                <button className={`${selectedCategory === "All" && item === "All" ? "bg-n-saffron text-white" : (selectedCategory === item ? "bg-n-saffron text-white" : "bg-n-white text-n-richblackfogra")} font-rubik rounded-md font-medium px-[20px] py-[5px] border-[1px] border-solid border-n-cultured`}
                        onClick={() => handleCategoryChange(item)}>
                  {item}
                </button>
              </li>
            )
            )}
        </ul>

        <ul className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {filteredMenu.map((item, index) => (
            <li key={index} className="list-none">
              <div className="bg-n-white p-[40px] rounded-xl lg:h-full" style={{ boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)" }}>
                <div className="relative pt-[30px] max-w-max aspect-square mx-auto">
                  <Img
                    src={item.image}
                    className="w-full h-auto"
                    width={300}
                    height={300}
                    alt={item.dish} />
                    
                {item.discount && (
                  <div className="absolute top-0 left-0 bg-n-cinnabar text-white text-[12px] rounded-[6px] font-rubik font-semibold px-[15px] py-[2px]">
                    -{item.discount}
                  </div> 
                )}

                </div>
                <div className="flex justify-center items-center gap-[15px] mt-[20px] mb-[10px] md:justify-start">
                  <p className="font-rubik font-medium">Rating:</p>
                  <div className="flex gap-[5px] text-n-saffron text-[14px]">
                    {
                      Array.from({ length: item.rating }, (_, i) => (
                        <IoStar key={i} />
                      ))
                    }
                  </div>
                </div>

                <h3 className="h3 text-[22px] mb-[10px] font-semibold md:text-left">
                  {item.dish}
                </h3>

                <div className="flex justify-center gap-[5px] font-rubik font-semibold md:justify-start">
                  <p className="text-n-cinnabar uppercase">Price:</p>
                  <data className="text-n-saffron">{item.price}</data>
                  <del className="text-n-gray">{item.previousPrice}</del>
                </div>
              </div>
            </li>
          )
          )}
        </ul>
      </div>
    </section>
  )
}

export default Menu;