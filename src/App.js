import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageTitleProvider } from "./context/PageTitleContext";
import Layout from "./layouts/Layout/Layout";

// Pages
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Leadership from "./pages/Leadership/Leadership";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <PageTitleProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </PageTitleProvider>
  );
}

export default App;