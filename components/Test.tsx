"use client";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const Test = () => {
  const quoteOfBhaktiYoga = [
    {
      id: 1,
      text: "All of us have to do our duty, but we should not be attached to the results. Attaining evenness of mind is yoga.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Bhakti-Yoga, I",
      resource_page: "p. 5",
    },
    {
      id: 2,
      text: "The sign of life is strength and growth. The sign of death is weakness. Whatever is weak, avoid! It is death. If it is strength, go down into hell and get hold of it! There is salvation only for the brave.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Bhakti-Yoga, III",
      resource_page: "p. 20",
    },
    {
      id: 3,
      text: "Desire is the root of all evil. Desirelessness is the realization of God.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Bhakti-Yoga, V",
      resource_page: "p. 36",
    },
    {
      id: 4,
      text: "It is not the love of the husband or of the wife that attracts us; it is the love of the Self shining in them. That love is the background of all forms of love, yet we do not recognize it.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Bhakti-Yoga, VI",
      resource_page: "p. 41",
    },
    {
      id: 5,
      text: "The whole world is one, but we see it as many, through the defects of our mind.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Bhakti-Yoga, VIII",
      resource_page: "p. 54",
    },
    {
      id: 6,
      text: "Every good thought that you think or act upon is as a force that goes round the world. Every selfish thought we think is also a force. Every time we think a good thought it adds its quota to the world's store of good. Every time we think a selfish thought, we put a spoke in the wheel.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Bhakti-Yoga, IX",
      resource_page: "p. 63",
    },
    {
      id: 7,
      text: "You cannot see God until you are pure. All the impurities have to be washed away. God is the only pure One.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Bhakti-Yoga, X",
      resource_page: "p. 68",
    },
    {
      id: 8,
      text: "The will is not free - it is a phenomenon bound by cause and effect - but there is something behind the will which is free.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Bhakti-Yoga, XI",
      resource_page: "p. 77",
    },
    {
      id: 9,
      text: "Love opens the most impossible gates; love is the gate to all the secrets of the universe.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 2, p. 74",
    },
    {
      id: 10,
      text: "This is the one central ideal throughout Hindu religious thought—the union with the Eternal through love.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 2, p. 79",
    },
    {
      id: 11,
      text: "It is love and love alone which leads to enjoyment of unity.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 2, p. 86",
    },
    {
      id: 12,
      text: "He who loves never fails; where there is love there is no question.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 2, p. 88",
    },
    {
      id: 13,
      text: "Love of God is the only strength and the only power and the only force that can work on the divinity inherent in our nature.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 2, p. 91",
    },
    {
      id: 14,
      text: "The two principal ideals of Bhakti-Yoga are the love of the personal God and the sense of oneness with the universe.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 3, p. 106",
    },
    {
      id: 15,
      text: "The whole universe is the playground of the Lord.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 4, p. 118",
    },
    {
      id: 16,
      text: "The Divine is present in every object and in every place. The whole universe is the temple of the Lord.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 4, p. 120",
    },
    {
      id: 17,
      text: "The whole universe is the manifestation of the will of the Lord; every action, every movement in the universe is the result of the will of the Lord.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 4, p. 122",
    },
    {
      id: 18,
      text: "By loving all and by hating none, by being in harmony with all, we will be able to see God in everything and in every being.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 4, p. 129",
    },
    {
      id: 19,
      text: "Let us be unselfish; let us work together to reach the same goal; let us be mutually helpful; let us forget ourselves in working for the good of the whole.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 4, p. 131",
    },
    {
      id: 20,
      text: "The whole universe is sustained by the Lord; He is the source of all strength and all power.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 4, p. 139",
    },
    {
      id: 21,
      text: "God can be realized through the love that we have for Him.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 142",
    },
    {
      id: 22,
      text: "The love of the Lord is the only thing that can purify the heart and free us from all impurities.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 149",
    },
    {
      id: 23,
      text: "The love of the Lord is like a stream that flows through the heart and purifies it.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 150",
    },
    {
      id: 24,
      text: "The love of the Lord is the most powerful force in the universe; it can overcome all obstacles and purify the heart.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 154",
    },
    {
      id: 25,
      text: "The love of the Lord is the only thing that can free us from the bondage of the world.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 155",
    },
    {
      id: 26,
      text: "The love of the Lord is the only thing that can give us true happiness.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 156",
    },
    {
      id: 27,
      text: "The love of the Lord is the only thing that can give us true peace.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 156",
    },
    {
      id: 28,
      text: "The love of the Lord is the only thing that can give us true fulfillment.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 156",
    },
    {
      id: 29,
      text: "All power is within you; you can do anything and everything.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 1, p. 19",
    },
    {
      id: 30,
      text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 1, p. 20",
    },
    {
      id: 31,
      text: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 1, p. 22",
    },
    {
      id: 32,
      text: "The goal of all nature is to attain liberation, and man is the only being who can consciously work towards that end.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 2, p. 36",
    },
    {
      id: 33,
      text: "All the different paths of yoga ultimately lead to the same goal, which is the realization of God.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 2, p. 39",
    },
    {
      id: 34,
      text: "The love of God is the greatest power in the universe; it can transform the whole world.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 3, p. 84",
    },
    {
      id: 35,
      text: "The love of God is the only thing that can give us true happiness and fulfillment.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 3, p. 85",
    },
    {
      id: 36,
      text: "To see God, you must have the eyes of love.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 4, p. 122",
    },
    {
      id: 37,
      text: "Love is the greatest purifier; it can free us from all impurities and make us one with God.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 4, p. 124",
    },
    {
      id: 38,
      text: "The only thing that can save the world is the love of God.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 4, p. 126",
    },
    {
      id: 39,
      text: "God is not far away from us; He is nearer to us than our own soul.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 144",
    },
    {
      id: 40,
      text: "The love of God is the only thing that can satisfy the longings of the human heart.",
      resource: "Bhakti-Yoga",
      resource_page: "Ch. 5, p. 155",
    },
  ];

  const pushData = () => {
    quoteOfBhaktiYoga.forEach((quote, index) =>
      setDoc(
        doc(
          db,
          "Swami-Vivekananda",
          "BhaktiYoga",
          "quote",
          `${quote.id}:BhaktiYoga`
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
