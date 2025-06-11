import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center h-36">{`Because you're using fill on the <Image /> component, which makes it absolutely positioned inside a relatively positioned parent. But your parent <div> has no relative positioning set, so the image overflows.`}</div>
  );
};

export default Intro;
