import { Routes, Route } from "react-router-dom";
import App from "../components/App";
import { Navbar } from "../components/Navbar";
import { UserDetail } from "../components/UserDetail";
export default function Paths() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/portfolio" element={<h2>Portfolio</h2>} />
        <Route path="/info" element={<h2>Info</h2>} />
        <Route path="/faq" element={<h2>FAQ</h2>} />
      </Routes>
    </>
  );
}
// Al encerrarlo en routes no reacarga el componente lo que hace que el performance sea mas rapido
