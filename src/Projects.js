import "./Project.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-card">
        <div className="project-content">
          <h3>Library Management System</h3>
          <p>
            Developing a full-stack Library Management System using React.js for the frontend
            and Spring Boot for backend services. Implemented role-based authentication and
            authorization using Spring Security. Designed RESTful APIs and integrated SQL
            database for persistent storage.
          </p>
          <div className="tech-stack">
            <span>React.js</span>
            <span>Spring Boot</span>
            <span>SQL</span>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-content">
          <h3>Autonomous Vehicle Lane Detection System Web App</h3>
          <p>
            Developed a real-time lane detection system using OpenCV and deep learning.
            Processed video frames to identify lane boundaries and integrated YOLO-based
            object detection with a Flask web application.
          </p>
          <div className="tech-stack">
            <span>Python</span>
            <span>OpenCV</span>
            <span>YOLO</span>
            <span>Deep Learning</span>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-content">
          <h3>Gym Management System</h3>
          <p>
            Built a web-based gym management system to handle memberships, class schedules,
            and trainer management using responsive UI and client-side JavaScript logic.
          </p>
          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>

      <div className="project-archive">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Project Archive →
        </a>
      </div>
    </section>
  );
}

export default Projects;
