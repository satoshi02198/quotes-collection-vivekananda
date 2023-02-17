import { DocumentData } from "firebase/firestore";
import { HeartIcon, BookmarkSquareIcon } from "@heroicons/react/24/outline";

type Props = {
  chapter_2: DocumentData;
};

const Quote = ({ chapter_2 }: Props) => {
  const { id, text, resource, resource_page } = chapter_2;

  return (
    <div className="bg-gray-50 border-1 shadow-sm w-full h-auto p-2">
      <p className="text-md">“{text}”</p>
      <p className="text-xs text-gray-300 mt-1">
        {resource} :{resource_page}
      </p>
      <div className="flex justify-end mt-3">
        <HeartIcon className="w-4 h-4" />
        <BookmarkSquareIcon className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Quote;
