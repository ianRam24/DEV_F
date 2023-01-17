import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import HomePage from "../pages/HomePage";
import SinglePage from "../pages/SinglePage";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/show/:id" element={<SinglePage />} />
    </Routes>
  );
};

export default Paths;
