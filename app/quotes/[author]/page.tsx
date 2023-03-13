import AuthorProfile from "@/components/Authors/AuthorProfile";
import { AuthorInfo } from "@/infos/AuthorInfo";
import BottomContents from "@/components/BottomContents";

type Props = {
  params: {
    author: string;
  };
};

const Page = ({ params: { author } }: Props) => {
  return (
    <div>
      {AuthorInfo?.map((authorInfo, index) => (
        <AuthorProfile
          key={index + 1}
          authorInfo={authorInfo}
          pathAuthorName={author}
        />
      ))}
      <BottomContents author={author} />
    </div>
  );
};

export default Page;
