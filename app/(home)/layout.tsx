import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { Metadata } from "next";

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
