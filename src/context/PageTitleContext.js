import React, { createContext, useState, useEffect } from "react";

export const PageTitleContext = createContext();

export function PageTitleProvider({ children }) {
  const [title, setTitle] = useState("Home");

  // Update the browser tab title whenever the title changes
  useEffect(() => {
    document.title = title + " | Sadia Shafeeq Portfolio";
  }, [title]);

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}