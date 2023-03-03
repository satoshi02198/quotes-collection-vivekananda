"use client";

import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Select from "react-select";
import LoginModal from "../RelatedLogIn/LoginModal";
import Quote from "./Quote";

type Props = {
  author: string;
  openModal: () => void;
};

const Showquotes = ({ author, openModal }: Props) => {
  const [resource, setResource] = useState("default");

  const [InfoOfAuthor] = useCollection(collection(db, author));
  const [InfoOfQuotes] = useCollection(
    collection(db, author, resource, "quote")
  );

  const options = InfoOfAuthor?.docs.map((doc) => ({
    value: doc.id,
    label: doc.id,
  }));

  const handleChange = (e: any) => {
    setResource(e.value);
  };

  return (
    <div className="md:w-[80%] relative">
      <Select
        placeholder="Let's select Resources..."
        options={options}
        className="text-xl mb-4 "
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "gray",
            color: "green",
          }),
        }}
        onChange={handleChange}
      />
      <div className="flex flex-col space-y-1  w-full mx-auto px-1 mt-2 max-h-[500px] overflow-auto min-h-[300px]">
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
