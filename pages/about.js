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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin
            eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet.
            Duis dapibus diam vel metus tempus vulputate.Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </Container>
      </Layout>
    </>
  );
}
