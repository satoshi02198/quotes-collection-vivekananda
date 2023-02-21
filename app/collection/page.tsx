import ShowSavedCollection from "@/components/ShowSavedCollection";

const SavedCollection = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-2xl border-b-2 border-lime-600 my-2 mb-4">
        Your Collection
      </h1>
      <ShowSavedCollection />
    </div>
  );
};

export default SavedCollection;
