import { AuthorInfo } from "@/AuthorInfo";
import LandingProfiles from "@/components/Authors/LandingProfiles";
import Test from "@/components/Test";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full sm:h-screen  space-y-4 mt-4 sm:space-x-6 max-w-6xl mx-auto">
      {AuthorInfo?.map((author, index) => (
        <LandingProfiles key={index + 1} authorInfo={author} />
      ))}
      {/* <Test /> */}
    </div>
  );
}
