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
    <div className="flex flex-col items-center">
      <Link href={`/quotes/${pathName}`}>
        <div className="cursor-pointer">
          <Image src={src} width={400} height={400} alt={name} />
        </div>
      </Link>
      <h2 className="text-3xl mt-3">{name}</h2>
    </div>
  );
};

export default LandingProfiles;
