import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Divsection = React.lazy(() => import("pages/Divsection"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const Frame = React.lazy(() => import("pages/Frame"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frame" element={<Frame />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/divsection" element={<Divsection />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
