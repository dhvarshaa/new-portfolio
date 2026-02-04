import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const projects = [
  {
    title: "Frontend Code Snippets",
    type: "React.js / JavaScript / Performance Optimization",
    description:
      "An interactive code snippets library showcasing React hooks, JavaScript patterns, and best practices. Features lazy loading, memoization, syntax highlighting, and search functionality. Built as a technical reference guide demonstrating advanced React concepts and performance optimization techniques.",
    href: "https://frontend-code-snippets.vercel.app/",
  },
  {
    title: "Vistagram",
    type: "React.js / Node.js / Express.js / SQLite",
    description:
      "A full stack web application (inspired by Instagram) that allows users to share Point of Interest with captions and scroll through their timeline with like, dislike and share functionality.",
    href: "https://vistagram-s6as.vercel.app/",
  },
  {
    title: "Microsoft CODESS - AI Tic Tac Toe",
    type: "Python / AI / Algorithms",
    description:
      "Built an AI-driven Tic Tac Toe game by implementing the Minimax algorithm for optimal decision-making during a summer mentorship program at Microsoft CODESS.",
    href: "#",
  },
  {
    title: "PG Life - Apartment Rental Portal",
    type: "HTML / CSS / JavaScript / PHP / MySQL",
    description:
      "Programmed an online portal that provides a platform for students to access details of apartments available in a city and rent apartments of their choice.",
    href: "#",
  },
];

const experienceTimeline = [
  {
    year: "Jan 2025 - Present",
    role: "Software Engineer",
    company: "BharatPe",
    team: "Payment Gateway Platform",
    achievements: [
      "Contributed to the UI development and successful launch of an internal payment gateway product (BharatpeX) for internal clients",
      "Actively resolved numerous critical bugs, enhancing the overall stability and performance of the platform",
      "Developed and launched a website to support and showcase the payment gateway product",
      "Implementing seamless user experiences for transaction processing, and dashboard analytics",
      "Sole PIC for 3 core modules (Old checkout page, BharatpeX, Merchant PlugIn), overseeing development, maintenance, and enhancements",
      "Mentoring and training an intern, providing guidance on best practices and helping them integrate into the team's workflows",
    ],
  },
  {
    year: "Jul 2022 - Dec 2024",
    role: "Software Engineer",
    company: "GoTo Group (Gojek x Tokopedia)",
    team: "GoTo Plus",
    achievements: [
      "Spearheaded the enhancement of user experience for PLUS memberships. Increased active subscriber count by 6% and new subscribers count by 13% through innovative UI development",
      "Revamped Savings Calculator page components, boosting usability and functionality",
      "Employed New Relic for performance monitoring and error tracking, ensuring optimal system health",
      "Incorporated GraphQL queries on the client side for resolving complex data fetching requirements",
      "Collaborated closely with Leaders, Project Managers, and Quality Assurance engineers to facilitate daily technical discussions",
    ],
    additionalProjects: [
      {
        team: "Buyer Growth Platform",
        achievements: [
          "Engineered unified rewards page (React, Typescript, GraphQL) consisting of rewards from Tokopedia and Gojek",
          "Developed and optimized components for buyer growth modules (Rewards, Coupon and Catalog)",
          "Migrated multiple modules to TypeScript, significantly improving type safety and code maintainability",
          "Implemented and managed Google Tag Manager (GTM) trackers for tracking user interaction and behavior",
          "Migrated Promotion modules (Catalog list and Catalog detail pages) from old service to a new service",
          "Created an internal tool for Project managers to configure/ bulk update free delivery quota",
        ],
      },
      {
        team: "Gamification",
        achievements: [
          "Revamped both the design and structure of the referral page within the gamification module which significantly boosted user engagement resulting in a 3% increase in coupon redemption rate",
          "Led frontend improvements of Cartography portal project within the location selection team, ensuring seamless updates and maintaining high accuracy in places data",
        ],
      },
    ],
  },
];

const skills = {
  languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
  technologies: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Jest",
    "RTL",
    "React Query",
    "RTK",
    "GraphQL",
    "Webpack",
    "Vite",
    "ESLint",
    "Framer Motion",
  ],
  tools: ["Git", "Github", "GitLab", "Jenkins", "VSCode"],
  misc: ["Maplibre", "React Maps", "UI/UX"],
};

