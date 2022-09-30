import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>&lt; Lambda /&gt;</title>
        </Head>
        <Container>
          <Intro />
          {/* Will loop over this Trio element to render more posts */}
        </Container>
      </Layout>
    </>
  );
}
