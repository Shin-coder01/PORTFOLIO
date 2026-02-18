import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
     <p>
  I’m a fresher full-stack developer passionate about building clean and
  responsive web applications.
</p>

<p>
  I enjoy working across both frontend and backend, turning ideas into
  functional and user-friendly experiences.
</p>

<p>
  I’m continuously learning modern technologies and best practices to build
  scalable and reliable web solutions.
</p>

    </motion.section>
  );
}

export default About;
