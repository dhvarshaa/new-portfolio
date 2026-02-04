import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const projects = [
  {
    title: "Vistagram",
    type: "React.js / Node.js / Express.js / SQLite ",
    description:
      "A simple full stack web application (inspired by Instagram) that allows users to share Point of Interest with captions and scroll throught their timeline with like, dislike and share functionality.",
    href: "https://vistagram-s6as.vercel.app/",
  },
  {
    title: "Animated Portfolio",
    type: "Next.js / Framer Motion",
    description:
      "A modern interactive portfolio built with Next.js and Framer Motion, featuring dynamic showcases and engaging transitions.",
    href: "#",
  },
  // {
  //   title: "Animated Portfolio",
  //   type: "Next.js / Framer Motion",
  //   description:
  //     "A modern interactive portfolio built with Next.js and Framer Motion, featuring dynamic showcases and engaging transitions.",
  //   href: "https://your-demo-url.com",
  //   github: "https://github.com/your-username/animated-portfolio",
  // },
  // Add more projects here...
];

const experienceTimeline = [
  {
    year: "Jan 2025 - Present",
    role: "Software Development Engineer",
    company: "BharatPe",
    description:
      "Working as Frontend Engineer in Payment Gateway Team. Contributed to the UI development and successful launch of an internal payment gateway product (BharatpeX) for internal clients. Actively resolved numerous critical bugs, enhancing the overall stability and performance of the platform. Developed and launched a website to support and showcase the payment gateway product.",
  },
  {
    year: "Jul 2022 - Dec 2024",
    role: "Software Engineer",
    company: "GoTo Group (Tokopedia | Gojek)",
    description:
      "Worked on GoTo Plus, Rewards, Membership, Gamification, Cartography Portal projects. Engineered unified rewards page (React, Typescript, GraphQL) consisting of rewards from Tokopedia and Gojek. Led frontend improvements of Cartography portal project within the location selection team, ensuring seamless updates and maintaining high accuracy in places data. ",
  },
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "GraphQL",
  "REST APIs",
  "Tailwind CSS",
  "Redux",
  "RTK",
  "Webpack",
  "Vite",
  "Vitest",
  "Jest",
  "RTL",
  "Framer Motion",
  "UI/UX",
  "Git",
  "Github / GitLab",
  "Jenkins",
];

