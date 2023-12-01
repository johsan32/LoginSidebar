import React from 'react'
import Sidebar from '../components/Sidebar'

const MenuListPage = () => {
  return (
    <section className="w-full mx-auto overflow-x-hidden max-h-[85vh] h-screen flex">
      <div className={`absolute sm:relative transition-all duration-300  ${open ? "w-20 " : "w-1/2 sm:w-1/4"}`}>
        <Sidebar />
    
      </div>
      <div className={`  w-full transition-all duration-300 bg-secondary   ${open ? "ml-10 sm:ml-0  " : "ml-0 "}`}>
        <div className="flex justify-center items-center h-full w-full">
          <h1 className="text-white">Child List page</h1>
        </div>
      </div>
    </section>
  )
}

export default MenuListPage