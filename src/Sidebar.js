import "./Sidebar.css";

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
        <span>GH</span>
        <span>IN</span>
        <span>IG</span>
      </div>
    </aside>
  );
}

export default Sidebar;