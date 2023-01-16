import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "@/pages";
import Resume from "@/pages/resume";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};
