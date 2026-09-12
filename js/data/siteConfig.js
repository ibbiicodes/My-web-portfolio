/**
 * Site Configuration & Personal Profile Data
 */
const siteConfig = {
  personal: {
    name: "Muhammad Ibrahim",
    role: "Senior Full Stack & UI/UX Engineer",
    statusBadge: "Available for new projects & roles",
    tagline: "Building digital experiences where engineering meets aesthetics.",
    bio: "Passionate senior software engineer with over 6 years of experience architecting high-performance web applications, modern interactive interfaces, and scalable cloud systems. Obsessed with micro-interactions, clean architecture, and user-centric design.",
    location: "San Francisco, CA (Open to Remote)",
    email: "muhammad.ibrahim.dev@example.com",
    availability: "Full-time / Contract",
    stats: [
      { label: "Years Experience", value: "6+" },
      { label: "Projects Shipped", value: "45+" },
      { label: "Happy Clients", value: "30+" },
      { label: "Code Quality", value: "99.9%" }
    ]
  },
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "Email", url: "mailto:muhammad.ibrahim.dev@example.com", icon: "mail" }
  ],
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ]
};

if (typeof window !== "undefined") {
  window.siteConfig = siteConfig;
}
