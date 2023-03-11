"use client";

import Log from "../RelatedLogIn/Log";
import Test from "../Test";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import LoginModal from "../RelatedLogIn/LoginModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   const hideMenu = () => {
  //     if (window.innerWidth > 768 && isOpen) {
  //       setIsOpen(false);
  //     }
  //   };
  //   window.addEventListener("resize", hideMenu);

  //   return () => window.removeEventListener("resize", hideMenu);
  // });

  return (
    <div className="flex items-center justify-between p-3 bg-gradient-to-b from-orange-300 to-orange-200 relative">
      <div>
        <Link href="/">
          {" "}
          <h1 className="font-bold text-2xl">Quotes Collection</h1>
        </Link>
      </div>
      {/* <Test /> */}
      <div
        className="flex
      space-x-6"
      >
        <div className="hidden sm:flex justify-center items-center ">
          <Log toggle={toggle} setIsModalOpen={setIsModalOpen} />
        </div>
        {isOpen ? (
          <XMarkIcon className="w-10 h-10 sm:hidden" onClick={() => toggle()} />
        ) : (
          <Bars3Icon className="w-10 h-10 sm:hidden" onClick={() => toggle()} />
        )}

        {isOpen && (
          <DropdownMenu setIsOpen={setIsOpen} setIsModalOpen={setIsModalOpen} />
        )}
      </div>
      {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Header;
