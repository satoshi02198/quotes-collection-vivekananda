import { AuthorInfo } from "@/infos/AuthorInfo";
import LandingProfiles from "@/components/Authors/LandingProfiles";
import Test from "@/components/Test";

export default function Home() {
  return (
    <>
      <div className="h-screen sm:h-full sm:mb-4 2xl:h-screen">
        <div className="w-[80%] max-w-lg flex flex-col justify-center items-center mx-auto mt-6 p-2 space-y-2 border-2 border-lime-700">
          <h1 className="text-md font-medium">
            Let`s find your favorite quotes
          </h1>
          <p className="text-sm">1, Click one of them</p>
          <p className="text-sm">2, Find quotes and collect!</p>
        </div>
        <div className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 2xl:grid 2xl:grid-cols-5 space-y-2 mt-6 sm:mt-10 sm:space-x-6 max-w-6xl mx-auto">
          {AuthorInfo?.map((author, index) => (
            <LandingProfiles key={index + 1} authorInfo={author} />
          ))}{" "}
        </div>
      </div>

      {/* <Test /> */}
    </>
  );
}
