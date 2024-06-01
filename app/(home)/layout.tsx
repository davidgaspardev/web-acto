import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";

export const metadata = {
  title: 'Acto Academia',
}

type BranchesLayoutProps = {
  children: React.ReactNode;
}

export default function BrancheLayout(props: BranchesLayoutProps) {
  const { children } = props;

  return (
    <main className="pt-16 bg-white">
      <Header />
      <Banner />
      {children}
      <Footer/>
    </main>
  );
}
