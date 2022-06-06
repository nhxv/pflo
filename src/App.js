import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
  <div className="">
    <div className="container p-4 mx-auto">
      <Navbar />
      <main>
        <Routes>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route path="/" element={<Navigate to="/about" />}></Route>
        </Routes>
      </main>
    </div>
  </div>
  );
}

export default App;
