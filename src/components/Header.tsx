import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-8 text-sm">
      <Link
        href="/"
        className="hover:text-gray-500 transition-all duration-300 cursor-pointer font-bold"
      >
        KEVIN ROY
      </Link>
      {/* <nav>
        <ul className="flex items-center justify-between gap-6">
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300">{`WORK`}</li>
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300">{`CONTACT`}</li>
          <li className="cursor-pointer hover:text-gray-500 transition-all duration-300">{`ABOUT`}</li>
        </ul>
      </nav> */}
      <div>2025</div>
    </div>
  );
};

export default Header;
