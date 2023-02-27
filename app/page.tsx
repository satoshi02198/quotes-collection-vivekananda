import { AuthorInfo } from "@/AuthorInfo";
import LandingProfiles from "@/components/Authors/LandingProfiles";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      {AuthorInfo?.map((author, index) => (
        <LandingProfiles key={index + 1} authorInfo={author} />
      ))}
    </div>
  );
}
