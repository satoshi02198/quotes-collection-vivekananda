"use client";
import { Toaster } from "react-hot-toast";

const ClientProvider = () => {
  return (
    <>
      <Toaster
        position="top-center"
        containerStyle={{
          top: 80,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
    </>
  );
};

export default ClientProvider;
