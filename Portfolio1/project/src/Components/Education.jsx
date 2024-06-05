import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className=" mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <p className=" mb-2 text-sm text-neutral-400">2021 - 2023</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl lg:h-3/4"
        >
          <h6 className="mb-2 font-semibold">
            Masters of Computer Application -
            <span className="text-sm text-purple-200">
              {" "}
              Sister Nivedita University
            </span>
          </h6>
          <span className=" text-sm text-red-300">CGPA: 8.16</span>
        </motion.div>
      </div>
      <div className=" mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <p className=" mb-2 text-sm text-neutral-400">2018 - 2021</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl lg:h-3/4"
        >
          <h6 className="mb-2 font-semibold">
            Bachelor of Commerce -
            <span className="text-sm text-purple-200">
              {" "}
              University of Calcutta
            </span>
          </h6>
          <span className=" text-sm text-red-300">CGPA: 7.14</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
