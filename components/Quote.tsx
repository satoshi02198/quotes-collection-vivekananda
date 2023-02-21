"use client";

import {
  addDoc,
  collection,
  DocumentData,
  query,
  serverTimestamp,
  setDoc,
  doc,
  increment,
  updateDoc,
  deleteDoc,
  where,
} from "firebase/firestore";
import { HeartIcon, BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIcon2 } from "@heroicons/react/24/solid";
import { db } from "@/firebase";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import toast from "react-hot-toast";

type Props = {
  quotes: DocumentData;
  docId: string;
  bookResource: string;
};

const Quote = ({ quotes, docId, bookResource }: Props) => {
  const { id, text, resource, resource_page, like } = quotes;
  const { data: session } = useSession();

  //read user's saved quotes and extract its text
  const [savedQuote] = useCollection(
    session &&
      query(collection(db, "users", session?.user?.email!, "savedQuote"))
  );
  const savedQuotesText = savedQuote?.docs.map((saved) => saved.data().text);

  //read user's liked quotes and extract its text
  const [likeQuote] = useCollection(
    session &&
      query(collection(db, "users", session?.user?.email!, "likeQuotes"))
  );
  const likedQuotesText = likeQuote?.docs.map((liked) => liked.data().text);
  // const likedQuotesId = likeQuote?.docs.map((liked) => liked.id);

  //save unsave
  const saveQuote = async () => {
    if (savedQuotesText?.includes(text)) {
      await deleteDoc(
        doc(db, "users", session?.user?.email!, "savedQuote", text)
      );
    } else {
      await setDoc(
        doc(db, "users", session?.user?.email!, "savedQuote", text),
        {
          id: id,
          text: text,
          resource: resource,
          resource_page: resource_page,
          userId: session?.user?.email!,
          savedAt: serverTimestamp(),
          isSaved: true,
        }
      );
    }
  };

  //like unlike
  const addLike = async () => {
    if (likedQuotesText?.includes(text)) {
      await updateDoc(doc(db, bookResource, docId), {
        like: increment(-1),
      });

      await deleteDoc(
        doc(db, "users", session?.user?.email!, "likeQuotes", text)
      );
    } else {
      await updateDoc(doc(db, bookResource, docId), {
        like: increment(1),
      });
      await setDoc(
        doc(db, "users", session?.user?.email!, "likeQuotes", text),
        {
          id: id,
          text: text,
          resource: resource,
          resource_page: resource_page,
          userId: session?.user?.email!,
          savedAt: serverTimestamp(),
          isLike: true,
        }
      );
    }
  };

  return (
    <div className="bg-gray-50 border-1 shadow-sm w-full h-auto p-2">
      <p className="text-md">“{text}”</p>
      <p className="text-xs text-gray-400 mt-1">
        {resource} :{resource_page}
      </p>
      <div className="flex justify-between mt-3">
        <button
          className="bg-gray-200 rounded shadow-sm px-2 py-1 text-sm font-bold text-lime-800 hover:bg-gray-100 active:bg-gray-300 transition duration-200 ease-in-out "
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
        <div className="flex space-x-5">
          <div className="relative">
            {likedQuotesText?.includes(text) ? (
              <HeartIcon2
                className="w-5 h-5 cursor-pointer text-red-300 "
                onClick={addLike}
              />
            ) : (
              <HeartIcon className="w-5 h-5 cursor-pointer" onClick={addLike} />
            )}{" "}
            <span className="absolute top-0 left-6 text-gray-500 text-sm">
              {like}
            </span>
          </div>{" "}
          <BookmarkSquareIcon
            className={`w-5 h-5 cursor-pointer ${
              savedQuotesText?.includes(text) && "text-green-600"
            }`}
            onClick={saveQuote}
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;

// TODO add copy button
//const copy = (text) => navigator.clipboard.writeText(text)
