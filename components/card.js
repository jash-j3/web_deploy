import Image from "next/image";

export default function Card({ title, description, imgSrc }) {
  return (
    <>
      <div className="p-4 min-w-[33%] max-w-[50%]">
        <Image
          src={imgSrc}
          alt={`Cover Image for ${title}`}
          layout="responsive"
          width={200}
          height={200}
        />
        <h1 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {title}
        </h1>
        <p className="mb-3 dark:text-gray-400">{description}</p>
      </div>
    </>
  );
}
