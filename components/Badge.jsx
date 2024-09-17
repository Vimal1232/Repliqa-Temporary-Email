import React from "react";

const Badge = ({ ButtonName }) => {
  return (
    <div className="px-[20px] py-[8px] bg-Button rounded-full border-[1px] border-black text-[14px] font-Manrope font-light">
      {ButtonName}
    </div>
  );
};

export default Badge;
