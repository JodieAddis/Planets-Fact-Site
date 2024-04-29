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
      <footer className="flex h-10 items-center justify-center pt-20">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
