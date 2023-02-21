import Collection from "@/components/Collection";
import ShowQuotes from "@/components/ShowQuotes";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center space-y-8 md:flex h-screen">
        <ShowQuotes />
        <Collection />
      </div>
    </div>
  );
}
