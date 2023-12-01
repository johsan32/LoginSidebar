import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { MenuContext } from "../context/MenuContext";


const Content = () => {
  const {open} = useContext(MenuContext);
  return (
    <section className={`relative flex  mx-auto overflow-x-hidden max-h-[85vh] h-screen w-full overflow-y-auto ${open ? "" : ""}`}>
      <div className={` absolute sm:sticky h-full ${open ? "w-[5%]" : "w-1/4"}`}>
        <Sidebar />
      </div>
      <div className={`relative bg-slate-800  w-full ${open ? "ml-[80px]" : "ml-2"}`}>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white">Giriş Alanı</h1>
        </div>
      </div>
    </section>
  );
};

export default Content;
