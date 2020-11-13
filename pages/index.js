import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";

import Button from "components/Button";
import Conditions from "components/Conditions";
import H1 from "components/H1";

const Home = () => {
  const PWAPrompt = dynamic(() => import("react-ios-pwa-prompt"), {
    ssr: false,
  });

  const [isDebug, setIsDebug] = useState(false);

  return (
    <>
      <Head>
        <title>Demo | React-iOS-PWA-prompt</title>
        <meta
          name="description"
          content="A demo site for the React-iOS-PWA-prompt package. Easily support PWA prompting on iOS."
        />
        <meta
          name="keywords"
          content="PWA, prompt, add to home screen, iOS, progressive web app, native, react"
        />
      </Head>

      <PWAPrompt
        timesToShow={50}
        permanentlyHideOnDismiss={false}
        debug={isDebug}
      />

      <div>
        <H1>React-iOS-PWA-prompt</H1>
        <Conditions />
        <Button onClick={() => setIsDebug(Math.random())}>Force prompt</Button>
      </div>

      <style jsx>{`
        div {
          margin: 20px;
          padding: 20px;
        }
      `}</style>
    </>
  );
};

export default Home;
