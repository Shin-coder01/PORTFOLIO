import "./Sidebar.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="name">Prathap J</h1>
      <h2 className="role">Full Stack Developer</h2>

      <p className="tagline">
        I enjoy building things for the web, from front to back.
      </p>

      <nav className="nav">
        <a href="#about" className="active">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
      </nav>

     <div className="socials">
  <a href="https://github.com/Shin-coder01" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>

  <a 
  href="https://www.linkedin.com/in/prathap-engineer/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaLinkedin />
</a>

 <a 
  href="https://www.instagram.com/iiam_prathap/" 
  target="_blank" 
  rel="noopener noreferrer">
  <FaInstagram />
</a>
</div>
    </aside>
  );
}

export default Sidebar;