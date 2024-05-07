import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="mt-6">
        <Header />
        <div className="border-b-solid border-b-[1px] border-b-white pb-6"></div>
      </header>
      <main className="flex items-center justify-center">{children}</main>
      <footer className="mb-12 mt-20 flex h-10 items-center justify-center">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
