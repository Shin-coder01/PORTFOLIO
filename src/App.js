import { useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import About from "./About";
import Experience from "./Experience";
import Resume from "./Resume";
import Projects from "./Projects";

function App() {

  useEffect(() => {
    const spotlight = document.querySelector(".spotlight");

    const handleMouseMove = (e) => {
      if (!spotlight) return;

      spotlight.style.background = `
        radial-gradient(
          600px circle at ${e.clientX}px ${e.clientY}px,
          rgba(59, 130, 246, 0.25),
          transparent 40%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <About />
        <Experience />
        <Resume />
        <Projects />
      </main>
      <div className="spotlight"></div>
    </div>
  );
}

export default App;