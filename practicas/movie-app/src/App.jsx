import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <Navbar />
      </main>
    </BrowserRouter>
  );
}

export default App;
