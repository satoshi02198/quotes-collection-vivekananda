import {
  addDoc,
  collection,
  DocumentData,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { HeartIcon, BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { db } from "@/firebase";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  quotes: DocumentData;
};

const Quote = ({ quotes }: Props) => {
  const { id, text, resource, resource_page, isSaved } = quotes;
  const { data: session } = useSession();

  const saveQuote = async () => {
    await addDoc(collection(db, "users", session?.user?.email!, "quote"), {
      id: id,
      text: text,
      resource: resource,
      resource_page: resource_page,
      userId: session?.user?.email!,
      savedAt: serverTimestamp(),
      isSaved: true,
    });
  };

  return (
    <div className="bg-gray-50 border-1 shadow-sm w-full h-auto p-2">
      <p className="text-md">“{text}”</p>
      <p className="text-xs text-gray-300 mt-1">
        {resource} :{resource_page}
      </p>
      <div className="flex justify-end mt-3">
        <HeartIcon className="w-4 h-4 cursor-pointer" />
        <BookmarkSquareIcon
          className="w-4 h-4 cursor-pointer"
          onClick={saveQuote}
        />
      </div>
    </div>
  );
};

export default Quote;
