import React from "react";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-10 flex items-center justify-end py-6 ">
        {/* <div classNameName=" ">
          <Link>Home</Link>
          <Link>Skills</Link>
          <Link>Experience</Link>
          <Link>Peojects</Link>
          <Link>Education</Link>
          <Link>Contact</Link>
        </div> */}

        <div className=" flex  gap-8 text-4xl m-4 items-center justify-center">
          <button>
            <a href="https://github.com/sagarkhatua" className="">
              <i className="fa-brands fa-github text-slate-200 hover:bg-purple-400 rounded-full duration-200"></i>
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/sagarkhatua/">
              <i className="fa-brands fa-linkedin text-sky-600 hover:bg-slate-400 w-full h-full duration-200"></i>
            </a>
          </button>
          <button>
            <a href="https://x.com/i_m_sagar404">
              <i className="fa-brands fa-x-twitter text-gray-200 hover:text-gray-400 duration-200"></i>
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
