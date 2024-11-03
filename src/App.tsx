import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home";


import { NotFound } from "./components/NotFound/NotFound";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route index={true} path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
