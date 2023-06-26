import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import MoreInfos from "./MoreInfos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-infos/:id" element={<MoreInfos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
