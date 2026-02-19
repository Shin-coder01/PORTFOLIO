import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {

  const experiences = [
    {
      date: "JULY — AUG 2024",
      title: "Intern · CodeBind Technologies",
      desc:
        "Designed and developed a responsive e-commerce web application for food services using HTML, CSS, JavaScript, and Bootstrap. Implemented core frontend features such as product listings, user forms, and client-side validations. Integrated backend functionality using Python and SQL for managing user data and application workflows. Debugged UI and backend issues to improve application stability and user experience. Worked collaboratively with team members following basic software development and version control practices.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "SQL"]
    },
    {
      date: "SEP 1 — 30 2023",
      title: "In-Plant Training · Lenovo India",
      desc:
        "Observed end-to-end laptop manufacturing processes including assembly, testing, and quality assurance. Gained exposure to large-scale production workflows and cross-team coordination. Developed an understanding of professional work environments and industrial standards.",
      tech: ["Manufacturing", "Quality Control", "Teamwork"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Experience</h2>

      {experiences.map((item, index) => (
        <motion.div
          key={index}
          className="experience-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="experience-date">{item.date}</div>

          <div className="experience-content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className="experience-tech">
              {item.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
export default Experience;
