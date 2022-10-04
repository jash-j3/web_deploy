import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Nav from "../components/nav";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div
        className="min-h-screen"
        style={{ width: "100%", height: "0.5rem", overflow: "visible" }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
