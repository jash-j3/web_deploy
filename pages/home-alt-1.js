import Layout from '../components/layout';
import { Content } from '../components/style1/quick-links';
import { TwoBlock } from '../components/style1/two-block';
import { Header } from '../components/style1/header1';
import { TwoCard } from '../components/style1/two-card';
import { Faq } from '../components/style1/qna1';
import { Footer1 } from '../components/style1/footer1';
import { Blog1 } from '../components/style1/blog1';
import { Blog2 } from '../components/style1/blog2';
import { Nav } from '../components/style1/nav1';

export default function Test1() {
  return (
    <Layout>
      <Nav/>
      <Header />
      <Content />
      <TwoBlock />
      <TwoCard />
      <Blog1 />
      <Blog2 />
      <Faq />
      <Footer1 />
    </Layout>
  )
}