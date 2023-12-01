import React from "react";
import Sidebar from "../components/Sidebar";

const Content = () => {
  return (
    <section className={`w-full mx-auto overflow-x-hidden max-h-[85vh] h-screen flex ${open ? "relative" : "flex"}`}>
      <div className= {`w-20 sm:w-1/4 absolute sm:sticky   ${open ? "w-1/2" : "ml-0"}`}>
        <Sidebar />
      </div>
      <div className={` bg-slate-800 ml-[80px] sm:ml-0 ${open ? "w-full" : "w-3/4"}`}>
        <div className="flex  justify-center h-full w-full">
          <h1 className="text-white">Giriş Afgfglanı</h1>
        </div>
      </div>
    </section>
  );
};

export default Content;
