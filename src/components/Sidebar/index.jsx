import React, { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const {
    Menus,
    open,
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
          className={` max-h-[85vh] overflow-x-hidden overflow-y-auto bg-white ${
            !open ? " " : ""
          }`}
        >
          <div className={` ${open ? " " : ""}`}>
            {/* menü head alanı */}
            {Menus?.map((category) => (
              <div
                key={category.id}
                className={`flex-col  px-3 cursor-pointer  text-darkText text-sm items-center  ${
                  !open ? "border-b-2 gap-1 border-b-secondary " : "  "
                }`}
              >
                <p
                  className={` text-darkText font-bold text-menu cursor-default mt-3 mb-2 ${
                    open ? "hidden" : "" && category.disabled && "text-red-500"
                  }`}
                >
                  {category.name}
                  {/* menü alt bilgisi varsa ekrana bas */}
                  <span className="text-list text-bodyText font-thin flex">
                    {category?.info}
                  </span>
                </p>

                {category.icon && (
                  <img
                    src="/src/assets/sidebarbottom.png"
                    alt=""
                    className={` ${open ? "hidden " : "mb-5"}`}
                  />
                )}

                {/* kategorilere göre menüleri oluşturma */}
                {category.menu && (
                  <ul className={`   ${open ? "" : "relative"}`}>
                    {category.menu.map((catMenu, catIndex) => (
                      <li key={catIndex} className="">
                        <div
                          onClick={() => handleClickMenu(catMenu.title)}
                          className={`flex items-center relative mb-3  rounded-lg  hover:bg-primary hover:text-white  " ${
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
                              className={` flex items-center gap-5 rounded-lg py-2 "${
                                catMenu.disabled
                                  ? "text-gray-500 cursor-not-allowed bg-gray-300"
                                  : ""
                              }  ${
                                !open
                                  ? "justify-between "
                                  : " justify-between  "
                              }`}
                            >
                              <div className={`flex items-center gap-3 `}>
                                <img
                                  className={`w-6 h-6 sm:w-8 sm:h-8 self-center sm:p-1 p-0 ${
                                    open ? "ml-0" : "ml-3"
                                  }`}
                                  src={`./src/assets/${catMenu.icon}`}
                                  alt=""
                                />
                                <div></div>
                                <p
                                  className={` text-darkText  text-menu ${
                                    catMenu.disabled ? "" : ""
                                  }   ${open ? "hidden" : ""}`}
                                >
                                  {catMenu.title}{" "}
                                  {catMenu?.mark && (
                                    <span className="bg-primary text-white rounded-full text-info px-2">
                                      {catMenu?.mark} {catMenu?.marked}{" "}
                                    </span>
                                  )}
                                  <p className="text-info text-primary font-thin ">
                                    {catMenu?.info}
                                  </p>
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

                        {catMenu.subMenus && showDropdown === catMenu.title && (
                          <>
                            <ul
                              className={` ${
                                open
                                  ? "absolute top-12 left-20 rounded-lg  bg-white w-52 "
                                  : "left-20 top-0 sm:ml-10 ml-5 my-3 border-l-2"
                              }`}
                            >
                              {catMenu.subMenus.map((subMenu, subIndex) => (
                                <li
                                  key={subIndex}
                                  className={` pl-2 ${
                                    open ? "ml-[0px] mb-0" : "pl-[1px] mb-2"
                                  }`}
                                >
                                  <div className="  flex items-center justify-between rounded-lg cursor-pointer px-2 py-1 hover:bg-primary">
                                    <Link
                                      // to={`/${subMenu.subMenuTitle}`}
                                      // to={"https://berrydashboard.io/dashboard/default"}
                                      to="/dashboard"
                                      //target="_blank"
                                      className="w-full flex items-center justify-between gap-2 text-list"
                                      onClick={() =>
                                        handleClickSubMenu(subMenu.subMenuTitle)
                                      }
                                    >
                                      <p className="flex items-center gap-3">
                                        <svg
                                          className=""
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

                                      <span className="text-[8px] font-thin">
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
                                      <ul
                                        className={` ${
                                          open
                                            ? "absolute top-0 left-52 rounded-lg  bg-white w-44 "
                                            : "left-20 top-0 sm:ml-10 ml-5 my-3 border-l-2 "
                                        }`}
                                      >
                                        {subMenu?.subMenuList.map(
                                          (tabList, tabIndex) => (
                                            <li
                                              key={tabIndex}
                                              className=" py-0  items-center h-full w-full "
                                            >
                                              <Link
                                                //to={`/${tabList.tabMenu}`}
                                                to={
                                                  "https://berrydashboard.io/dashboard/default"
                                                }
                                                //to="/dashboard"
                                                target="_blank"
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
            <img
              src="/src/assets/sidebarbottom.png"
              alt="dd"
              className={`mb-5 ${open && "hidden"}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
