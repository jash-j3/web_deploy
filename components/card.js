import Image from "next/image";
import GithubIcon from "./icons/github";

export default function Card({ title, description, imgSrc }) {
  return (
    <>
      {/* <div className="basic-1/3 md:basis-1/4 p-4 m-4 min-w-[30%] max-w-[50%] rounded-lg border-2 border-white"> */}
      <div className="md p-4 m-2 mt-4 md:w-1/3 max-w-[400px] rounded-lg border-2 border-white">
        <Image
          src={imgSrc}
          alt={`Cover Image for ${title}`}
          layout="responsive"
          width={400}
          height={300}
        />
        <h1 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-center dark:text-gray-400">
          {title}
        </h1>
        <p className="mb-3 dark:text-gray-400">{description}</p>
        <GithubIcon />
      </div>
    </>
  );
}
