import React from "react";
import { Sidebar, Navbar } from "../component/index.jsx";
import { Outlet } from "react-router-dom"; // 중첩 라우트용

const Layout = () => {
  console.log("accessToken", localStorage.getItem("accessToken"));

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
        <Sidebar />
      </div>

      <div className="bg-main-bg min-h-screen md:ml-72 w-full flex flex-col">
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full border-b-2">
          <Navbar />
        </div>

        <div className="flex-1 p-4">
          <Outlet /> {/* 자식 라우트 컴포넌트가 여기에 렌더링됨 */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
