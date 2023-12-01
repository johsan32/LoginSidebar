import React from 'react'

const SecondList = () => {

    const {
        Menus,
        open,
        setOpen,
        showDropdown,
        setShowDropdown,
        showSubMenuDropDown,
        setShowSubMenuDropDown,
      } = useContext(MenuContext);
    
  return (
    <div>SecondList

{/* <ul
                className={`border-l-2 ml-[40px] ${
                  open ? " open-screen " : ""
                }`}
              >
                {catMenu.subMenus.map((subMenu, subIndex) => (
                  <li
                    key={subIndex}
                    className={`${
                      open ? "  border-l-2 ml-[40px] w-52 h-52 " : "pl-[1px] "
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
                        onClick={() => handleClickSubMenu(subMenu.subMenuTitle)}
                      >
                        <svg
                          class=""
                          width="8px"
                          height="8px"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="8"></circle>
                        </svg>

                        {subMenu.subMenuTitle}
                      </Link>

                      <span className="text-sm font-thin">
                        {subMenu?.subInfo}
                      </span>
                      {subMenu.subMenuList && (
                        <p className=" text-right">
                          {showSubMenuDropDown === subMenu.subMenuTitle ? (
                            <img src="./src/assets/up.svg" alt="" />
                          ) : (
                            <img src="./src/assets/down.svg" alt="" />
                          )}
                        </p>
                      )}
                    </div>
                    {subMenu?.subMenuList &&
                      showSubMenuDropDown === subMenu.subMenuTitle && (
                        <ul className=" border-l-2 ml-[40px]">
                          {subMenu?.subMenuList.map((tabList, tabIndex) => (
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
                                    <circle cx="12" cy="12" r="8"></circle>
                                  </svg>
                                </span>
                                <p className=" ">{tabList.tabMenu}</p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul> */}


    </div>
  )
}

export default SecondList