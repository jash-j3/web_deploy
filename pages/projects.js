import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import HomeRedirect from "../components/home-redirect";
import Card from "../components/card";
import HorizontalRule from "../components/HorizontalRule";

import lambdaImage from "/public/static/images/Lambda-Banner.png";

const projects = [
  {
    title: "IITH Dashboard",
    description:
      "An android app for IITH students to view the mess, transport and academic details.",
    repositoryLink: "https://github.com/LambdaIITH/IITH-Dashboard-Android",
    imgSrc: "/static/images/projects/iith-dashboard.png",
  },
  {
    title: "IITH Dashboard PWA",
    description: "Dashboard as a Progressive Web App for cross platform usage.",
    repositoryLink: "https://github.com/LambdaIITH/iith-dashboard-pwa",
    imgSrc: "/static/images/projects/iith-dashboard.png",
  },
  {
    title: "AIMS Helper Chrome",
    description:
      "A cross-browser helper extension to generate time table and grade card from AIMS portal.",
    repositoryLink: "https://github.com/LambdaIITH/AIMS-Helper-Chrome",
    imgSrc: "/static/images/projects/aims-logo.png",
  },
  {
    title: "Lambda Blog",
    description: "The blog for Lambda - The Software Development Club of IITH.",
    repositoryLink: "https://github.com/LambdaIITH/website",
    imgSrc: "/static/images/projects/lambda_logo.jpg",
  },
  {
    title: "Infero Blog",
    description: "The blog for Infero - The Competitive Coding Club of IITH.",
    repositoryLink: "https://github.com/LambdaIITH/InferoBlog",
    imgSrc: "/static/images/projects/lambda_logo.jpg",
  },
];

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
          <div className="flex flex-wrap pt-5 -m-4 mb-4">
            {projects.map((project) => (
              <Card
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                repositoryLink={project.repositoryLink}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
