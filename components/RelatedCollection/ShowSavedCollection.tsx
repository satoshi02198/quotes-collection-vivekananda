"use client";

import { db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import DisplaySavedCollection from "./DisplaySavedCollection";

type Props = {
  author: string;
  openModal: () => void;
};

const ShowSavedCollection = ({ author, openModal }: Props) => {
  const { data: session } = useSession();

  const [savedQuote] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "savedQuote"),
        where("author", "==", author)
      )
  );

  return (
    <div className="overflow-auto mx-auto  space-y-1.5 h-[530px]">
      {session ? (
        savedQuote?.docs.map((saved) => (
          <DisplaySavedCollection
            key={saved.data().text}
            saved={saved.data()}
          />
        ))
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <button
            className="bg-gray-200 px-6 py-2 w-[40%] shadow-sm rounded-md hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in-out"
            onClick={openModal}
          >
            Log In to collect Quotes
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowSavedCollection;
