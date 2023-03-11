import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type DropdownMenuProps = {
  setIsOpen: (arg0: boolean) => void;
  setIsModalOpen: (arg0: boolean) => void;
};

const DropdownMenu = ({ setIsOpen, setIsModalOpen }: any) => {
  const { data: session } = useSession();

  return (
    <div className="mx-auto w-[95%] absolute top-14 right-3 z-50 grid grid-rows-3 items-center text-center bg-gray-50  rounded-md sm:w-[300px] sm:text-left shadow-md">
      <Link href="/">
        <div
          onClick={() => setIsOpen(false)}
          className="text-xl rounded-t-md border-b border-lime-800 py-4 hover:bg-gray-100 focus:bg-gray-100 active:bg-slate-200 transition duration-200 ease-in-out sm:border-none sm:pl-3 sm:py-2"
        >
          Home
        </div>
      </Link>

      <Link href="/collection">
        <div
          onClick={() => setIsOpen(false)}
          className="text-xl border-b border-lime-800 py-4 hover:bg-gray-100 focus:bg-gray-100 active:bg-slate-200 transition duration-200 ease-in-out sm:border-none sm:pl-3 sm:py-2"
        >
          Your Collection
        </div>
      </Link>

      {session ? (
        <div
          onClick={() => {
            signOut();
            setIsOpen(false);
          }}
          className="text-xl py-4 rounded-md hover:bg-gray-100 hover:cursor-pointer focus:bg-gray-100 active:bg-slate-200 transition duration-200 ease-in-out sm:border-none sm:pl-3 sm:py-2"
        >
          Log Out
        </div>
      ) : (
        <div
          onClick={() => setIsModalOpen(true)}
          className="text-xl py-4 rounded-md hover:bg-gray-100 hover:cursor-pointer focus:bg-gray-100 active:bg-slate-200 transition duration-200 ease-in-out sm:border-none sm:pl-3 sm:py-2"
        >
          <p className="ml-3">Log In </p>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
