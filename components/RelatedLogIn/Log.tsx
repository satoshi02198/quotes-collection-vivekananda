"use client";
import { useSession } from "next-auth/react";

import Login from "@/components/RelatedLogIn/Login";
import Logout from "@/components/RelatedLogIn/Logout";

const Log = ({ toggle, setIsModalOpen }: any) => {
  const { data: session } = useSession();
  console.log("🚀 ~ Log ~ session:", session);

  return (
    <div>
      {session ? (
        <Logout session={session} toggle={toggle} />
      ) : (
        <Login setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default Log;
