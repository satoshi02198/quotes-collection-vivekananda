"use client";

import { db } from "@/firebase";
import { BookmarkSquareIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIcon2 } from "@heroicons/react/24/solid";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  increment,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import toast from "react-hot-toast";

type Props = {
  InfoOfQuotes: DocumentData;
  docId: string;
  bookResource: string;
  author: string;
  openModal: () => void;
};

const Quote = ({
  InfoOfQuotes,
  docId,
  bookResource,
  author,
  openModal,
}: Props) => {
  const { id, text, resource, resource_page, liked } = InfoOfQuotes;

  const { data: session } = useSession();

  //read user's saved quotes and extract its text
  const [savedQuote] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email! || session?.user?.name!,
          "savedQuote"
        )
      )
  );
  const savedQuotesText = savedQuote?.docs.map((saved) => saved.data().text);

  //read user's liked quotes and extract its text
  const [likeQuote] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email! || session?.user?.name!,
          "likeQuotes"
        )
      )
  );
  const likedQuotesText = likeQuote?.docs.map((liked) => liked.data().text);
  // const likedQuotesId = likeQuote?.docs.map((liked) => liked.id);

  //save unsave
  const saveQuote = async () => {
    if (!session) {
      openModal();
    } else if (savedQuotesText?.includes(text)) {
      await updateDoc(doc(db, author, bookResource, "quote", docId), {
        saved: increment(-1),
      });

      await deleteDoc(
        doc(db, "users", session?.user?.email!, "savedQuote", text)
      );
    } else {
      await updateDoc(doc(db, author, bookResource, "quote", docId), {
        saved: increment(1),
      });

      await setDoc(
        doc(
          db,
          "users",
          session?.user?.email! || session?.user?.name!,
          "savedQuote",
          text
        ),
        {
          id: id,
          text: text,
          resource: resource,
          resource_page: resource_page,
          userId: session?.user?.email! || session?.user?.name!,
          savedAt: serverTimestamp(),
          isSaved: true,
          author: author,
        }
      );
    }
  };

  //like unlike
  const addLike = async () => {
    if (!session) {
      openModal();
    } else if (likedQuotesText?.includes(text)) {
      await updateDoc(doc(db, author, bookResource, "quote", docId), {
        liked: increment(-1),
      });

      await deleteDoc(
        doc(
          db,
          "users",
          session?.user?.email! || session?.user?.name!,
          "likeQuotes",
          text
        )
      );
    } else {
      await updateDoc(doc(db, author, bookResource, "quote", docId), {
        liked: increment(1),
      });
      await setDoc(
        doc(
          db,
          "users",
          session?.user?.email! || session?.user?.name!,
          "likeQuotes",
          text
        ),
        {
          id: id,
          text: text,
          resource: resource,
          resource_page: resource_page,
          userId: session?.user?.email! || session?.user?.name!,
          savedAt: serverTimestamp(),
          isLike: true,
        }
      );
    }
  };

  return (
    <>
      <div className="bg-gray-50 border-1 shadow-sm w-full h-auto p-2">
        <p className="text-md">“{text}”</p>
        <p className="text-xs text-gray-400 mt-1">
          {resource} :{resource_page}
        </p>
        <div className="flex justify-between mt-3">
          <button
            className="bg-gray-100 rounded shadow-sm px-2 py-1 text-md  text-lime-900 
     hover:bg-gray-200 active:bg-gray-300 transition duration-200 ease-in-out "
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
                <HeartIcon
                  className="w-5 h-5 cursor-pointer"
                  onClick={addLike}
                />
              )}{" "}
              <span className="absolute top-0 left-6 text-gray-500 text-sm">
                {liked === 0 ? "" : liked}
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
    </>
  );
};

export default Quote;

// TODO add copy button
//const copy = (text) => navigator.clipboard.writeText(text)
