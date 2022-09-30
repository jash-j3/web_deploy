import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import HomeRedirect from "../components/home-redirect";
import Card from "../components/card";
import HorizontalRule from "../components/HorizontalRule";

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
          <h1 className="text-3xl sm:text-4xl md:text-6xl dark:text-gray-100 font-extrabold leading-9 sm:leading-10 md:leading-14 tracking-tight pb-2">
            Projects
          </h1>
          <HorizontalRule />
          <div className="flex flex-row flex-wrap pt-5">
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
