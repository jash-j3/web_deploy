import lambdaImage from "../public/Lambda-Banner.png";
import Link from "next/link";
import { Image } from "next/image";

const headerNavLinks = [
  { name: "Team", href: "/team" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
];

export default function Nav() {
  return (
    <>
      <div className="bg-gray-900">
        <ul className="flex flex-row justify-center px-4 py-6 items-center font-medium text-gray-100">
          <li className="mx-10 hover:text-purple-200">
            <Link href="/about" aria-label="" title="">
              <a className="">About</a>
            </Link>
          </li>
          <li className="mx-10">
            <Link href="/blog" aria-label="" title="">
              <a className="">Blog</a>
            </Link>
          </li>
          <li className="mx-10">
            <Link href="/" aria-label="" title="">
              <a>
                <img src={lambdaImage.src} style={{ height: "5vh" }} />
              </a>
            </Link>
          </li>
          <li className="mx-10">
            <Link href="/projects" aria-label="" title="">
              <a className="">Projects</a>
            </Link>
          </li>
          <li className="mx-10">
            <Link href="/team" aria-label="" title="">
              <a className="">Team</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
