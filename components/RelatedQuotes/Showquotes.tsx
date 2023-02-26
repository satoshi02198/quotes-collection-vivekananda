"use client";

import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Select from "react-select";
import Quote2 from "./Quote2";

type Props = {
  author: string;
};

const Showquotes = ({ author }: Props) => {
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
    <div className="md:w-[80%]">
      <Select
        placeholder="Let's select Resource Book..."
        options={options}
        className="mb-2 bg-gray-100 font-semibold"
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
          <Quote2
            InfoOfQuotes={InfoOfQuotes.data()}
            author={author}
            key={InfoOfQuotes.id}
            docId={InfoOfQuotes.id}
            bookResource={resource}
          />
        ))}
      </div>
    </div>
  );
};
export default Showquotes;
