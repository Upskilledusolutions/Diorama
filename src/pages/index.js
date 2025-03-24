import BelowHero from "@/Components/Home/BelowHero";
import Blobslider from "@/Components/Home/Blobslider";
import Hero from "@/Components/Home/Hero";
import Kids from "@/Components/Home/Kids";
import News from "@/Components/Home/News";
import Runner from "@/Components/Home/Runner";
import Testimonails from "@/Components/Home/Testimonails";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Diorama</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <BelowHero />
        <Blobslider />
        <Kids />
        <Runner />
        <News />
        <Testimonails />
        {/* <FinalCards /> */}
      </main>
    </>
  );
}
