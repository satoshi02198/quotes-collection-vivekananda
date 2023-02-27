"use client";

import { db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import DisplaySavedCollection from "./DisplaySavedCollection";

type Props = {
  author: string;
};

const ShowSavedCollection = ({ author }: Props) => {
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
      {savedQuote?.docs.map((saved) => (
        <DisplaySavedCollection key={saved.data().text} saved={saved.data()} />
      ))}
    </div>
  );
};

export default ShowSavedCollection;
