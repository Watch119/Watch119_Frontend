import React from "react";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import SocialLogin from "./SocialLogin";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout"; 

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 레이아웃 없이 보여줘야 하는 라우트들 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sociallogin" element={<SocialLogin />} />

        {/* 레이아웃이 적용되는 라우트들 */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* 다른 내부 라우트들 여기 추가 가능 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
