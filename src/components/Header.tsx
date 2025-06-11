import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-10">
      <h3>KEVIN ROY</h3>
      <nav>
        <ul className="flex items-center justify-between gap-4">
          <li>{`WORK`}</li>
          <li>{`ABOUT`}</li>
          <li>{`CONTACT`}</li>
        </ul>
      </nav>
      <div>©2025</div>
    </div>
  );
};

export default Header;
