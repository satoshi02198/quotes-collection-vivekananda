import Image from "next/image";

const SwamijiProfile = () => {
  return (
    <div className="flex flex-col items-center py-4 mt-10 border-2 mx-2 mb-5">
      <div>
        <Image
          src="/swamivivekananda.jpg"
          width={300}
          height={300}
          alt="Swami Vivekananda"
        />
      </div>
      <h2 className="text-3xl py-3">Swami Vivekananda</h2>
      <p className="max-w-[600px] leading-normal p-3 text-center">
        Swami Vivekananda (12 January 1863 - 4 July 1902), born Narendranath
        Datta, was an Indian Hindu monk, philosopher, author, religious teacher,
        and the chief disciple of the Indian mystic Ramakrishna. He was a key
        figure in the introduction of Vedanta and Yoga to the Western world and
        is credited with raising interfaith awareness, and bringing Hinduism to
        the status of a major world religion.
      </p>
    </div>
  );
};

export default SwamijiProfile;
