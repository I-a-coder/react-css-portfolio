import React, { createContext, useContext, useState, useEffect } from "react";

const PageTitleContext = createContext();

export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Home");

  // Update the browser tab title whenever the title changes
  useEffect(() => {
    document.title = pageTitle + " | Sadia Shafeeq Portfolio";
  }, [pageTitle]);

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};

export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error('usePageTitle must be used within a PageTitleProvider');
  }
  return context;
};