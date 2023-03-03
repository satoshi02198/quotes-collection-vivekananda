import { XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React, { ReactEventHandler, ReactHTMLElement } from "react";

type Props = {
  setIsModalOpen: Function;
};

const LoginModal = ({ setIsModalOpen }: Props) => {
  const handleModalClose = (e: any) => {
    if (e.target.id === "loginModal") {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      id="loginModal"
      className=" fixed inset-0 bg-gray-500/50 flex justify-center items-center px-4 "
      onClick={handleModalClose}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-[200px] md:w-[60%] lg:w-[40%] bg-gray-50 rounded-md shadow-md px-4 py-2 ">
        <XMarkIcon
          className="absolute top-3 right-3 w-5 h-5"
          onClick={() => setIsModalOpen(false)}
        />
        <h2 className="text-xl mb-2">Let`s Collect Your Favarite Quotes!</h2>
        <p className="mb-4 text-sm">To collect you favarite Quotes..</p>
        <button
          className="bg-gray-200 px-6 py-2 w-[80%] rounded-md hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in-out"
          onClick={() => signIn("google")}
        >
          <div className="flex justify-center items-center">
            <Image
              src="/googlelogo.png"
              alt="googlelogo"
              width={20}
              height={20}
            />{" "}
            <p className="ml-4 text-lg">Log In with Google</p>
          </div>
        </button>
      </div>
      ;
    </div>
  );
};

export default LoginModal;
