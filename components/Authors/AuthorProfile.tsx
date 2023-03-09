import Image from "next/image";
import Link from "next/link";

type Props = {
  authorInfo: {
    name: string;
    src: string;
    bio: string;
    pathName: string;
  };
  pathAuthorName: string;
};

const AuthorProfile = ({ authorInfo, pathAuthorName }: Props) => {
  const { name, src, bio, pathName } = authorInfo;

  return (
    <div>
      {pathAuthorName === pathName ? (
        <div className="flex flex-col items-center py-4 mt-10  mx-2 mb-5 border-2 rounded-sm">
          <div className="">
            <Image
              src={src}
              width={300}
              height={300}
              alt={name}
              className="w-80 h-80 rounded-sm"
            />
          </div>
          <h2 className="text-3xl py-3">{name}</h2>
          <p className="max-w-[600px] leading-normal p-3 text-center">{bio}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AuthorProfile;
