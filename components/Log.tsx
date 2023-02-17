"use client";
import { useSession } from "next-auth/react";

import Login from "@/components/Login";
import Logout from "@/components/Logout";

const Log = () => {
  const { data: session } = useSession();

  return <div>{session ? <Logout session={session} /> : <Login />}</div>;
};

export default Log;
