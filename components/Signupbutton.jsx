"use client";

import React from "react";
import { AnimatePresence, color, motion } from "framer-motion";
import Link from "next/link";
const Signupbutton = ({ Name, Icon }) => {
  const buttonVariants = {
    rest: {},
    hover: {},
  };
  const arrowVariants = {
    rest: { x: 0 },
    hover: {
      x: 150,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  const textvarients = {
    rest: { x: 0 },
    hover: {
      x: -35,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      <Link href="signup">
        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={buttonVariants}
          className={`bg-Primary text-white rounded-full font-Manrope font-light border-[1px] hover:bg-black duration-500 ease-in-out   ${
            Icon ? "pr-6 flex gap-3 items-center " : " px-6 py-2"
          } border-black `}
        >
          <motion.div
            variants={arrowVariants}
            className={`
            ${Icon ? "px-4 py-3   rounded-full  bg-black inline-block   " : ""}
         `}
          >
            {Icon}
          </motion.div>
          <motion.div variants={Icon ? textvarients : ""} className={``}>
            {Name}
          </motion.div>
        </motion.button>
      </Link>
    </AnimatePresence>
  );
};

export default Signupbutton;
