"use client";

import {
  resource1,
  resource2,
  resource3,
  resource4,
  resource5,
} from "../quotesInfo/ramakrshnaQuotes";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const Test = () => {
  const pushData = () => {
    resource2.forEach((quote, index) =>
      setDoc(
        doc(
          db,
          "RamaKrishna",
          "Ramakrishna and His Disciples",
          "quote",
          `${quote.id}:Ramakrishna and His Disciples`
        ),
        quote
      )
    );
  };

  return (
    <div>
      <button className="bg-green-50" onClick={pushData}>
        push
      </button>
    </div>
  );
};

export default Test;
