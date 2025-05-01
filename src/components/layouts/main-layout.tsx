import React from "react";
import { Navbar } from "../organims/navbar";
import { Sidebar } from "../organims/sidebar";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="ml-12 flex-1 grow">{children}</div>
      </div>
    </>
  );
};
