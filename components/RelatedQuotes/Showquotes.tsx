"use client";

import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Select from "react-select";
import LoginModal from "../RelatedLogIn/LoginModal";
import Quote from "./Quote";
// import Select from "react-tailwindcss-select";

type Props = {
  author: string;
  openModal: () => void;
};

const Showquotes = ({ author, openModal }: Props) => {
  const [resource, setResource] = useState("defalut");

  const [InfoOfAuthor] = useCollection(collection(db, author));
  const [InfoOfQuotes] = useCollection(
    collection(db, author, resource, "quote")
  );

  const options = InfoOfAuthor?.docs.map((doc) => ({
    value: doc.id,
    label: doc.id,
  }));

  // const options = InfoOfAuthor?.docs.map((doc) => (
  //   <option key={doc.id} value={doc.id} label={doc.id} className="bg-gray-50">
  //     {doc.id}
  //   </option>
  // ));

  const handleChange = (e: any) => {
    setResource(e.value);
  };

  return (
    <div className="md:w-[80%] relative">
      {/* select html */}
      {/* <select
        placeholder="Resources"
        onChange={(e) => handleChange(e)}
        className="bg-gray-100 rounded-sm px-2 py-2 text-base"
      >
        {options}
      </select> */}

      {/* react-select */}
      <Select
        placeholder="Let's select Resources..."
        options={options}
        className="text-xl mb-4 "
        onChange={handleChange}
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

      {/* react-tailwind-select */}
      {/* <Select
        options={options}
        onChange={handleChange}
        placeholder="Let's select resources...."
        classNames={{
          list: "bg-gray-50",
          listItem: ({ isSelected }) =>
            `block transition duration-200 px-2 py-2 cursor-pointer truncate rounded ${
              isSelected ? `bg-lime-300` : `text-gray-500 hover:bg-lime-50`
            }`,
        }}
      /> */}
      <div className="flex flex-col space-y-1  w-full mx-auto px-1 mt-2 max-h-[500px] overflow-auto min-h-[300px] ">
        {InfoOfQuotes?.docs.map((InfoOfQuotes) => (
          <Quote
            InfoOfQuotes={InfoOfQuotes.data()}
            author={author}
            key={InfoOfQuotes.id}
            docId={InfoOfQuotes.id}
            bookResource={resource}
            openModal={openModal}
          />
        ))}
      </div>
    </div>
  );
};
export default Showquotes;

// const jnanaYogaQuotes = [
//   {
//     id: 1,
//     text: text,
//     resource: resource,
//     resource_page: resource_page,

//   }
// ]
