"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { toast } from "react-hot-toast";

const Login = ({ setIsModalOpen }: any) => {
  return (
    <div>
      <button
        className="bg-gray-100  font-semibold rounded-md px-4 py-2 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 transision duration-200 ease-in-out"
        onClick={() => setIsModalOpen(true)}
      >
        <p className="">Log In</p>
      </button>
    </div>
  );
};

export default Login;
