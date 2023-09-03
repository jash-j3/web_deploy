import lambdaImage from "../public/static/images/Lambda-Banner.png";
import Link from "next/link";
import { Image } from "next/image";
import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <>
      <div className="bg-slate-950 px-4 py-6">
        <div className="hidden sm:flex flex-row justify-between">
          <div className="logo flex flex-row ml-6">
            <div className="text-gray-100 font-medium flex flex-row">
              <Link href="/" aria-label="Lambda logo" title="Homepage">
                <a className="text-gray-100 font-medium">
                  <img src={lambdaImage.src} style={{ height: "5vh" }} />
                </a>
              </Link>
              <Link href="/" aria-label="Lambda logo" title="Homepage">
                <a className="text-gray-100 text-2xl mt-1 ml-4">
                  | &nbsp; Lambda
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-row">
            <ul className="flex flex-row font-medium text-gray-100 mt-2">
              <li className="mx-6 hover:text-fuchsia-400 ">
                <Link href="/" aria-label="" title="">
                  <a className="">About</a>
                </Link>
              </li>
              <li className="mx-6 hover:text-fuchsia-400 ">
                <Link href="/blog" aria-label="" title="">
                  <a className="">Blog</a>
                </Link>
              </li>

              <li className="mx-6 hover:text-fuchsia-400 ">
                <Link href="/projects" aria-label="" title="">
                  <a className="">Projects</a>
                </Link>
              </li>
              <li className="mx-6 hover:text-fuchsia-400 ">
                <Link href="/team" aria-label="" title="">
                  <a className="">Team</a>
                </Link>
              </li>
              <li className="mx-6 hover:text-fuchsia-400 ">
                <Link href="/orientation" aria-label="" title="">
                  <a className="">Orientation</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <MobileNav />
      </div>
    </>
  );
}
