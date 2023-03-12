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
    <>
      {/* FOR SMALL */}
      <div className="sm:hidden w-[90%] mx-auto h-20 ">
        <Link href={`/quotes/${pathName}`}>
          <div className="flex justify-start items-center border-2 rounded-md  shadow-sm hover:bg-gray-100 hover:shadow-md focus:bg-gray-100 active:bg-gray-200 transition duration-200 ease-in-out cursor-pointer">
            <Image
              src={src}
              width={500}
              height={500}
              alt={name}
              className="rounded-l-md w-20 h-20 "
            />
            <div>
              <div className="">
                <p className="text-lg ml-3">{name}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* FOR DESKTOP */}
      <div className="hidden sm:flex flex-col items-center text-center">
        <Link href={`/quotes/${pathName}`}>
          <div className="cursor-pointer rounded-sm">
            <Image
              src={src}
              width={500}
              height={500}
              alt={name}
              className="w-80 h-80 "
            />
          </div>
        </Link>
        <h2 className="text-xl sm:text-2xl mt-2 sm:mt-3">{name}</h2>
      </div>
    </>
  );
};

export default LandingProfiles;
