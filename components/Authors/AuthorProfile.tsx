import Image from "next/image";
import Link from "next/link";

type Props = {
  authorInfo: {
    name: string;
    src: string;
    bio: string;
    pathName: string;
  };
};

const AuthorProfile = ({ authorInfo }: Props) => {
  const { name, src, bio, pathName } = authorInfo;

  return (
    <div className="flex flex-col items-center py-4 mt-10 border-2 mx-2 mb-5">
      <div className="cursor-pointer">
        <Link href={`/quotes/${pathName}`}>
          <Image src={src} width={300} height={300} alt={name} />
        </Link>
      </div>
      <h2 className="text-3xl py-3">{name}</h2>
      <p className="max-w-[600px] leading-normal p-3 text-center">{bio}</p>
    </div>
  );
};

export default AuthorProfile;
