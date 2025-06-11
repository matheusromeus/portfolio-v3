import Image from "next/image";
import React from "react";

const Autograph = () => {
  return (
    <div className="relative flex flex-grow px-20 justify-center items-center">
      <Image
        src="/assets/kevz.svg"
        alt="Kevin Roy"
        width={1200}
        height={1200}
        className=""
      />
    </div>
  );
};

export default Autograph;
