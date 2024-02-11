import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Layout from "./components/Layout/Layout";
import { Toaster } from "react-hot-toast";
const App = () => {
  const isUser = localStorage.getItem("user");

  return (
    <Layout>
      <Toaster />
      <Routes>
        {isUser ? (
          <Route path="/" element={<Home />} />
        ) : (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </Layout>
  );
};

export default App;
