"use client";

import { db } from "@/firebase";
import { collection, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import DisplaySavedCollection from "./DisplaySavedCollection";

const ShowSavedCollection = () => {
  const { data: session } = useSession();

  const [savedQuote] = useCollection(
    session &&
      query(collection(db, "users", session?.user?.email!, "savedQuote"))
  );

  return (
    <div className="overflow-auto mx-auto max-h-[550px] space-y-1.5">
      {savedQuote?.docs.map((saved) => (
        <DisplaySavedCollection key={saved.data().text} saved={saved.data()} />
      ))}
    </div>
  );
};

export default ShowSavedCollection;
