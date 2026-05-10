import type React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
