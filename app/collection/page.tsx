import YourCollection from "@/components/RelatedCollection/YourCollection";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const SavedCollection = () => {
  return (
    <div className="h-screen flex flex-col items-center mx-2">
      <h1 className="text-2xl border-b-2 border-lime-600 my-2 mb-4">
        Your Collection
      </h1>

      <YourCollection />
      <div className="flex space-x-1 justify-center items-center">
        <ArrowLeftIcon className="w-4 h-4" />
        <a href="/" className="text-sm cursor-pointer border-b">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default SavedCollection;
