import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Scheduler from "./components/Scheduler";
import User from "./components/User";
import Header from "./components/Header";
import TemplateBuilder from "./components/TemplateBuilder";
import Dashboard from "./components/Dashboard";
import AdPost from "./components/AdPost";
import Admin from "./components/Admin";
import ServiceClient from "./components/ServiceClient";

export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="scheduler" element={<Scheduler />} />
          <Route path="user" element={<User />} />
          <Route path="admin" element={<Admin />} />
          <Route path="template" element={<TemplateBuilder />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="adv" element={<AdPost />} />
          <Route path="clients" element={<ServiceClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}