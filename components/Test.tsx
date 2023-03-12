"use client";

import {
  AutobiographyofaYogi,
  MansEternalQuest,
} from "../quotesInfo/paramahansayoganandaQuotes";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const Test = () => {
  const pushData = () => {
    MansEternalQuest.forEach((quote, index) =>
      setDoc(
        doc(
          db,
          "Paramahansa-Yogananda",
          "Man's Eternal Quest",
          "quote",
          `${quote.id}:Man's Eternal Quest`
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
