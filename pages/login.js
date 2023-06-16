import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    // Redirect to the orientation page
  }

  return (
    <Layout>
      <Head>
        <title>&lt; Login /&gt;</title>
      </Head>
      <Container>
        <h1>Login</h1>
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
        {!session && (
          <>
            Not signed in <br />
            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              onClick={() => signIn()}
            >
              Sign in with Google
            </button>
          </>
        )}
      </Container>
    </Layout>
  );
}
