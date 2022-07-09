import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Trio from '../components/trio'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>&lt; Lambda /&gt;</title>
        </Head>
        <Container>
          <Intro />
          <Trio heroPost={heroPost} morePosts={morePosts}/>
          {/* Will loop over this Trio element to render more posts */}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
