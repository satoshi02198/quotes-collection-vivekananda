import { XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React, { ReactEventHandler, ReactHTMLElement } from "react";

type Props = {
  setIsModalOpen: Function;
};

const sns = [
  {
    name: "Google",
    src: "/googlelogo.png",
    signInName: "google",
  },
  {
    name: "Facebook",
    src: "/facebooklogo.png",
    signInName: "facebook",
  },
  {
    name: "Line",
    src: "/linelogo.png",
    signInName: "line",
  },
];

const LoginModal = ({ setIsModalOpen }: Props) => {
  const handleModalClose = (e: any) => {
    if (e.target.id === "loginModal") {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      id="loginModal"
      className=" fixed inset-0 bg-gray-500/50 flex justify-center items-center px-4 sm:px-0 z-50"
      onClick={handleModalClose}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-[250px] md:h-[300px] md:w-[60%] lg:w-[40%] max-w-lg bg-gray-50 rounded-md shadow-md px-4 py-2 ">
        <XMarkIcon
          className="absolute top-2 right-2 sm:top-3 sm:right-3 sm:w-5 sm:h-5 w-4 h-4 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        />
        <h2 className="text-md sm:text-xl mb-2">
          Let`s Collect Your Favarite Quotes!
        </h2>
        <p className="mb-4 text-xs sm:text-sm">
          To continue please log in with ...
        </p>
        <div className="space-y-2 sm:w-[90%]  w-[95%] flex flex-col justify-center items-center">
          {sns.map((el, i) => (
            <button
              key={i + el.signInName}
              className=" bg-gray-200 px-6 py-2 sm:w-[80%] w-full rounded-md hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in-out"
              onClick={() => signIn(el.signInName)}
            >
              <div className="flex justify-center items-center">
                <Image
                  src={el.src}
                  alt={el.name}
                  width={20}
                  height={20}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />{" "}
                <p className="ml-4 text-lg "> {el.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
