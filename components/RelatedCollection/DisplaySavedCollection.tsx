"use client";

import { db } from "@/firebase";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteDoc, doc, DocumentData } from "firebase/firestore";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

type Props = {
  saved: DocumentData;
};

const DisplaySavedCollection = ({ saved }: Props) => {
  const {
    author,
    id,
    isSaved,
    resource,
    resource_page,
    savedAt,
    text,
    userID,
  } = saved;
  const { data: session } = useSession();

  //delete quote
  const deleteQuote = async () => {
    await deleteDoc(
      doc(db, "users", session?.user?.email!, "savedQuote", text)
    );
  };

  return (
    <div className="flex flex-col  w-full mx-auto  ">
      <div className="bg-gray-50 border-1 shadow-sm w-full p-2">
        <p className="text-md ">“{text}”</p>
        <p className="text-xs text-gray-400 mt-1">
          {resource} :{resource_page}
        </p>
        <p className="text-xs font-bold text-lime-700 py-2">{author}</p>
        <div className="flex justify-between">
          <button
            className="bg-gray-100 rounded shadow-sm px-2 py-1 text-md text-lime-900 hover:bg-gray-200 active:bg-gray-300 transition duration-200 ease-in-out "
            onClick={() => {
              navigator.clipboard.writeText(text);
              toast.success("Copy!", {
                iconTheme: {
                  primary: "#3f6212",
                  secondary: "#FFFAEE",
                },
              });
            }}
          >
            Copy
          </button>
          <TrashIcon
            className="w-5 h-5 cursor-pointer  text-gray-600 hover:text-red-500 transition duration-200 ease-in-out"
            onClick={deleteQuote}
          />
        </div>
      </div>
    </div>
  );
};

export default DisplaySavedCollection;
