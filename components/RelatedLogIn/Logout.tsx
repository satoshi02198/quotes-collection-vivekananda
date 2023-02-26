"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";

type Props = {
  session: object;
  toggle: any;
};

const Logout = ({ session, toggle }: Props) => {
  const { user }: any = session;

  return (
    <div>
      <Image
        src={user.image}
        width={40}
        height={40}
        alt={user.name}
        className="rounded-full cursor-pointer "
        onClick={() => toggle()}
      />
    </div>
  );
};

export default Logout;
