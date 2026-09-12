/**
 * Skills & Technologies Data
 */
const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: "code",
    description: "Building blazing-fast, accessible, and interactive user interfaces.",
    skills: [
      { name: "JavaScript (ESNext)", level: 95, icon: "⚡" },
      { name: "Tailwind CSS", level: 98, icon: "🎨" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "HTML5 & Semantic Web", level: 98, icon: "🌐" },
      { name: "React & Next.js", level: 92, icon: "⚛️" },
      { name: "Web Performance & SEO", level: 94, icon: "🚀" }
    ]
  },
  {
    title: "Backend & Cloud",
    icon: "server",
    description: "Architecting reliable APIs, microservices, and server-side systems.",
    skills: [
      { name: "Node.js & Express", level: 90, icon: "🟢" },
      { name: "Python & FastAPI", level: 85, icon: "🐍" },
      { name: "RESTful & GraphQL APIs", level: 92, icon: "🔌" },
      { name: "WebSocket & Realtime", level: 88, icon: "📡" },
      { name: "Redis & Caching", level: 86, icon: "🔴" },
      { name: "Cloudflare & Edge", level: 88, icon: "☁️" }
    ]
  },
  {
    title: "Databases & DevOps",
    icon: "database",
    description: "Designing robust schemas, storage engines, and continuous pipelines.",
    skills: [
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "MongoDB", level: 86, icon: "🍃" },
      { name: "Docker & Containers", level: 84, icon: "🐳" },
      { name: "Git & GitHub Actions", level: 92, icon: "🐙" },
      { name: "CI / CD Pipelines", level: 85, icon: "🔄" },
      { name: "Supabase & Firebase", level: 90, icon: "🔥" }
    ]
  },
  {
    title: "Design & Practices",
    icon: "layers",
    description: "Harmonizing aesthetics, accessibility standards, and clean code principles.",
    skills: [
      { name: "UI/UX & Figma", level: 89, icon: "🎯" },
      { name: "Responsive & Mobile-First", level: 98, icon: "📱" },
      { name: "Accessibility (WCAG)", level: 90, icon: "👁️" },
      { name: "Clean Architecture & SOLID", level: 94, icon: "📐" },
      { name: "Design Systems", level: 92, icon: "🧩" },
      { name: "Test-Driven Development", level: 86, icon: "🧪" }
    ]
  }
];

if (typeof window !== "undefined") {
  window.skillCategories = skillCategories;
}
