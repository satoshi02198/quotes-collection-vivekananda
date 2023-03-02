import { AuthorInfo } from "@/AuthorInfo";
import LandingProfiles from "@/components/Authors/LandingProfiles";
import Test from "@/components/Test";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen space-x-6">
      {AuthorInfo?.map((author, index) => (
        <LandingProfiles key={index + 1} authorInfo={author} />
      ))}
      {/* <Test /> */}
    </div>
  );
}
