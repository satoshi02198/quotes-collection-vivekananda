"use client";

import { db } from "@/firebase";
import { collection, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Select from "react-select";
import DisplaySavedCollectionForYour from "./DisplaySavedCollectionForYour";
import Image from "next/image";
import { useRouter } from "next/navigation";

type optionsFormat = {
  label: string;
  value: string;
  src: string;
};

const YourCollection = () => {
  // const router = useRouter();
  const { data: session } = useSession();
  const [resourceAuthor, setResourceAuthor] = useState("");
  //GET AUTHORS NAME
  const [authors] = useCollection(query(collection(db, "authors")));
  //GET SAVED COLLECTINS
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

  //?OPTION FOR SELECT
  const options = authors?.docs.map((author) => ({
    value: author.id,
    label: author.id,
    src: author.data().src,
  }));

  const formatOptionLabel = ({ value, label, src }: optionsFormat) => {
    return (
      <div>
        <div className="flex items-center py-0.5">
          <div className="flex-shrink-0">
            <Image
              className="w-8 h-8 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-2"
              src={src}
              alt="test"
              width={100}
              height={100}
            />
          </div>
          <div className="ml-3">
            <p className="text-md md:text-2xl font-medium">{value}</p>
            {/* <p className="text-sm font-medium text-gray-900">{label}</p> */}
          </div>
        </div>
      </div>
    );
  };

  //?HANDLE AUTHOR CHANGE
  const handleAuthorChange = (e: any) => {
    setResourceAuthor(e.value);
  };
  //?HANDLE ON CLICK
  const handleClick = () => {
    setResourceAuthor("");

    // router.refresh();
  };

  return (
    <>
      <div className="flex w-full my-4 sm:my-2">
        <Select
          placeholder="choose a author "
          // defaultValue={}
          options={options}
          className="text-md sm:text-xl w-full text-center"
          onChange={handleAuthorChange}
          formatOptionLabel={formatOptionLabel}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "#65A30D",
              primary25: "#ECF9CB",
              primary50: "#D9F99D",
            },
          })}
        />
        <button
          className="bg-lime-700 text-white px-4 py-2 rounded-sm hover:bg-lime-600 focus:bg-lime-600 active:bg-lime-500 transition duration-200 ease-in-out"
          onClick={handleClick}
        >
          All
        </button>
      </div>
      <div className="overflow-auto mx-auto  space-y-1.5 h-[580px]">
        {savedQuote?.docs.map((saved) => (
          <DisplaySavedCollectionForYour
            key={saved.data().text}
            saved={saved.data()}
            resourceAuthor={resourceAuthor}
          />
        ))}
      </div>
    </>
  );
};

export default YourCollection;
