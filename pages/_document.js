import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-slate-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
