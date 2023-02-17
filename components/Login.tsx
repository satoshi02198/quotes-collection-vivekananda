"use client";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <button
        className="bg-gray-200 font-bold rounded px-4 py-2"
        onClick={() => signIn("google")}
      >
        Sign in
      </button>
    </div>
  );
};

export default Login;
