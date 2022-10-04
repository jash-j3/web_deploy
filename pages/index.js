import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Trio from "../components/trio";
import { getAllPosts } from "../lib/api";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];

  return (
    <>
      <Layout>
        <Head>
          <title>&lt; Lambda /&gt;</title>
        </Head>
        <Container>
          <Intro />
          {/* Will loop over this Trio element to render more posts */}
          <Container>
            <Trio heroPost={heroPost} morePosts={[]} />
          </Container>
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
