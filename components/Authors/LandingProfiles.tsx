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

const LandingProfiles = ({ authorInfo }: Props) => {
  const { name, src, bio, pathName } = authorInfo;
  return (
    <div className="flex flex-col items-center py-4 mt-10 border-2 mx-2 mb-5">
      <Link href={`/quotes/${pathName}`}>
        <div className="cursor-pointer">
          <Image src={src} width={300} height={300} alt={name} />
        </div>
      </Link>
      <h2 className="text-3xl py-3">{name}</h2>
    </div>
  );
};

export default LandingProfiles;
