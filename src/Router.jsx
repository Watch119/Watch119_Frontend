import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default Router;
