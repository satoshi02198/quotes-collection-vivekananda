"use client";

import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDoc, query } from "firebase/firestore";
import Quote from "./Quote";
import Select from "react-select";
import { useState } from "react";

const options = [
  {
    value: "The Complete Works of Swami Vivekananda",
    label: "The Complete Works of Swami Vivekananda",
  },
  { value: "Karma-Yoga", label: "Karma-Yoga" },
];

const ShowQuotes = () => {
  const [resource, setResource] = useState(
    "The Complete Works of Swami Vivekananda"
  );
  const [quotes] = useCollection(query(collection(db, resource)));

  const handleChange = (e: any) => {
    setResource(e.value);
  };

  return (
    <div className="flex flex-col space-y-1 w-[95%] mx-auto mt-2 max-h-[600px] overflow-auto">
      <Select
        options={options}
        className="mb-2 bg-gray-100 font-semibold"
        onChange={handleChange}
      />
      {quotes?.docs.map((quote) => (
        <Quote chapter_2={quote.data()} key={quote.id} />
      ))}
    </div>
  );
};

export default ShowQuotes;
