"use client";

import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import Quote from "./Quote";
import Select from "react-select";
import { useState } from "react";
import { useSession } from "next-auth/react";

const options = [
  {
    value: "The Complete Works of Swami Vivekananda",
    label: "The Complete Works of Swami Vivekananda",
  },
  { value: "Karma-Yoga", label: "Karma-Yoga" },
  { value: "Bhakti-Yoga", label: "Bhakti-Yoga" },
];

const ShowQuotes = () => {
  const [resource, setResource] = useState("default");
  const [quotes] = useCollection(query(collection(db, resource)));

  const { data: session } = useSession();

  // const [savedQuote] = useCollection(
  //   query(collection(db, "users", session?.user?.email!, "quote"))
  // );

  const handleChange = (e: any) => {
    setResource(e.value);
  };

  return (
    <div className="md:w-[80%]">
      {" "}
      <Select
        placeholder="Let's select Resource Book..."
        options={options}
        className="mb-2 bg-gray-100 font-semibold"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "green" : "gray",
            color: "green",
          }),
        }}
        onChange={handleChange}
      />
      <div className="flex flex-col space-y-1  w-full mx-auto px-1 mt-2 max-h-[500px] overflow-auto min-h-[300px]">
        {quotes?.docs.map((quote) => (
          <Quote
            quotes={quote.data()}
            key={quote.id}
            docId={quote.id}
            bookResource={resource}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowQuotes;
