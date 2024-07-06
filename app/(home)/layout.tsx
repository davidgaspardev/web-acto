import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";

export const metadata = {
  title: 'Acto Academia',
  description: "Proporcionamos um ambiente inclusivo e motivador para todos os níveis de aptidão. Serviço excepcional, treinamento personalizado e soluções inovadoras de fitness para sua qualidade de vida.",
  openGraph: {
    url: "https://www.actoacademia.com.br/",
    type: "website",
    title: "Acto Academia",
    description: "Proporcionamos um ambiente inclusivo e motivador para todos os níveis de aptidão. Serviço excepcional, treinamento personalizado e soluções inovadoras de fitness para sua qualidade de vida.",
    image: "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/seo%2Fbanner-thumbnail.png?alt=media&token=3858196c-570a-49a3-81f1-34a8115064fe"
  }
}

type BranchesLayoutProps = {
  children: React.ReactNode;
}

export default function BranchLayout(props: BranchesLayoutProps) {
  const { children } = props;

  return (
    <html lang="pt-br">
      <head>
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />


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
