import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import HomeRedirect from "../components/home-redirect";
import Card from "../components/card";

const projects = [];

export default function Projects() {
  return (
    <>
      <Layout>
        <Head>
          <title>&lt; Lambda /&gt; | Projects</title>
        </Head>
        <Container>
          <HomeRedirect />
          <div className="flex flex-row flex-wrap">
            <Card
              imgSrc={
                "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/linkedin-link-stickers-62f1772754c2e-sej-1520x800.png"
              }
              title={"Project 1"}
              description={"This is a project"}
            />
            <Card
              imgSrc={
                "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/linkedin-link-stickers-62f1772754c2e-sej-1520x800.png"
              }
              title={"Project 1"}
              description={"This is a project"}
            />
            <Card
              imgSrc={
                "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/linkedin-link-stickers-62f1772754c2e-sej-1520x800.png"
              }
              title={"Project 1"}
              description={"This is a project"}
            />
            <Card
              imgSrc={
                "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/linkedin-link-stickers-62f1772754c2e-sej-1520x800.png"
              }
              title={"Project 1"}
              description={"This is a project"}
            />
            <Card
              imgSrc={
                "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/linkedin-link-stickers-62f1772754c2e-sej-1520x800.png"
              }
              title={"Project 1"}
              description={"This is a project"}
            />
            <Card
              imgSrc={
                "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/linkedin-link-stickers-62f1772754c2e-sej-1520x800.png"
              }
              title={"Project 1"}
              description={"This is a project"}
            />
          </div>
        </Container>
      </Layout>
    </>
  );
}
