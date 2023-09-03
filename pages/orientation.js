import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useSession, signIn, signOut } from "next-auth/react";

import Layout from "../components/layout";
import Container from "../components/container";

export default function Orientation() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    console.log("sign in successful", session);
    if (!session.user.email.endsWith("@iith.ac.in")) {
      alert("Please sign in with your IITH email");
      signOut();
    }
    router.push(`/submit`);
  }

  return (
    <Layout>
      <Head>
        <title>&lt; Lambda /&gt; | Orientation</title>
      </Head>
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">
          <Link href="/">
            <a className="hover:underline text-purple-400 cursor-alias">
              $ cd ~
            </a>
          </Link>
        </h2>
        {!session && (
          <>
            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              onClick={() => signIn()}
            >
              Sign in with Google
            </button>
          </>
        )}
        {session && (
          <>
            <div className="pt-5 dark:text-gray-50/80">
              {" "}
              Signed in as {session.user.name}
            </div>
          </>
        )}
      </Container>
    </Layout>
  );
}
