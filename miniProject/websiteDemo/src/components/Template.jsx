import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div className="flex justify-between px-20 mt-20 items-center ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-xl font-bold text-yellow-500">{title}</h1>
        <p className="flex flex-col">
          <span>{desc1}</span>
          <span className="text-blue-700">{desc2}</span>
        </p>

        {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}

        <div className="flex w-full items-center gap-2 pr-20">
          <div className="border-t border-t-black w-1/2"></div>
          <p className="text-lg">OR</p>
          <div className="border-t border-t-black w-1/2"></div>
        </div>

        <button className="place-self-start bg-yellow-300 text-black font-semibold px-2 py-1 ml-2">
          <p>Sign in With Google</p>
        </button>
      </div>

      <div>
        <img
          src={image}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />


      </div>
    </div>
  );
}

export default Template;
