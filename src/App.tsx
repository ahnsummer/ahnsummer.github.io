import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { AppRoutes } from "./router";
// import { AppRoutes } from "@/router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
