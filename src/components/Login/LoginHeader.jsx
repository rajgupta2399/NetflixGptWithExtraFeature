import React from "react";
import Netflix_Logo from "../../assets/NGPT LOGOS.png";

const LoginHeader = () => {
  return (
    <div className="absolute top-[-35px] left-0 px-12 py-0 z-10 sm:px-12">
      <img src={Netflix_Logo} alt="Netflix Logo" className=" w-48 h-56" />
    </div>
  );
};

export default LoginHeader;
