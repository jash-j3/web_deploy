import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head />
        <body className="bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
