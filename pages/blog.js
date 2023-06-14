import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import HomeRedirect from "../components/home-redirect";
import HorizontalRule from "../components/HorizontalRule";
import Trio from "../components/trio";
import { getAllPosts } from "../lib/api";

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>&lt; Lambda /&gt; | Blog</title>
        </Head>
        <Container>
          <h1 className="text-3xl sm:text-4xl md:text-6xl dark:text-gray-100 font-extrabold leading-9 sm:leading-10 md:leading-14 tracking-tight pb-2 mt-8 mb-8 xl:mt-12 xl:mb-12">
            Lambda Blog
          </h1>
          <HorizontalRule />
          <Trio heroPost={heroPost} morePosts={morePosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