export default function Portfolio() {
  const [status, setStatus] = useState(""); // success/error message

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Varsha",
      jobTitle: "Frontend Engineer",
      worksFor: {
        "@type": "Organization",
        name: "BharatPe",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Indira Gandhi Delhi Technical University for Women",
        url: "https://www.igdtuw.ac.in/",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Frontend Development",
        "UI/UX",
      ],
      sameAs: [
        "https://github.com/dhvarshaa/",
        "https://www.linkedin.com/in/varshadhama/",
        "https://leetcode.com/u/dhvarshaa/",
      ],
      url: "https://varshadhama.vercel.app/",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Safely remove script if it still exists
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("https://formspree.io/f/mgvnpewn", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Thanks for your message! I'll get back soon.");
          e.target.reset();
        } else {
          setStatus("Oops! There was a problem submitting your form.");
        }
      })
      .catch(() => {
        setStatus("Oops! There was a problem submitting your form.");
      });
  };

  return (
    <div className="min-h-screen bg-[#181818] text-[#eeeeee] font-sans flex flex-col md:flex-row px-12 pt-6 pb-10 md:pb-4">
      {/* Sidebar */}
      <aside className="text-center md:text-left md:w-1/2 w-full md:sticky md:top-0 h-full flex flex-col md:min-h-screen justify-between px-1 py-6 md:px-8 mb-6 md:mb-0 md:py-16 bg-[#181818]">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Hello,</h1>
          <h2 className="text-4xl md:text-6xl font-bold md:mb-6">
            I'm Varsha<span className="hidden ml-1 md:inline-block text-[#58a6ff]"> .</span>
          </h2>
          <p className="mt-4 mb-8 md:mt-0 md:mb-4 text-[#e0e0e0] max-w-md">
            A dedicated{" "}
            <span className="text-[#58a6ff]">Frontend engineer</span>.
          </p>
         <p className="mt-8 md:mt-0 mb-6 md:mb-12 text-[#cfcfcf] max-w-md text-lg md:text-base">
            I specialize in transforming complex ideas into intuitive,
            performant web applications. With a strong foundation in UI
            development, animation, and responsive design, I am committed to
            crafting seamless and engaging user experiences that drive business
            impact.
          </p>

          <nav className="hidden md:flex mb-6 flex-col gap-4 text-[#bbbbbb] uppercase tracking-widest text-xs" aria-label="Main navigation">
            <a href="#projects" className="hover:text-[#58a6ff]" aria-label="Navigate to Projects section">
              Projects
            </a>
            <a href="#skills" className="hover:text-[#58a6ff]" aria-label="Navigate to Skills section">
              Skills
            </a>
            <a href="#experience" className="hover:text-[#58a6ff]" aria-label="Navigate to Experience section">
              Experience
            </a>
            <a href="#education" className="hover:text-[#58a6ff]" aria-label="Navigate to Education section">
              Education
            </a>
            <a href="#contact" className="hover:text-[#58a6ff]" aria-label="Navigate to Contact section">
              Contact
            </a>
          </nav>
        </div>
        <div className="hidden md:flex justify-center md:justify-start items-center gap-4 mb-8 md:mb-0 mt-8">
          <RxAvatar size={36} />
          <a 
            href="https://github.com/dhvarshaa/" 
            className="hover:underline"
            aria-label="Visit Varsha's GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} color="#58a6ff" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/varshadhama/"
            className="hover:underline"
            aria-label="Visit Varsha's LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} color="#58a6ff" aria-hidden="true" />
          </a>
          <a
            href="https://leetcode.com/u/dhvarshaa/"
            className="hover:underline"
            aria-label="Visit Varsha's LeetCode profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode size={20} color="#58a6ff" aria-hidden="true" />
          </a>
        </div>
      </aside>
      {/* Main Content */}
      <main className="md:w-1/2 w-full flex flex-col gap-16 md:gap-24 md:py-16 md:px-8 ">
        {/* Projects */}
        <section id="projects">
          <h2 className="text-center md:text-left text-3xl font-bold mb-6">Projects</h2>
          <div className="flex flex-col gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className={` bg-[#22232b] rounded-xl shadow p-6 flex flex-col hover:scale-[1.03] transition-transform`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <span className="text-xs text-[#aaaaaa] mb-1">
                  {project.type}
                </span>
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-base text-[#bbb]">{project.description}</p>
                <div className="mt-2 text-sm flex gap-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58a6ff] underline"
                    aria-label={`View ${project.title} project`}
                  >
                    Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Skills */}
        <section id="skills">
          <h2 className="text-center md:text-left text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4 justify-items-center">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className="bg-[#24262e] text-[#eee] py-2 px-4 rounded-md shadow cursor-default hover:bg-[#58a6ff] hover:text-[#111] w-auto"
                whileHover={{ scale: 1.08 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>
        {/* Experience */}
        <section id="experience">
          <h2 className="text-center md:text-left text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experienceTimeline.map((item, i) => (
              <motion.div
                key={i}
                className="border-l-4 border-[#58a6ff] pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold">
                  {item.role}{" "}
                  <span className="text-[#58a6ff]">@ {item.company}</span>
                  <p className="text-xs mb-2">({item.year})</p>
                </h3>
                <p className="text-[#bbb]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Eductaion */}
        <section id="education">
          <h2 className="text-center md:text-left text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <motion.div
              className="border-l-4 border-[#58a6ff] pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold">
                B.Tech
                <a
                  href="https://www.igdtuw.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58a6ff]"
                  aria-label="Visit IGDTUW website"
                >
                  {' '}@ IGDTUW, Delhi
                </a>
                <p className="text-xs mb-2">(Aug 2018 - Jul 2022)</p>
              </h3>
              <p className="text-[#bbb]">Information Technology</p>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-center md:text-left text-3xl font-bold mb-6">Contact</h2>
          <form
            className="flex flex-col max-w-lg gap-4"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              required
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="py-2 px-4 rounded bg-[#232323] text-[#eee] border border-[#343434] focus:border-[#58a6ff] outline-none"
              aria-required="true"
            />
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="py-2 px-4 rounded bg-[#232323] text-[#eee] border border-[#343434] focus:border-[#58a6ff] outline-none"
              aria-required="true"
            />
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              required
              id="message"
              name="message"
              placeholder="Your Message"
              className="py-2 px-4 rounded bg-[#232323] text-[#eee] border border-[#343434] focus:border-[#58a6ff] outline-none min-h-[100px]"
              aria-required="true"
            />
            <button
              type="submit"
              className="py-2 px-4 rounded bg-[#58a6ff] text-[#181818] font-semibold hover:bg-[#367bbf] transition"
            >
              Send Message
            </button>
            {status && <p className="mt-2 text-green-500">{status}</p>}
          </form>
        </section>
      </main>
    </div>
  );
}
