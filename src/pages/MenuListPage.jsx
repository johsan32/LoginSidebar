import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { MenuContext } from "../context/MenuContext";

const MenuListPage = () => {
  const {open} = useContext(MenuContext);
  return (
    <section className="w-full mx-auto overflow-x-hidden max-h-[85vh] h-screen flex">
      <div className={`absolute sm:relative transition-all duration-300  ${open ? "w-20 " : "w-1/2 sm:w-1/4"}`}>
        <Sidebar />
    
      </div>
      <div className={`  w-full transition-all duration-300 bg-secondary max-h-[85vh] overflow-y-auto  ${open ? "ml-10 sm:ml-0  " : "ml-0 "}`}>
        <div className="flex justify-center items-center h-full w-full mt-5">

        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt=""/>
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt=""/>
    </div>
</div>

        </div>
      </div>
    </section>
  )
}

export default MenuListPage