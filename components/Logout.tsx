"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";

type Props = {
  session: object;
};

const Logout = ({ session }: Props) => {
  const { user }: any = session;
  console.log(session);

  return (
    <div>
      <Image
        src={user.image}
        width={40}
        height={40}
        alt={user.name}
        className="rounded-full cursor-pointer "
        onClick={() => signOut()}
      />
    </div>
  );
};

export default Logout;
