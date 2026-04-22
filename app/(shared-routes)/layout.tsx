import React from "react";
import Navbar from "../navbar/page";

export default function SharedRoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
