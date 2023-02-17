"use client";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const Test = () => {
  const quotes = [
    {
      id: 1,
      text: "Arise, awake, and stop not until the goal is achieved.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 1, Lectures and Discourses, Work and Its Secret",
      resource_page: "p. 23",
    },
    {
      id: 2,
      text: "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 1, Lectures and Discourses, The Powers of the Mind",
      resource_page: "p. 5",
    },
    {
      id: 3,
      text: "In a conflict between the heart and the brain, follow your heart.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 2, Practical Vedanta and Other Lectures, Practical Vedanta",
      resource_page: "p. 197",
    },
    {
      id: 4,
      text: "The greatest religion is to be true to your own nature. Have faith in yourselves!",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Lectures from Colombo to Almora, Lectures and Discourses",
      resource_page: "p. 229",
    },
    {
      id: 5,
      text: "All differences in this world are of degree, and not of kind, because oneness is the secret of everything.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 4, Addresses on Bhakti-Yoga, The Real Nature of Man",
      resource_page: "p. 68",
    },
    {
      id: 6,
      text: "If money help a man to do good to others, it is of some value; but if not, it is simply a mass of evil, and the sooner it is got rid of, the better.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 6, Epistles - Second Series, LXXXIII",
      resource_page: "p. 270",
    },
    {
      id: 7,
      text: "All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 7, Conversations and Dialogues, Notes of Class Talks and Lectures",
      resource_page: "p. 34",
    },
    {
      id: 8,
      text: "You cannot believe in God until you believe in yourself.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 8, Epistles - Fourth Series, XLV",
      resource_page: "p. 69",
    },
    {
      id: 9,
      text: "The moment I have realized God sitting in the temple of every human body, the moment I stand in reverence before every human being and see God in him, that moment I am free from bondage, everything that binds vanishes, and I am free.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real Nature of Man",
      resource_page: "p. 246",
    },
    {
      id: 10,
      text: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real Nature of Man",
      resource_page: "p. 62",
    },
    {
      id: 11,
      text: "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 1, Lectures and Discourses, The Powers of the Mind",
      resource_page: "p. 5",
    },
    {
      id: 12,
      text: "Stand up, be bold, be strong. Take the whole responsibility on your own shoulders, and know that you are the creator of your own destiny.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 1, Lectures and Discourses, The Secret of Work",
      resource_page: "p. 13",
    },
    {
      id: 13,
      text: "The greatest sin is to think that you are weak.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 1, Lectures and Discourses, The Powers of the Mind",
      resource_page: "p. 148",
    },
    {
      id: 14,
      text: "Condemn none: if you can stretch out a helping hand, do so. If you cannot, fold your hands, bless your brothers, and let them go their own way.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 1, Lectures and Discourses, The Ideal of a Universal Religion",
      resource_page: "p. 11",
    },
    {
      id: 15,
      text: "All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 2, Conversations and Dialogues, Reported in the Calcutta Englishman",
      resource_page: "p. 54",
    },
    {
      id: 16,
      text: "The goal of mankind is knowledge. . . . Now this knowledge is inherent in man. No knowledge comes from outside: it is all inside.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 2, Lectures and Discourses, The Real Nature of Man",
      resource_page: "p. 9",
    },
    {
      id: 17,
      text: "In a day, when you don't come across any problems, you can be sure that you are travelling in a wrong path.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 3, Lectures from Colombo to Almora, Lectures and Discourses",
      resource_page: "p. 222",
    },
    {
      id: 18,
      text: "The whole secret of existence is to have no fear. Never fear what will become of you, depend on no one. Only the moment you reject all help are you freed.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 4, Addresses on Bhakti-Yoga, The Real Nature of Man",
      resource_page: "p. 310",
    },
    {
      id: 19,
      text: "Do not wait for anybody or anything. Do whatever you can. Build your hope on none.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 5, Epistles - Third Series, CXIII",
      resource_page: "p. 345",
    },
    {
      id: 20,
      text: "Be a hero. Always say, 'I have no fear.' Tell this to everyone—'Have no fear.'",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 5, Epistles - Second Series, XXXII",
      resource_page: "p. 105",
    },
    {
      id: 21,
      text: "All knowledge that the world has ever received comes from the mind; the infinite library of the universe is in our own mind.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 5, Notes from Lectures and Discourses, The Cosmos: The Microcosm",
      resource_page: "p. 299",
    },
    {
      id: 22,
      text: "The remedy for weakness is not brooding over weakness, but thinking of strength.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 6, Epistles - First Series, LXXXIII",
      resource_page: "p. 285",
    },
    {
      id: 23,
      text: "As soon as I think that I am a little body, I want to preserve it, to protect it, to keep it nice, at the expense of other bodies; then you and I become separate.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 6, Conversations and Dialogues, Reported in the Prabuddha Bharata",
      resource_page: "p. 107",
    },
    {
      id: 24,
      text: "Infinite power and possibilities are inherent in man.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 6, Conversations and Dialogues, Reported in the Calcutta Englishman",
      resource_page: "p. 21",
    },
    {
      id: 25,
      text: "The great secret of true success, of true happiness, is this: the man or woman who asks for no return, the perfectly unselfish person, is the most successful.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 7, Epistles - Second Series, XLIX",
      resource_page: "p. 118",
    },
    {
      id: 26,
      text: "The cause of all the miseries we have in the world is that men foolishly think pleasure to be the ideal to strive for.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 7, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 18",
    },
    {
      id: 27,
      text: "No one can get anything unless he earns it. This is an eternal law. We may sometimes think it is not true, but in the long run, we become convinced of it.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 8, Epistles - Second Series, CXCV",
      resource_page: "p. 34",
    },
    {
      id: 28,
      text: "The very reason for nature's existence is for the education of the soul; it has no other meaning; it is there for its own sake.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 8, Lectures and Discourses, The Cosmos: The Microcosm",
      resource_page: "p. 232",
    },
    {
      id: 29,
      text: "Do not be afraid of a small beginning; great things come afterwards.",
      resource:
        "The Complete Works of Swami Vive  kananda, Volume 8, Lectures and Discourses, Bhakti or Devotion",
      resource_page: "p. 25",
    },
    {
      id: 30,
      text: "Purity, patience, and perseverance are the three essentials to success, and above all, love.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 8, Lectures and Discourses, Practical Vedanta",
      resource_page: "p. 170",
    },
    {
      id: 31,
      text: "The best way to serve God is by serving humanity.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 8, Lectures and Discourses, Practical Vedanta",
      resource_page: "p. 200",
    },
    {
      id: 32,
      text: "Anything that makes weak—physically, intellectually, and spiritually—reject it as poison.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 8, Epistles - Second Series, LXXXIX",
      resource_page: "p. 295",
    },
    {
      id: 33,
      text: "As long as we require someone else to make us happy, we are slaves.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Conversations and Dialogues, Reported in the Prabuddha Bharata",
      resource_page: "p. 364",
    },
    {
      id: 34,
      text: "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Secret of Work",
      resource_page: "p. 6",
    },
    {
      id: 35,
      text: "The goal of mankind is knowledge.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real Nature of Man",
      resource_page: "p. 8",
    },
    {
      id: 36,
      text: "Conquer yourself, and the whole universe is yours.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real Nature of Man",
      resource_page: "p. 26",
    },
    {
      id: 37,
      text: "Education is not the amount of information that is put into your brain and runs riot there, undigested, all your life. We must have life-building, man-making, character-making assimilation of ideas.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Education of the Future",
      resource_page: "p. 18",
    },
    {
      id: 38,
      text: "We are responsible for what we are, and whatever we wish ourselves to be, we have the power to make ourselves. If what we are now has been the result of our own past actions, it certainly follows that whatever we wish to be in future can be produced by our present actions.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 105",
    },
    {
      id: 39,
      text: "Arise, awake, and stop not until the goal is reached.",
      resource:
        "The Complete Works of Swami Vivekananda  , Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 108",
    },
    {
      id: 40,
      text: "The will is not free - it is a phenomenon bound by cause and effect - but there is something behind the will which is free.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 255",
    },
    {
      id: 41,
      text: "You cannot believe in God until you believe in yourself.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 284",
    },
    {
      id: 42,
      text: "The powers of the mind are like the rays of the sun when they are concentrated they illumine.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 285",
    },
    {
      id: 43,
      text: "Strength is life, weakness is death.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 298",
    },
    {
      id: 44,
      text: "The greatest sin is to think yourself weak.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 298",
    },
    {
      id: 45,
      text: "If you think yourselves strong, strong you will be.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 298",
    },
    {
      id: 46,
      text: "All power is within you; you can do anything and everything. Believe in that, do not believe that you are weak; do not believe that you are half-crazy lunatics, as most of us do nowadays. Stand up and express the divinity within you.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 298",
    },
    {
      id: 47,
      text: "We are responsible for what we are, and whatever we wish ourselves to be, we have the power to make ourselves. If what we are now has been the result of our own past actions, it certainly follows that whatever we wish to be in future can be produced by our present actions.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 9, Lectures and Discourses, The Real and the Apparent Man",
      resource_page: "p. 105",
    },
    {
      id: 48,
      text: "In a day, when you don’t come across any problems—you can be sure that you are travelling in a wrong path.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 6, Epistles - Second Series, XCV",
      resource_page: "p. 334",
    },
    {
      id: 49,
      text: "The world is the great gymnasium where we come to make ourselves strong.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 6, Epistles - Second Series, XLVII",
      resource_page: "p. 325",
    },
    {
      id: 50,
      text: "It is our own mental attitude which makes the world what it is for us. Our thoughts make things beautiful, our thoughts make things ugly. The whole world is in our own minds. Learn to see things in the proper light.",
      resource:
        "The Complete Works of Swami Vivekananda, Volume 2, Karma-Yoga, IV",
      resource_page: "p. 66",
    },
  ];

  const pushData = () => {
    quotes.forEach((quote, index) =>
      setDoc(
        doc(db, "The Complete Works of Swami Vivekananda", `${index}`),
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
