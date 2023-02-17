import Collection from "@/components/Collection";
import ShowQuotes from "@/components/ShowQuotes";

export default function Home() {
  return (
    <div>
      <div className="md:flex h-screen">
        <ShowQuotes />
        <Collection />
      </div>
    </div>
  );
}
