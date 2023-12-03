import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

function Header() {
  const { setOpen, open } = useContext(MenuContext);

  return (
    <main className="col-span-1 md:col-span-6 ml-0 md:ml-[10px] ">
      <header className="w-full h-20 sticky top-0 bg-[#fff] px-5 mb-5 ">
        <div className="flex items-center justify-between h-full ">
          <div className="flex items-center justify-between w-1/4">
            <a className="hidden md:block cursor-pointer " href='/'>
              <img src="/src/assets/logo.svg" alt=""  />
            </a>
            <span
              className={` cursor-pointer -right-3 top-9 px-3 py-2 border-dark-purple bg-secondary hover:bg-primary
                    border-2 rounded-lg ${!open && 'rotate-180'}`}
              onClick={() => setOpen(!open)}
            >
              <img src="./hamburger.svg" alt="" />
            </span>
          </div>

          <div className="flex items-center justify-between   mx-3 py-3 px-2 rounded:lg  focus:outline-slate-500 hover:border-y-purple-400">
            <span className="cursor-pointer flex  px-3 py-1 border-dark-purple border-2 rounded-lg ">
              <img
                src="./search.svg"
                alt=""
                className="p-2"
              />
              <input
                className="rounded px-2 text-black outline-none shadow-stone-300 hidden md:block"
                placeholder="Search"
                type="text"
              />
              <span className="cursor-pointer  px-3 py-2 border-dark-purple bg-secondary hover:bg-primary border-2 rounded-lg hidden md:block effect">
                <img src="./filter.svg" alt="" />
              </span>
            </span>
          </div>
          <div className="flex items-center justify-between w:1/4 gap-3">
            <div className="flex gap-3">
              <span className="border py-2 px-3 rounded-md hover:bg-primary bg-secondary cursor-pointer hidden md:block">
                <img src="./radio.svg" alt="" />
              </span>
              <span className="border py-3 px-3 md:py-2 rounded-md cursor-pointer  hover:bg-primary bg-thinColor effect">
                <img src="./bell.svg" alt="" />
              </span>
              <span className="border py-2 px-3 rounded-md bg-secondary cursor-pointer hidden md:block ">
                <img src="./screen.svg" alt="" />
              </span>
            </div>
            <div className="flex items-center gap-2 border px-2 rounded-lg hover:bg-primary bg-thinColor">
              <span className="flex  py-2 px-3 cursor-pointer">
                <img
                  src="https://berrydashboard.io/assets/user-round-221f468f.svg"
                  alt=""
                />
                <img src="./fix.svg" alt="" />
              </span>
            </div>

            <div className="flex items-center text-2xl cursor-pointer">
              <span className="block md:hidden">
                <img src="./dot.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

export default Header;
