"use client";
import { useSession } from "next-auth/react";

import Login from "@/components/Login";
import Logout from "@/components/Logout";

const Log = ({ toggle }: any) => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? <Logout session={session} toggle={toggle} /> : <Login />}
    </div>
  );
};

export default Log;