export default function Portfolio() {
  const [status, setStatus] = useState(""); // success/error message

  // Add structured data for SEO
  useEffect(() => {
    // Person schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Varsha",
      jobTitle: "Frontend Engineer",
      email: "varshadhama21@gmail.com",
      telephone: "+91-9717317670",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN",
      },
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

    // WebSite schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Varsha's Portfolio",
      url: "https://varshadhama.vercel.app/",
      description: "Frontend Engineer specializing in React, Next.js, and TypeScript",
      author: {
        "@type": "Person",
        name: "Varsha",
      },
    };

    // BreadcrumbList schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://varshadhama.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Experience",
          item: "https://varshadhama.vercel.app/#experience",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Skills",
          item: "https://varshadhama.vercel.app/#skills",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Projects",
          item: "https://varshadhama.vercel.app/#projects",
        },
      ],
    };

    const schemas = [personSchema, websiteSchema, breadcrumbSchema];

    const scripts = schemas.map((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((script) => {
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      });
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
    <div className="min-h-screen bg-gradient-to-br from-[#181818] via-[#1a1a2e] to-[#181818] text-[#eeeeee] font-sans flex flex-col md:flex-row px-6 md:px-12 pt-6 pb-10 md:pb-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#58a6ff] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#58a6ff] opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Sidebar */}
      <aside className="text-center md:text-left md:w-2/5 w-full md:fixed md:left-0 md:top-0 md:h-screen md:overflow-hidden flex flex-col justify-between px-1 py-6 md:px-8 mb-6 md:mb-0 md:py-16 relative z-10 bg-gradient-to-br from-[#181818] via-[#1a1a2e] to-[#181818]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#eeeeee] to-[#58a6ff] bg-clip-text text-transparent">
              Hello,
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold md:mb-6">
              I'm Varsha<span className="ml-1 text-[#58a6ff] animate-pulse">.</span>
            </h2>
            <p className="mt-4 mb-8 md:mt-0 md:mb-4 text-[#e0e0e0] max-w-md text-lg">
              A dedicated{" "}
              <span className="text-[#58a6ff] font-semibold">Frontend Engineer</span>
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-0 mb-6 md:mb-8 text-[#cfcfcf] max-w-md text-base leading-relaxed"
          >
            I specialize in transforming complex ideas into intuitive,
            performant web applications. With a strong foundation in UI
            development, animation, and responsive design, I am committed to
            crafting seamless and engaging user experiences that drive business
            impact.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 md:mb-6 space-y-3 text-sm"
          >
            <a
              href="mailto:varshadhama21@gmail.com"
              className="flex items-center gap-3 text-[#bbb] hover:text-[#58a6ff] transition-colors"
            >
              <FaEnvelope size={16} />
              <span>varshadhama21@gmail.com</span>
            </a>
            <a
              href="tel:+919717317670"
              className="flex items-center gap-3 text-[#bbb] hover:text-[#58a6ff] transition-colors"
            >
              <FaPhone size={16} />
              <span>+91 9717317670</span>
            </a>
            <div className="flex items-center gap-3 text-[#bbb]">
              <FaMapMarkerAlt size={16} />
              <span>Delhi, India</span>
            </div>
          </motion.div>

          <nav className="hidden md:flex mb-6 flex-col gap-4 text-[#bbbbbb] uppercase tracking-widest text-xs" aria-label="Main navigation">
            <a href="#experience" className="hover:text-[#58a6ff]" aria-label="Navigate to Experience section">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#58a6ff]" aria-label="Navigate to Skills section">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#58a6ff]" aria-label="Navigate to Projects section">
              Projects
            </a>
            <a href="#education" className="hover:text-[#58a6ff]" aria-label="Navigate to Education section">
              Education
            </a>
            <a href="#contact" className="hover:text-[#58a6ff]" aria-label="Navigate to Contact section">
              Contact
            </a>
          </nav>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden md:flex justify-center md:justify-start items-center gap-4 mb-8 md:mb-0 mt-8"
        >
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/dhvarshaa/"
              className="p-2 rounded-lg bg-[#24262e] hover:bg-[#58a6ff] transition-colors border border-[#343434] hover:border-[#58a6ff]"
              aria-label="Visit Varsha's GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={20} color="#58a6ff" className="hover:text-[#181818]" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/varshadhama/"
              className="p-2 rounded-lg bg-[#24262e] hover:bg-[#58a6ff] transition-colors border border-[#343434] hover:border-[#58a6ff]"
              aria-label="Visit Varsha's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={20} color="#58a6ff" className="hover:text-[#181818]" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/dhvarshaa/"
              className="p-2 rounded-lg bg-[#24262e] hover:bg-[#58a6ff] transition-colors border border-[#343434] hover:border-[#58a6ff]"
              aria-label="Visit Varsha's LeetCode profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiLeetcode size={20} color="#58a6ff" className="hover:text-[#181818]" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </aside>
      {/* Main Content */}
      <main className="md:w-3/5 w-full md:ml-[40%] flex flex-col gap-16 md:gap-24 md:py-16 md:px-8 relative z-10">
        {/* Experience */}
        <section id="experience" className="relative z-10">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#eeeeee] to-[#58a6ff] bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experienceTimeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <div className="border-l-4 border-[#58a6ff] pl-6 pb-6 relative">
                  <div className="bg-gradient-to-r from-[#22232b]/50 to-[#1a1a2e]/30 rounded-lg p-6 backdrop-blur-sm border border-[#343434]/50">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {item.role}
                        </h3>
                        <p className="text-[#58a6ff] font-semibold text-lg mb-1">
                          @ {item.company}
                        </p>
                        {item.team && (
                          <p className="text-sm text-[#aaa] mb-2">{item.team}</p>
                        )}
                      </div>
                      <time 
                        dateTime={item.year.includes("Present") ? item.year.split(" - ")[0] + "/" : item.year.replace(" - ", "/")}
                        className="text-sm text-[#888] font-medium bg-[#24262e] px-3 py-1 rounded-full inline-block md:mt-0 mt-2 w-fit"
                      >
                        {item.year}
                      </time>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-[#bbb] text-sm leading-relaxed flex items-start gap-3">
                          <span className="text-[#58a6ff] mt-1.5">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {item.additionalProjects && (
                      <div className="mt-6 pt-6 border-t border-[#343434]">
                        {item.additionalProjects.map((project, projIdx) => (
                          <div key={projIdx} className="mb-6 last:mb-0">
                            <h4 className="text-[#58a6ff] font-semibold mb-3 text-base">
                              {project.team}
                            </h4>
                            <ul className="space-y-2">
                              {project.achievements.map((achievement, achIdx) => (
                                <li key={achIdx} className="text-[#bbb] text-sm leading-relaxed flex items-start gap-3">
                                  <span className="text-[#58a6ff] mt-1.5">▹</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="relative z-10">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#eeeeee] to-[#58a6ff] bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList], catIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-[#58a6ff] mb-4 capitalize">
                  {category.replace(/_/g, " ")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <motion.span
                      key={skill}
                      className="bg-gradient-to-r from-[#24262e] to-[#2a2d3a] text-[#eee] py-2.5 px-5 rounded-lg shadow-lg border border-[#343434] cursor-default hover:bg-gradient-to-r hover:from-[#58a6ff] hover:to-[#4a8fcc] hover:text-[#111] hover:border-[#58a6ff] hover:shadow-[#58a6ff]/20 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="relative z-10">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#eeeeee] to-[#58a6ff] bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="group bg-gradient-to-br from-[#22232b] to-[#1a1a2e] rounded-xl shadow-xl p-6 flex flex-col border border-[#343434]/50 hover:border-[#58a6ff]/50 transition-all duration-300 hover:shadow-[#58a6ff]/10 hover:shadow-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full font-medium">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#eee] group-hover:text-[#58a6ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-base text-[#bbb] leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.href !== "#" && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58a6ff] hover:text-[#4a8fcc] font-medium text-sm inline-flex items-center gap-2 w-fit group/link"
                    aria-label={`View ${project.title} project`}
                  >
                    View Project
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="relative z-10">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#eeeeee] to-[#58a6ff] bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            <motion.div
              className="bg-gradient-to-r from-[#22232b]/50 to-[#1a1a2e]/30 rounded-lg p-6 border border-[#343434]/50 backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#58a6ff]"></div>
              <div className="pl-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <a
                      href="https://www.igdtuw.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] font-semibold text-lg hover:text-[#4a8fcc] transition-colors"
                      aria-label="Visit IGDTUW website"
                    >
                      @ IGDTUW, Delhi
                    </a>
                  </div>
                  <time 
                    dateTime="2018-08-01/2022-07-31"
                    className="text-sm text-[#888] font-medium bg-[#24262e] px-3 py-1 rounded-full inline-block md:mt-0 mt-2 w-fit"
                  >
                    Aug 2018 - Jul 2022
                  </time>
                </div>
                <p className="text-[#bbb] mt-2">Information Technology</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative z-10">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#eeeeee] to-[#58a6ff] bg-clip-text text-transparent">
            Contact
          </h2>
          <form
            className="flex flex-col max-w-lg gap-5"
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
              className="py-3 px-4 rounded-lg bg-gradient-to-r from-[#232323] to-[#1a1a2e] text-[#eee] border border-[#343434] focus:border-[#58a6ff] focus:ring-2 focus:ring-[#58a6ff]/20 outline-none transition-all"
              aria-required="true"
            />
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="py-3 px-4 rounded-lg bg-gradient-to-r from-[#232323] to-[#1a1a2e] text-[#eee] border border-[#343434] focus:border-[#58a6ff] focus:ring-2 focus:ring-[#58a6ff]/20 outline-none transition-all"
              aria-required="true"
            />
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              required
              id="message"
              name="message"
              placeholder="Your Message"
              className="py-3 px-4 rounded-lg bg-gradient-to-r from-[#232323] to-[#1a1a2e] text-[#eee] border border-[#343434] focus:border-[#58a6ff] focus:ring-2 focus:ring-[#58a6ff]/20 outline-none min-h-[120px] resize-none transition-all"
              aria-required="true"
            />
            <motion.button
              type="submit"
              className="py-3 px-6 rounded-lg bg-gradient-to-r from-[#58a6ff] to-[#4a8fcc] text-[#181818] font-semibold hover:from-[#4a8fcc] hover:to-[#3a7fbc] transition-all shadow-lg hover:shadow-[#58a6ff]/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
            {status && <p className="mt-2 text-green-500">{status}</p>}
          </form>
        </section>
      </main>
    </div>
  );
}
