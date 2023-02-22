import Collection from "@/components/Collection";
import ShowQuotes from "@/components/ShowQuotes";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center space-y-8 md:flex md:flex-row md:items-baseline md:space-x-10 h-screen">
        <ShowQuotes />
        <Collection />
      </div>
    </div>
  );
}
