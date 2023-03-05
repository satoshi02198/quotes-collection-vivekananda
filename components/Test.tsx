"use client";

import {
  theCollectedWorks,
  talkWithSriRamanaMaharshi,
} from "../quotesInfo/ramanamaharshiQuotes";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const Test = () => {
  const pushData = () => {
    talkWithSriRamanaMaharshi.forEach((quote, index) =>
      setDoc(
        doc(
          db,
          "Ramana-Maharshi",
          "Talks with Sri Ramana Maharshi",
          "quote",
          `${quote.id}:Talks with Sri Ramana Maharshi`
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
