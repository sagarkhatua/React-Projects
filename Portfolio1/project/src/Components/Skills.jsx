import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className=" border-b border-neutral-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className=" border-b border-neutral-800 pb-24">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="skillCnt"
          >
            <i className="fa-brands fa-react text-6xl text-cyan-400"></i>
          </motion.div>

          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="skillCnt"
          >
            <i className="fa-brands fa-js text-6xl text-yellow-300"></i>
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="skillCnt"
          >
            <i className="fa-brands fa-java text-6xl    text-red-500"></i>
          </motion.div>

          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="skillCnt"
          >
            <i className="fa-brands fa-css3-alt text-6xl  text-blue-500"></i>
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="skillCnt"
          >
            <RiTailwindCssFill className=" text-6xl text-sky-400" />
          </motion.div>

          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="skillCnt"
          >
            <i className="fa-brands fa-github text-6xl text-slate-200"></i>
          </motion.div>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="skillCnt"
          >
            <SiMysql className=" text-6xl text-cyan-900" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="skillCnt"
          >
            <FaHtml5 className=" text-6xl text-orange-500" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
