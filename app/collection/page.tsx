"use client";

import LoginModal from "@/components/LoginModal";
import YourCollection from "@/components/RelatedCollection/YourCollection";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useState } from "react";

const SavedCollection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="h-screen flex flex-col items-center mx-2">
      <h1 className="text-2xl border-b-2 border-lime-600 my-2 mb-4">
        Your Collection
      </h1>
      <button
        className="bg-gray-200 px-6 py-2 w-[60%] rounded-md hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 transition duration-200 ease-in-out mt-10"
        onClick={() => setIsModalOpen(true)}
      >
        Log In to collect Quotes
      </button>
      {!session && isModalOpen && (
        <LoginModal setIsModalOpen={setIsModalOpen} />
      )}
      <YourCollection />

      <div className="flex space-x-1 justify-center items-center">
        <ArrowLeftIcon className="w-4 h-4" />
        <a href="/" className="text-sm cursor-pointer border-b">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default SavedCollection;
