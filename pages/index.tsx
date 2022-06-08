import Main from "../components/Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ternoa MarketPlace</title>
        <link rel="icon" href="https://res.cloudinary.com/dfi24gqb6/image/upload/v1654678416/9291_blen5k.png"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main />
    </>
  );
}
