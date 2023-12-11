import Head from "next/head";
import LandingPage from "@/components/landing/LandingPage";
import { useEffect } from "react";

export default function Home() {
  //mobile height size 설정
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <>
      <Head>
        <title>2023 Tech Check</title>
        <meta property="og:titme" content="2023 Tech Check" />
        <meta
          property="og:description"
          content="2023 테크 이슈를 정리하세요."
        />
        <meta property="og:image" content="/images/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  );
}
