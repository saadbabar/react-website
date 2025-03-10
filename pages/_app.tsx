import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script'; // Import Script from Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      {/* Google Analytics Tag */}
      <Script
        strategy="afterInteractive" // Ensure the script loads after the page is interactive
        src={`https://www.googletagmanager.com/gtag/js?id=G-1S41ND413L`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive" // Same as above
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1S41ND413L', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
