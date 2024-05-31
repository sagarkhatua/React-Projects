import React, { useState } from "react";

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className=" bg-blue-700 h-screen justify-center items-center flex">
      <div className="Container bg-slate-50 flex flex-col pb-3 m-auto p-7 w-96 h-3/4 rounded-3xl">
        <div className="header"></div>
        <div className="text flex justify-center text-3xl pb-3  underline decoration-sky-600 underline-offset-3 text font-bold text-sky-800">
          {action}
        </div>
        <div className="inputs flex flex-col gap-4 mt-11 items-center ">
          {action == "Log In" ? (
            ""
          ) : (
            <div className="input inputcls">
              <i class="fa-solid fa-user img"></i>
              <input
                type="text"
                name=""
                id=""
                className="textFld"
                placeholder="Name"
              />
            </div>
          )}

          <div className="input inputcls">
            <i class="fa-solid fa-envelope-open img"></i>
            <input
              type="text"
              name=""
              id=""
              className="textFld"
              placeholder="Email Id"
            />
          </div>
          <div className="input inputcls">
            <i class="fa-solid fa-key img"></i>
            <input
              type="text"
              name=""
              id=""
              className="textFld"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="forgotPass text-sm mt-2 flex">
          {action == "Sign Up" ? (
            ""
          ) : (
            <div>
              Lost Password ?
              <span className=" cursor-pointer text-blue-700 hover:text-black">
                Click Here!
              </span>
            </div>
          )}
        </div>
        <div className="submit-container flex gap-7 items-center justify-center mt-6">
          <div
            className={action === "Log In" ? "submit actionChg" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit actionChg" : "submit"}
            onClick={() => {
              setAction("Log In");
            }}
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
