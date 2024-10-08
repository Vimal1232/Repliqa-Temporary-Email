import React from "react";
import Signupbutton from "./Signupbutton";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-20 max-sm:px-5">
      <div className=" flex  justify-between items-center py-4 ">
        <Link href="/">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className=" w-[48px]" />
            <div className=" font-Manrope font-semibold text-[24px]">
              Repliqa
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <div>
            <Signupbutton Name={"Signup"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
