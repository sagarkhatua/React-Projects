import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tutdj08", "template_446163u", form.current, {
        publicKey: "c-Gu72cyNG0OgAwua",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          alert("Email send Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Lets Work Together !
      </motion.h1>
      <div className="grid sm:grid-cols-2 border-b border-neutral-900 pb-6 ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <div className="mt-10">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3 pr-3">
              <li className="flex items-center">
                <div className=" bg-neutral-900 w-12 h-12 flex items-center justify-center rounded-full border-sky-100 border">
                  <i className="fa-solid fa-envelope text-2xl text-purple-600"></i>
                </div>
                <a className=" pl-3" href="mailto:sagarkhatua78@gmail.com">
                  <small className="block">Mail</small>
                  <strong>sagarkhatua78@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-extrabold">Phone</h2>
            <ul className="mt-3 mb-10   pr-3">
              <li className="flex items-center">
                <div className=" bg-neutral-900 w-12 h-12 flex items-center justify-center rounded-full border-sky-100 border">
                  <i className="fa-solid fa-phone text-2xl text-purple-600"></i>
                </div>
                <a className=" pl-3" href="tel:7686985091">
                  <small className="block">Call To </small>
                  <strong>+91-7686985091</strong>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.form
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="ml-auo space-y-4 pt-12"
          ref={form}
        >
          <input
            type="text"
            placeholder="Name"
            name="to_name"
            className="placeholdeCls"
          />
          <input
            type="email"
            placeholder="Email"
            name="from_name"
            className="placeholdeCls"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="placeholdeCls"
          />
          <textarea
            placeholder="Message"
            rows="6"
            name="message"
            className="w-full rounded-md px-4 bg-transparent border border-slate-200  text-sm pt-3 outline-[#007bff]"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-gradient-to-r from-pink-300 via-slate-600 to-purple-500 font-semibold rounded-md text-lg px-4 py-3  w-1/2 hover:bg-gradient-to-r hover:from-blue-300 hover:via-slate-300 hover:to-purple-200 hover:text-black duration-300
              "
              onClick={sendEmail}
            >
              Send
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
