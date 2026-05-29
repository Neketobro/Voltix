import type React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ActionPanel } from "../ActionPanel";
type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-[10px] sm:px-[100px] w-full mb-[20px] gap-[5px] md:gap-[10px]">
        {children}

        <div className="flex xl:hidden bg-(--primary) dark:bg-(--primary) items-center justify-center px-6 py-1 md:py-2 rounded-sm fixed left-1/2 -translate-x-1/2 bottom-[10px] transform=[translate(-50% -50%)]">
          <ActionPanel />
        </div>
      </div>
      <Footer />
    </div>
  );
}
