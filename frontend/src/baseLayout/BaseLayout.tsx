import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../app/components/Navbar";
import Footer from "../app/components/Footer";

const BaseLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
