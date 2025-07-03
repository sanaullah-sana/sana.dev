import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Typewriter } from "react-simple-typewriter";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaReact,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaExternalLinkAlt,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiElementor,
} from "react-icons/si";
import { MdEmail, MdLocationOn } from "react-icons/md";
import introSectonImage from "../assets/intro-banner-img.jpg";
import boilerImg from "../assets/boiler-board-img.jpeg";
import furniroImg from "../assets/furniro-img.jpeg";
import whitepaceImg from "../assets/whitepace-img.jpeg";
import restaurantImg from "../assets/ch-restaurant-img.jpeg";
import postivousPage from "../assets/postivous-img.jpeg";
import foodiImg from "../assets/foodi-img.jpeg";
// Skills Section Info
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React JS", icon: <FaReact className="text-blue-500" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-gray-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-500" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-700" /> },
  { name: "Elementor", icon: <SiElementor className="text-pink-600" /> },
];

// Project Section Info
const projects = [
  {
    title: "Board of Boiler Engineers",
    description:
      "This UI is About Board of Boiler Engineers. It was a real-world Project Assigned to I made its UI.",
    image: boilerImg,
    tech: ["Next.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/sanaullah-sana/board-of-boiler-engineers.git",
    live: "https://board-of-boiler-engineers.vercel.app",
  },
  {
    title: "Furniro (E-Commerce Website)",
    description:
      "This is a Basic E-Commerce Website. (Fetching Products) Still Under Construction.",
    image: furniroImg,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/sanaullah-sana/Furniro-Vite.git",
    live: "https://furniro-vite-eight.vercel.app/",
  },
  {
    title: "Whitepace",
    description:
      "This is a Responsive landing Page. I Converted its design from Figma to Code.",
    image: whitepaceImg,
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    github: "https://github.com/sanaullah-sana/whitepace-Homepage.git",
    live: "https://whitepace-homepage.vercel.app/",
  },
  {
    title: "Restaurant Website",
    description:
      "This a Restaurant Website Made with WordPress Elementor. I have worked on 2 real world WordPress Projects.",
    image: restaurantImg,
    tech: ["WordPress", "Elementor"],
    live: "https://foodsite-by-sana.free.nf/?i=1",
  },
  {
    title: "Postivous Homepage",
    description:
      "This is a static Landing Page. I converted its figma disign to Code.",
    image: postivousPage,
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    github: "https://github.com/sanaullah-sana/Postivous-Homepage.git",
    live: "https://postivous-homepage.vercel.app/",
  },
  {
    title: "Foodi Homepage",
    description:
      "This is a static Landing Page. I converted its figma disign to Code.",
    image: foodiImg,
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    github: "https://github.com/sanaullah-sana/Foodi-Homepage.git",
    live: "https://foodi-homepage.vercel.app/",
  },
];
const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? "-3rem" : "3rem",
    // Alternate left/right fade
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: i * 0.1, // slight stagger for better look
    },
  }),
};

