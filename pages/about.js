import Layout from "../components/layout";
import Head from "next/head";
import HomeRedirect from "../components/home-redirect";
import Container from "../components/container";
import HorizontalRule from "../components/HorizontalRule";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>&lt; Lambda /&gt; | About</title>
        </Head>
        <Container>
          <HomeRedirect />
          <h1 className="text-3xl sm:text-4xl md:text-6xl dark:text-gray-100 font-extrabold leading-9 sm:leading-10 md:leading-14 tracking-tight pb-2">
            About
          </h1>
          <HorizontalRule />
          <p className="pt-5 text-sm sm:text-base md:text-lg dark:text-gray-100 sm:leading-10 md:leading-14 tracking-tight">
            We are the software development club of IITH. We build solutions and
            help others to do the same. We are a community of developers. Over
            the years, we have built application useful for the IITH-community.
          </p>
        </Container>
      </Layout>
    </>
  );
}
