import { ReactNode } from "react";
import {Navbar} from "./Navbar/Navbar";
import {Footer} from "./Footer/Footer";


interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
