import React from "react";
import Badge from "./Badge";
import Signupbutton from "./Signupbutton";
const MainHeader = () => {
  return (
    <div className=" flex justify-center items-center pt-20">
      <div className=" flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <Badge ButtonName="Digital Identity" />
        </div>
        <div className=" flex flex-col gap-5 justify-center items-center">
          <h1 className=" text-center text-[64px] font-bold font-Manrope leading-[1.2em]  ">
            Safeguard Your Identity in the Digital Age
          </h1>
          <p className=" text-[20px] font-normal text-center font-Manrope tracking-[-0.2px] leading-[1.2em]">
            "Take charge of your online presence with our intuitive and secure
            platform."
          </p>
        </div>
        <div className="flex items-center justify-center mt-5">
          <Signupbutton Name="Sign Up for Free" Icon={"->"} />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
