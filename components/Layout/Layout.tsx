import React, { ReactNode } from "react";
import Header from "../Heder/Header";
import Footer from "../Footer/Footer";

type LayoutTypes = {
  children?: ReactNode[] | ReactNode;
};

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
