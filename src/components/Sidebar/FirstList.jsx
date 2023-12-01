import React, { useContext, useEffect, useRef } from "react";
import { MenuContext } from "../../context/MenuContext";
import { Link, NavLink } from "react-router-dom";
import SecondList from "./SecondList";

const FirstList = () => {
    const {
        Menus,
        open,
        setOpen,
        showDropdown,
        setShowDropdown,
        showSubMenuDropDown,
        setShowSubMenuDropDown,
      } = useContext(MenuContext);
    


  const handleClickMenu = (menuTitle) => {
    console.log(menuTitle);
    setShowDropdown(menuTitle === showDropdown ? "" : menuTitle);
    //setOpen(true);
  };

  const handleClickSubMenu = (menuSubTitle) => {
    setShowSubMenuDropDown(
      menuSubTitle === showSubMenuDropDown ? "" : menuSubTitle
    );
  };

  return (
    <div>
      <ul className={` text-darkText text-lg align-start  ${open ? "" : ""}`}>
        {category.menu.map((catMenu, catIndex) => (
          <li key={catIndex} className="">
            <NavLink
              //to={`/${catMenu.title}`}
              to={"/"}
              activeClassName="active"
            >
              <div
                onClick={() => handleClickMenu(catMenu.title)}
                className={`flex items-center  mb-3  rounded-lg  hover:bg-primary active:bg-red-400" ${
                  open ? "justify-center  " : " justify-between"
                }`}
              >
                <div
                  className={`flex items-center gap-5 rounded-lg py-2  hover:bg-primary active:bg-red-400" ${
                    !open ? "" : "  "
                  }`}
                >
                  <img
                    className="w-8 h-8 self-center "
                    src={`./src/assets/${catMenu.icon}`}
                    alt=""
                  />
                  <p
                    className={` text-darkText text-lg align-start  ${
                      open ? "hidden" : ""
                    }`}
                  >
                    {catMenu.title}{" "}
                    <span className="bg-primary rounded-lg">
                      {" "}
                      {catMenu?.mark} {catMenu?.marked}{" "}
                    </span>
                    <span className="text-sm font-thin flex">
                      {catMenu?.info}
                    </span>
                  </p>
                </div>

                {!open && catMenu.subMenus && (
                  <p className=" text-right">
                    {showDropdown == catMenu.title ? (
                      <img src="./src/assets/up.svg" alt="" />
                    ) : (
                      <img src="./src/assets/down.svg" alt="" />
                    )}
                  </p>
                )}
              </div>
            </NavLink>
            {catMenu.subMenus && showDropdown === catMenu.title && (
<SecondList/>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstList;
