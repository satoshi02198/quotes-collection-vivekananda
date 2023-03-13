"use client";

import {
  theDhammapada,
  theHeartOfTeaching,
} from "../infos/quotesInfo/buddhaQuotes";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const Test = () => {
  const pushData = () => {
    theHeartOfTeaching.forEach((quote, index) =>
      setDoc(
        doc(
          db,
          "Buddha",
          "The Heart of the Buddha's Teaching: Transforming Suffering into Peace, Joy, and Liberation",
          "quote",
          `${quote.id}:The Heart of the Buddha's Teaching: Transforming Suffering into Peace, Joy, and Liberation`
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

// Talks with Sri Ramana Maharshi
