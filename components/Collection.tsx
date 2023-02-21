"use client";
import Link from "next/link";

const Collection = () => {
  return (
    <div className="">
      <Link href="/collection">
        <button className="bg-lime-700 text-gray-100 shadow-sm rounded px-4 py-2 hover:bg-lime-600 focus:outline-none active:bg-lime-800 transition duration-200 ease-in-out">
          See your Collection
        </button>
      </Link>
    </div>
  );
};

export default Collection;
