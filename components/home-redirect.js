import Link from "next/link";

export default function HomeRedirect() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">
      <Link href="/">
        <a className="hover:underline text-purple-400 cursor-alias">$ cd ~</a>
      </Link>
    </h2>
  );
}
