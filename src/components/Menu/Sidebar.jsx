import React, { useContext, useEffect, useRef } from "react";
import { MenuContext } from "../../context/MenuContext";
import { Link, NavLink } from "react-router-dom";

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
      <div ref={sidebarRef} className="self-start top-0  w-full">
        <div
          className={`relative sm:sticky max-h-screen overflow-x-hidden bg-white overflow-y-auto ${
            open ? "w-[100px] main-screen " : "open-screen"
          }`}
        >
          <div className={` ${!open ? "px-2 py-1 m-0" : "px-4 mb-5 pb-5"}`}>
            <div>
              {Menus?.map((category) => (
                <div
                  key={category.id}
                  className={`flex-col  p-2 cursor-pointer hover:bg-light-white text-darkText text-sm items-center  ${
                    !open ? "border-b-2 gap-1 " : " "
                  }`}
                >
                  <p
                    className={` text-darkText font-semibold text-xl cursor-default mb-2 ${
                      open ? "hidden" : ""
                    }`}
                  >
                    {category.name}
                    <span className="text-sm font-thin flex">
                      {category?.info}
                    </span>
                  </p>
                  {category.menu && (
                    <ul
                      className={` text-darkText text-lg align-start  ${
                        open ? "" : ""
                      }`}
                    >
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
                          {catMenu.subMenus &&
                            showDropdown === catMenu.title && (
                              <ul
                                className={`border-l-2 ml-[40px] ${
                                  open ? " open-screen " : ""
                                }`}
                              >
                                {catMenu.subMenus.map((subMenu, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className={`${
                                      open
                                        ? "  border-l-2 ml-[40px] w-52 h-52 "
                                        : "pl-[1px] "
                                    }`}
                                  >
                                    {open && (
                                      <div className="sm:absolute top-0 right-0 bg-red-500 p-4">
                                        {subMenu.subMenuTitle}
                                      </div>
                                    )}

                                    <div className="  flex items-center justify-between rounded-lg cursor-pointer px-2 py-1 hover:bg-primary">
                                      <Link
                                       // to={`/${subMenu.subMenuTitle}`}   
                                         to={"/"}

                                        className="w-full  flex items-center gap-2"
                                        onClick={() =>
                                          handleClickSubMenu(
                                            subMenu.subMenuTitle
                                          )
                                        }
                                      >
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
                                      </Link>

                                      <span className="text-sm font-thin">
                                        {subMenu?.subInfo}
                                      </span>
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
                                                  to={`/${tabList.tabMenu}`}
                                                  className="flex items-center rounded-lg cursor-pointer px-2 py-1 hover:bg-primary"
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
                                                  <p className=" ">
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
