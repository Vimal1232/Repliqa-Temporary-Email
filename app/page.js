import React from "react";
import Navbar from "@/components/Navbar";
import MainHeader from "@/components/MainHeader";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className=" px-20 max-sm:px-5">
        <MainHeader />
      </div>
    </div>
  );
};

export default page;
