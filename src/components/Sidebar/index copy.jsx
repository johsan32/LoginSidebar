import React, { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { Link, NavLink } from "react-router-dom";
import FirstList from "./FirstList";

const Sidebar = () => {
  const {
    Menus,
    open,
    setOpen,
    showDropdown,
    setShowDropdown,
    showSubMenuDropDown,
    setShowSubMenuDropDown,
  } = useContext(MenuContext);

  const sidebarRef = useRef(null);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setShowDropdown("");
      setShowSubMenuDropDown("");
      //setOpen(!open);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <>
      <div ref={sidebarRef} className="self-start top-0 ">
        <div
          className={` max-h-screen overflow-x-hidden overflow-y-auto ${
            open ? "main-screen " : "open-screen"
          }`}
        >
          <div className={` ${!open ? " m-0" : ""}`}>
            <div>
              {/* menü head alanı */}
              {Menus?.map((category) => (
                <div
                  key={category.id}
                  className={`flex-col  px-3 cursor-pointer bg-white  text-darkText text-sm items-center  ${
                    !open ? "border-b-2 gap-1 " : "  "
                  }`}
                >
                  <p
                    className={` text-darkText font-semibold text-base md:text-lg sm:text-xl cursor-default mb-2 ${
                      open ? "hidden" : ""
                    }`}
                  >
                    {category.name}
                    {/* menü alt bilgisi varsa ekrana bas */}
                    <span className="text-sm sm:text-md text-bodyText font-thin flex">
                      {category?.info}
                    </span>
                  </p>
                  {/* kategorilere göre menüleri oluşturma */}
                  {category.menu && (
                    <ul className={` text-md text-lg  ${open ? "" : ""}`}>
                      {category.menu.map((catMenu, catIndex) => (
                        <li key={catIndex} className="">
                          <div
                            onClick={() => handleClickMenu(catMenu.title)}
                            className={`flex items-center  mb-3  rounded-lg  hover:bg-primary hover:text-white  " ${
                              open ? "justify-center  " : " justify-between"
                            }`}
                          >
                            <NavLink
                              to={
                                catMenu.path ? `/${catMenu.path}` : "/dashboard"
                              }
                              activeClassName="active"
                            >
                              <div
                                className={`flex items-center gap-5 rounded-lg py-2 active:bg-secondary "  ${
                                  !open ? "justify-between " : " justify-between  "
                                }`}
                              >
                                <div className="flex gap-5">
                                  <img
                                    className={`w-6 h-6 sm:w-8 sm:h-8 self-center sm:ml-3 ml-0 ${
                                      open ? "" : "ml-0"
                                    }`}
                                    src={`./src/assets/${catMenu.icon}`}
                                    alt=""
                                  />
                                  <p
                                    className={` text-darkText  text-menu  ${
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
                                  <p className=" text-right mr-4">
                                    {showDropdown == catMenu.title ? (
                                      <img src="./src/assets/up.svg" alt="" />
                                    ) : (
                                      <img src="./src/assets/down.svg" alt="" />
                                    )}
                                  </p>
                                )}
                              </div>
                            </NavLink>
                          </div>
                          {catMenu.subMenus &&
                            showDropdown === catMenu.title && (
                              <>
                                <ul
                                  className={`border-l-2 ml-[40px] my-3 ${
                                    open ? " open-screen " : ""
                                  }`}
                                >
                                  {catMenu.subMenus.map((subMenu, subIndex) => (
                                    <li
                                      key={subIndex}
                                      className={` mb-2 pl-2 ${
                                        open
                                          ? "  border-l-2 ml-[40px]  h-52 "
                                          : "pl-[1px] "
                                      }`}
                                    >
                                      {open && (
                                        <div className="sm:absolute text-list">
                                          {subMenu.subMenuTitle}
                                        </div>
                                      )}

                                      <div className="  flex items-center justify-between rounded-lg cursor-pointer px-2 py-1 hover:bg-primary">
                                        <Link
                                          // to={`/${subMenu.subMenuTitle}`}
                                          to={"/listChild"}
                                          className="w-full  flex items-center justify-between gap-2 text-list"
                                          onClick={() =>
                                            handleClickSubMenu(
                                              subMenu.subMenuTitle
                                            )
                                          }
                                        >
                                            <p className="flex items-center gap-3">
                                                <svg
                                            class=""
                                            width="8px"
                                            height="8px"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                          >
                                            <circle
                                              cx="12"
                                              cy="12"
                                              r="8"
                                            ></circle>
                                            
                                          </svg>

                                          {subMenu.subMenuTitle}    
                                            </p>
                                      
                                              <span className="text-sm font-thin">
                                          {subMenu?.subInfo}
                                        </span>
                                        </Link>

                                    
                                        {subMenu.subMenuList && (
                                          <p className=" text-right">
                                            {showSubMenuDropDown ===
                                            subMenu.subMenuTitle ? (
                                              <img
                                                src="./src/assets/up.svg"
                                                alt=""
                                              />
                                            ) : (
                                              <img
                                                src="./src/assets/down.svg"
                                                alt=""
                                              />
                                            )}
                                          </p>
                                        )}
                                      </div>
                                      {subMenu?.subMenuList &&
                                        showSubMenuDropDown ===
                                          subMenu.subMenuTitle && (
                                          <ul className=" border-l-2 ml-[40px]">
                                            {subMenu?.subMenuList.map(
                                              (tabList, tabIndex) => (
                                                <li
                                                  key={tabIndex}
                                                  className=" py-2  items-center h-full w-full "
                                                >
                                                  <Link
                                                    //to={`/${tabList.tabMenu}`}
                                                    to="/listchild"
                                                    className="flex items-center rounded-lg cursor-pointer px-2 py-1 hover:bg-primary text-list ml-3"
                                                  >
                                                    <span className="w-2 h-2 mr-2 hover:bg-secondary ">
                                                      <svg
                                                        width="8px"
                                                        height="8px"
                                                        class=""
                                                        focusable="false"
                                                        aria-hidden="true"
                                                        viewBox="0 0 24 24"
                                                        data-testid="FiberManualRecordIcon"
                                                      >
                                                        <circle
                                                          cx="12"
                                                          cy="12"
                                                          r="8"
                                                        ></circle>
                                                      </svg>
                                                    </span>
                                                    <p className="list-text">
                                                      {tabList.tabMenu}
                                                    </p>
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        )}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
