import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-10 text-sm">
      <h3 className="hover:text-gray-500 transition-all duration-300 cursor-pointer">
        KEVIN ROY
      </h3>
      <nav>
        <ul className="flex items-center justify-between gap-6">
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300">{`WORK`}</li>
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300">{`CONTACT`}</li>
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300">{`ABOUT`}</li>
        </ul>
      </nav>
      <div>©2025</div>
    </div>
  );
};

export default Header;
