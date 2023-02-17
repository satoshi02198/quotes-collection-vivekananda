import Collection from "@/components/Collection";
import ShowQuotes from "@/components/ShowQuotes";
import Test from "@/components/Test";

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
