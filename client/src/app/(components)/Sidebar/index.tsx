"use client";

import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      {/* Top Logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div className="">logo</div>
        <h1 className="font-extrabold text-2xl">ASTOCK</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-frow mt-8">{/* links here */}</div>

      {/* Footer */}
      <div className="">
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 develapar
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
