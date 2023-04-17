import Document, { Html, Head, Main, NextScript } from "next/document";
export const MainColor = "#ff8375";
export const SecondColor = "#FF9A8F";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Jua&family=Oswald:wght@600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