// Highlight Varients
const highlightVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};
function Home() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <Header myStyle={myStyle} toggleStyle={toggleStyle} />



      {/* Intro Section */}
      <section className="min-h-screen bg-white px-4 py-16" style={myStyle}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 style={myStyle} className="md:mt-15 mt-20 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug text-center md:text-left">
              Hi! I'm <span className="text-blue-600">Sana Ullah</span> —<br />A
              Passionate{" "}
              <span className="text-green-600">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "WordPress Developer",
                    "React Developer",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <p style={myStyle} className="text-gray-700 mb-6 text-center md:text-left">
              I'm a Frontend Developer with a passion for building clean and
              user-friendly web interfaces. I love turning ideas into reality
              using code. Currently I am focusing on Frontend After Frontend I
              will Start Projects in Backend.(MERN Stack)
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/Sana Ullah - Web Developer.pdf"
                download="Sana_Ullah_CV.pdf"
                className="text-sm sm:text-base px-4 sm:px-5 lg:px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Download CV
              </a>

              <a
                href="https://wa.me/923708403119?text=Hi%20Sana%2C%20I%20saw%20your%20portfolio!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm sm:text-base px-4 sm:px-5 lg:px-6 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition"
              >
                <FaWhatsapp className="text-lg" />
                Contact WhatsApp
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 justify-center md:justify-start mt-6 text-2xl">
              <a
                href="https://www.linkedin.com/in/sana-ullah-258465272" // Replace with your actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition lg:text-4xl text-2xl"
              >
                <FaLinkedin />
              </a>
              <a style={myStyle}
                href="https://github.com/sanaullah-sana" // Replace with your GitHub profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition lg:text-4xl text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mt-0 lg:mt-20">
            <img
              src={introSectonImage}
              alt="Sana Ullah"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* /Intro Section */}
      {/* Skils Section */}
      <section id="skills" className="py-16 bg-gray-50" style={myStyle}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold my-10">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div style={myStyle}
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition group"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 flex justify-center">
                  <span className="inline-block transform transition duration-300 group-hover:scale-110 group-hover:rotate-20 cursor-pointer">
                    {skill.icon}
                  </span>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white" style={myStyle}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center my-12">
            My Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5" style={myStyle}>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p style={myStyle} className="text-gray-700 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 px-2 py-1 rounded-4xl text-blue-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-black bg-gray-200 px-4 py-2 transition transform hover:-translate-y-1 hover:scale-105 duration-300 text-sm rounded-xl"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white bg-blue-600 px-4 py-2 hover:bg-blue-700 text-sm rounded-xl transition transform hover:-translate-y-1 hover:scale-105 duration-300"
                      >
                        <FaExternalLinkAlt />
                        Visit Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={myStyle}
        id="about"
        className="bg-gray-100 py-5 md:py-22 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
            About Me
          </h2>

          <p style={myStyle} className="text-sm sm:text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
            I'm{" "}
            <motion.span
              variants={highlightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              className="bg-blue-500 px-1 font-semibold"
            >
              Sana Ullah
            </motion.span>
            , a dedicated Frontend Developer from Pakistan who loves building
            clean, responsive, and engaging user interfaces.
          </p>

          <p style={myStyle} className="text-sm sm:text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
            I specialize in{" "}
            <motion.span
              variants={highlightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              className="bg-blue-500 px-1 font-semibold"
            >
              React.js, Next.js, and WordPress
            </motion.span>
            , and have developed multiple web projects featuring clean designs
            and smooth animations using Framer Motion.
          </p>

          <p style={myStyle} className="text-sm sm:text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
            I'm passionate about{" "}
            <motion.span
              variants={highlightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              className="bg-blue-500 px-1 font-semibold"
            >
              solving real-world challenges
            </motion.span>
            , exploring modern technologies, and building scalable,
            user-friendly frontend solutions.
          </p>

          < motion.blockquote
            variants={highlightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="bg-blue-500 px-4 py-3 italic text-gray-700 rounded-md text-center text-base sm:text-lg"
          >
            "Each obstacle is a chance to become stronger and smarter."
          </motion.blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-24 px-4 sm:px-6 lg:px-16" style={myStyle}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            Contact Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side - Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Let’s Talk</h3>
              <p style={myStyle} className="text-gray-700 mb-6">
                I'm always open to exploring new opportunities, collaborating on
                exciting projects, or simply chatting about tech and web
                development.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md" style={myStyle}>
                <h4 className="text-lg font-semibold mb-4">
                  Contact Information
                </h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span style={myStyle}>
                      <MdLocationOn />
                    </span>
                    <span style={myStyle}>Pakistan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={myStyle}>
                      <MdEmail />
                    </span>
                    <a style={myStyle}
                      href="mailto:khansan130q@gmail.com"
                      className="hover:underline"
                    >
                      khansan130q@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <FaLinkedin className="bg-blue-700 text-white" />
                    </span>
                    <a
                      href="https://www.linkedin.com/in/sana-ullah-258465272"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md" style={myStyle}>
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form>
                <div className="mb-4">
                  <label style={myStyle} className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input style={myStyle}
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4" style={myStyle}>
                  <label style={myStyle} className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input style={myStyle}
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label style={myStyle} className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea style={myStyle}
                    rows="4"
                    placeholder="Tell me about your project or just say hello!"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer myStyle={myStyle} />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;