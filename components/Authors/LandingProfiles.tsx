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
    <div className="flex flex-col items-center w-full h-full sm:h-auto">
      <Link href={`/quotes/${pathName}`}>
        <div className="cursor-pointer">
          <Image src={src} width={250} height={250} alt={name} />
        </div>
      </Link>
      <h2 className="text-xl sm:text-2xl mt-2 sm:mt-3">{name}</h2>
    </div>
  );
};

export default LandingProfiles;
