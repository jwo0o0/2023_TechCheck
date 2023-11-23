import Head from "next/head";
import LandingPage from "@/components/landing/LandingPage";
import { Layout } from "@/components/common/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>2023 Tech Check</title>
        <meta name="description" content="2023 테크 이슈를 정리하세요." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  );
}
