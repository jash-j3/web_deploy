import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        {/* Above line makes that top alert appear */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
