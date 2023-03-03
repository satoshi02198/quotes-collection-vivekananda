"use client";

import React, { useState } from "react";
import LoginModal from "./RelatedLogIn/LoginModal";
import Collection from "./RelatedCollection/Collection";
import Showquotes from "./RelatedQuotes/Showquotes";
type Props = {
  author: string;
};
const BottomContents = ({ author }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-8 md:flex md:flex-row md:items-baseline md:space-x-10 h-auto md:mb-20 mx-2 mb-5">
        <Showquotes author={author} openModal={openModal} />

        <Collection author={author} openModal={openModal} />
      </div>
      {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default BottomContents;
