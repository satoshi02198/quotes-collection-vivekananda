import Collection from "@/components/Collection";
import ShowQuotes from "@/components/ShowQuotes";
import SwamijiProfile from "@/components/SwamijiProfile";

export default function Home() {
  return (
    <div>
      <SwamijiProfile />
      <div className="flex flex-col items-center space-y-8 md:flex md:flex-row md:items-baseline md:space-x-10 h-screen mx-2">
        <ShowQuotes />
        <Collection />
      </div>
    </div>
  );
}
