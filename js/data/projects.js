/**
 * Projects Data Source
 * 
 * TO ADD A NEW PROJECT:
 * Simply add a new object to the `portfolioProjects` array below!
 * 
 * TO CONNECT TO A DATABASE / BACKEND LATER:
 * Replace this array or populate it with:
 *   fetch('/api/projects').then(res => res.json()).then(data => renderProjects(data));
 */

const portfolioProjects = [
  {
    id: "nexus-cloud",
    title: "Nexus Cloud Analytics",
    category: "fullstack",
    featured: true,
    description: "Enterprise multi-cloud cost monitoring dashboard with real-time telemetry, automated alerting, and anomaly detection.",
    longDescription: "Nexus is a next-generation SaaS dashboard empowering engineering leaders to track and cut infrastructure expenses across AWS, GCP, and Azure. Built with distributed websockets for millisecond telemetry updates and interactive charting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis"],
    metrics: "Reduced cloud spend by 28% for 40+ organizations",
    demoUrl: "https://example.com/demo/nexus",
    githubUrl: "https://github.com/example/nexus-cloud",
    highlights: [
      "Sub-second websocket updates handling 10k events/sec",
      "Dynamic interactive charting with custom SVG & Canvas shaders",
      "Role-based access control (RBAC) with multi-tenant architecture"
    ]
  },
  {
    id: "aurora-ai",
    title: "Aurora Generative Studio",
    category: "ai",
    featured: true,
    description: "Interactive AI prompt engineering playground and model evaluation platform with side-by-side benchmarking.",
    longDescription: "Aurora gives AI engineers a fast, visual interface to test prompts against GPT-4, Claude 3.5, and open-source models simultaneously. Features custom streaming token visualizers and latency waterfall charts.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    technologies: ["React", "Python", "FastAPI", "Tailwind CSS", "LangChain", "Docker"],
    metrics: "Over 500k prompt comparisons processed",
    demoUrl: "https://example.com/demo/aurora",
    githubUrl: "https://github.com/example/aurora-ai",
    highlights: [
      "Real-time streaming LLM response visualizer",
      "Automated evaluation metrics (BLEU, ROUGE, latency scoring)",
      "Zero-dependency lightweight client state synchronization"
    ]
  },
  {
    id: "pulse-finance",
    title: "Pulse DeFi Portfolio",
    category: "frontend",
    featured: true,
    description: "Ultra-sleek financial trading terminal with customizable widgets, order book visualizations, and glassmorphism styling.",
    longDescription: "A modern fintech interface designed for traders needing low-latency market depth visualization. Boasts 60fps chart rendering, keyboard navigation shortcuts, and custom dark/light theme balancing.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=900&q=80",
    technologies: ["Vanilla JS", "Tailwind CSS", "Chart.js", "WebSockets", "CSS3 Animations"],
    metrics: "60 FPS rendering under heavy market tick volume",
    demoUrl: "https://example.com/demo/pulse",
    githubUrl: "https://github.com/example/pulse-finance",
    highlights: [
      "Custom canvas-based candlestick chart engine",
      "Full keyboard navigation with Vim-style shortcut bindings",
      "Ultra-responsive CSS grid with draggable widget reordering"
    ]
  },
  {
    id: "zenith-commerce",
    title: "Zenith Headless Storefront",
    category: "fullstack",
    featured: false,
    description: "High-speed e-commerce storefront delivering 99+ Lighthouse performance scores, instant page transitions, and localized checkout.",
    longDescription: "Architected a headless e-commerce experience integrating Shopify Storefront API with modern edge caching. Achieved sub-100ms global response times with fluid micro-interactions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    technologies: ["TypeScript", "Tailwind CSS", "Shopify API", "Edge Workers", "Stripe"],
    metrics: "Lighthouse 100/100 performance & 40% conversion lift",
    demoUrl: "https://example.com/demo/zenith",
    githubUrl: "https://github.com/example/zenith-commerce",
    highlights: [
      "Optimistic UI state for instant cart updates",
      "Predictive prefetching for instant page navigation",
      "Accessible ARIA-compliant design system"
    ]
  },
  {
    id: "flow-task",
    title: "Flow Collaborative Workspace",
    category: "frontend",
    featured: false,
    description: "Real-time collaborative canvas and task management board with multi-cursor multiplayer editing.",
    longDescription: "Flow brings Figma-like multiplayer fluidity to everyday project tracking. Users can drag task cards on an infinite zoomable canvas with live presence awareness.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    technologies: ["Vanilla JS", "WebRTC", "Tailwind CSS", "HTML5 Canvas", "IndexedDB"],
    metrics: "Supports 50+ concurrent users per room with zero lag",
    demoUrl: "https://example.com/demo/flow",
    githubUrl: "https://github.com/example/flow-task",
    highlights: [
      "Conflict-free replicated data types (CRDT) for offline sync",
      "Fluid gesture animations and physics-based drag-and-drop",
      "Zero-latency optimistic local rendering"
    ]
  },
  {
    id: "stride-mobile",
    title: "Stride Fitness & Wellness",
    category: "mobile",
    featured: false,
    description: "Cross-platform mobile fitness tracker featuring workout analytics, GPS route tracing, and audio workout cues.",
    longDescription: "Stride transforms everyday workouts into gamified milestones. Synchronizes with wearable sensors to provide haptic feedback, real-time pace analysis, and social challenges.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    technologies: ["React Native", "Tailwind (NativeWind)", "Expo", "SQLite", "Mapbox"],
    metrics: "4.9/5 stars across 12,000+ app ratings",
    demoUrl: "https://example.com/demo/stride",
    githubUrl: "https://github.com/example/stride-mobile",
    highlights: [
      "Offline-first sync engine with SQLite and background GPS",
      "Battery-optimized high-accuracy location tracking",
      "Custom audio coaching synthesizers"
    ]
  }
];

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "ai", label: "AI & ML" },
  { id: "mobile", label: "Mobile" }
];

// Universal browser & module export
if (typeof window !== "undefined") {
  window.portfolioProjects = portfolioProjects;
  window.projectCategories = projectCategories;
}
