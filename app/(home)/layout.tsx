import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Acto Academia',
  description: "Proporcionamos um ambiente inclusivo e motivador para todos os níveis de aptidão. Serviço excepcional, treinamento personalizado e soluções inovadoras de fitness para sua qualidade de vida.",
  openGraph: {
    url: "https://www.actoacademia.com.br/",
    type: "website",
    title: "Acto Academia",
    description: "Proporcionamos um ambiente inclusivo e motivador para todos os níveis de aptidão. Serviço excepcional, treinamento personalizado e soluções inovadoras de fitness para sua qualidade de vida.",
    images: "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/seo%2Fbanner-thumbnail.png?alt=media&token=3858196c-570a-49a3-81f1-34a8115064fe"
  },
  icons: [
    {
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      sizes: "48x48",
      url: "/favicon-48x48.png",
    },
    {
      sizes: "192x192",
      url: "/favicon-192x192.png",
    },
    {
      sizes: "512x512",
      url: "/favicon-512x512.png",
    },
    {
      sizes: "180x180",
      rel: "apple-touch-icon",
      url: "/apple-touch-icon-180x180.png",
    }
  ]
}

type BranchesLayoutProps = {
  children: React.ReactNode;
}

export default function BranchLayout(props: BranchesLayoutProps) {
  const { children } = props;

  return (
    <html lang="pt-br">
      <head>
        <Script
          id="facebook-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1271906727305977');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1271906727305977&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
      </head>
      <body>
        <main className="pt-16 bg-white">
          <Header />
          <Banner />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
