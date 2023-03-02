"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { toast } from "react-hot-toast";

const Login = () => {
  return (
    <div>
      <button
        className="bg-gray-100 font-bold rounded-sm px-3 py-2 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200 transision duration-200 ease-in-out"
        onClick={() => signIn("google")}
      >
        <div className="flex justify-center items-center">
          <Image
            src="/googlelogo.png"
            alt="googlelogo"
            width={20}
            height={20}
          />{" "}
          <p className="ml-3">Log In</p>
        </div>
      </button>
    </div>
  );
};

export default Login;
