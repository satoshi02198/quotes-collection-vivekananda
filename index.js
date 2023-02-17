import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

const quotes = [
  {
    id: 1,
    text: "真実を知ることは、私たちがどこから来て、何のために生まれ、何をするべきかを知ることです。",
  },
  {
    id: 2,
    text: "神は私たち自身の中にあります。それを見つけるために、私たちは内なる自己を発見する必要があります。",
  },
];

addDoc(collection(db, "The Complete Works of Swami Vivekananda"), quotes);
