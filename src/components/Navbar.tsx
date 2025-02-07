import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import InfoTags from "./InfoTags";
import logo from "./logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className=" flex items-center justify-between bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-600 p-4">
      
      <img src={logo} alt="logo" className="logo rounded-lg max-w-16 max-h-16 object-contain shadow-md" />
      
      <div className="info-tags flex gap-4">
        <InfoTags number={3} description="New" color="bg-rose-500" />
        <InfoTags number={5} description="Process" color="bg-amber-400" />
        <InfoTags number={10} description="Ready" color="bg-green-600" />
        <InfoTags number={2} description="Served" color="bg-zinc-500" />
        <Bars3Icon className="w-8 h-8 rounded-lg text-slate-200 shadow-md hover:text-slate-400 active:text-slate-600 active:scale-95 active:shadow-inner transition-all duration-300 ease-in-out" />
        {/* <h1 className="text-white">Register 1</h1> */}
      </div>

    </nav>
  );
};

export default Navbar;
