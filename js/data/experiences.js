/**
 * Work Experience & Education Timeline Data
 */
const experiences = [
  {
    role: "Senior Frontend & Full Stack Engineer",
    company: "Veloce Technologies",
    location: "San Francisco, CA (Remote)",
    period: "2023 - Present",
    description: "Led frontend architecture across flagship analytics and SaaS products. Re-engineered core rendering engine to reduce Time to Interactive by 42%. Mentored 6 junior/mid engineers and established standardized design tokens.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "WebSockets"]
  },
  {
    role: "Full Stack Engineer",
    company: "Synthetix Labs",
    location: "New York, NY",
    period: "2021 - 2023",
    description: "Developed customer-facing dashboard for machine learning operations. Built microservices in Node and FastAPI, integrated real-time data streaming pipelines, and authored end-to-end component libraries.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Docker", "Redis", "Tailwind CSS"]
  },
  {
    role: "UI/UX & Frontend Developer",
    company: "Aura Creative Studio",
    location: "Austin, TX",
    period: "2019 - 2021",
    description: "Designed and implemented high-conversion client portals, brand marketing platforms, and e-commerce web applications with an uncompromising focus on accessibility, animations, and typography.",
    technologies: ["JavaScript", "HTML5/CSS3", "Figma", "REST APIs", "GSAP"]
  }
];

const education = [
  {
    degree: "B.S. in Computer Science",
    institution: "University of California, Berkeley",
    period: "2015 - 2019",
    details: "Specialized in Software Engineering and Human-Computer Interaction. Honors Graduate."
  }
];

if (typeof window !== "undefined") {
  window.experiences = experiences;
  window.education = education;
}
