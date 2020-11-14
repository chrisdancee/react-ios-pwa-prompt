function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <style jsx global>{`
        body {
          border: 20px solid #e31c5f;
          height: calc(100vh - 40px);
          margin: 0;
          padding: 0;
          width: calc(100vw - 40px);
        }
      `}</style>
    </>
  );
}

export default MyApp;
