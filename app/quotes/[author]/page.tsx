import AuthorProfile from "@/components/Authors/AuthorProfile";
import Collection from "@/components/RelatedCollection/Collection";
import Showquotes from "@/components/RelatedQuotes/Showquotes";
import { AuthorInfo } from "@/AuthorInfo";

type Props = {
  params: {
    author: string;
  };
};

const Page = ({ params: { author } }: Props) => {
  return (
    <div>
      {AuthorInfo?.map((author, index) => (
        <AuthorProfile key={index + 1} authorInfo={author} />
      ))}
      <div className="flex flex-col items-center space-y-8 md:flex md:flex-row md:items-baseline md:space-x-10 h-auto md:mb-20 mx-2 mb-5">
        <Showquotes author={author} />
        <Collection author={author} />
      </div>
    </div>
  );
};

export default Page;
