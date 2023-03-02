"use client";
import Link from "next/link";
import ShowSavedCollection from "./ShowSavedCollection";

type Props = {
  author: string;
  openModal: () => void;
};

const Collection = ({ author, openModal }: Props) => {
  return (
    <>
      <div className="md:hidden">
        <Link href="/collection">
          <button className="bg-lime-700 text-gray-100 shadow-sm rounded px-4 py-2 hover:bg-lime-600 focus:outline-none active:bg-lime-800 transition duration-200 ease-in-out">
            See your Collection
          </button>
        </Link>
      </div>

      <div className="hidden shadow-sm rouded-sm bg-gray-100 md:block w-[70%] border-2 min-h-[400px] overflow-auto  ">
        <h1 className="text-2xl py-2 px-2 border-b-2 border-lime-700">
          {`Your Collection for ${author}`}
        </h1>
        <ShowSavedCollection author={author} />
      </div>
    </>
  );
};

export default Collection;
