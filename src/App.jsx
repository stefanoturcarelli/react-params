import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <h1>React Params</h1>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movies" element={<Movies />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
