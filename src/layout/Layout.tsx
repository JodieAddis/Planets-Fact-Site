import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="mt-6 md:mt-8 lg:mt-6">
        <Header />
        <div className="border-b-solid border-b-[1px] border-b-white pb-6 md:pb-8 lg:pb-6"></div>
      </header>
      <main className="flex items-center justify-center">{children}</main>
      <footer className="mb-4 mt-10 flex h-10 items-center justify-center lg:mt-20">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
