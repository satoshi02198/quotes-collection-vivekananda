"use client";

import { db } from "@/firebase";
import { collection, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Select from "react-select";
import DisplaySavedCollectionForYour from "./DisplaySavedCollectionForYour";

const YourCollection = () => {
  const { data: session } = useSession();
  const [resourceAuthor, setResourceAuthor] = useState("");
  //GET AUTHORS NAME
  const [authors] = useCollection(query(collection(db, "authors")));
  //GET SAVED COLLECTINS
  const [savedQuote] = useCollection(
    session &&
      query(collection(db, "users", session?.user?.email!, "savedQuote"))
  );
  //OPTION FOR SELECT
  const options = authors?.docs.map((author) => ({
    value: author.id,
    label: author.id,
  }));
  console.log(options);
  //HANDLE AUTHOR CHANGE
  const handleAuthorChange = (e: any) => {
    setResourceAuthor(e.value);
  };
  //HANDLE ON CLICK
  const handleClick = () => {
    setResourceAuthor("");
  };

  return (
    <>
      <div className="flex w-full mb-4">
        <Select
          placeholder="choose a author or see all quotes"
          options={options}
          className="text-xl w-full text-center"
          onChange={handleAuthorChange}
          // isClearable={true}
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
      <div className="overflow-auto mx-auto  space-y-1.5 h-[530px]">
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
