import { IProfile } from "./types";

export const profileData: IProfile = {
  hero: {
    name: "Muhammad Aheed Siddiqui",
    title: "MERN Stack Developer",
    subtitle: "Building scalable web applications with modern technologies",
    resume:
      "https://drive.google.com/file/d/1GYCiprcbewOXyULQVnwylyvFonxQNaev/view",
    social_links: {
      github: "https://github.com/Aheed-Siddiqui-Official",
      linkedin: "www.linkedin.com/in/muhammad-aheed-siddiqui-b1233a2a2",
    },
  },
  about: {
    description:
      "Passionate MERN Stack Developer with expertise in React, Node.js, and MongoDB. Dedicated to writing clean and scalable code, optimizing application performance, and mentoring aspiring developers.",
    expertise: [
      {
        icon: "Palette",
        title: "Frontend Development",
        skills: [
          "React.js",
          "TailwindCSS",
          "Bootstrap",
          "Ant Design",
          "Material UI",
        ],
      },
      {
        icon: "Server",
        title: "Backend Development",
        skills: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase",
          "Cloudinary",
          "ImageKit",
        ],
      },
      {
        icon: "Code2",
        title: "Cloud & DevOps",
        skills: ["Git", "GitHub", "Vercel", "Render", "Netlify", "Firebase"],
      },
    ],
  },
  experiences: [
    {
      title: "Full Stack Developer",
      company: "DevelopersHub Corporation",
      period: "Sep 2025 - Present",
      description:
        "Designed and developed full-stack applications using MERN stack.",
      skills: [
        "MERN",
        "API Integration",
        "Frontend Development",
        "Backend Development",
        "Cloud Deployment",
      ],
    },
  ],
  projects: [
    {
      title: "AI Saas Application",
      description:
        "AI SaaS application built with the PERN stack (PostgreSQL, Express, React, Node.js) featuring 🔐 authentication, 💳 subscription billing, and AI-powered tools for text, image, and resume analysis.",
      images: ["/assets/ai-saas.png"],
      technologies: [
        "React",
        "Clerk",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL(NEON)",
        "Gemini AI",
        "Vercel",
        "Cloudinary",
      ],
      links: {
        live: "https://mas-quick-ai.vercel.app/",
        github:
          "https://github.com/Aheed-Siddiqui-Official/QuickAI-SaaS-Application",
      },
    },
    {
      title: "Full Stack Blogging App",
      description:
        "A feature-rich MERN blogging platform for seamless reading, writing, and management with modern design and smooth performance.",
      images: ["/assets/blog.png",
        "/assets/blogdash.png",
        "/assets/blogdet.png",
        "/assets/bloghome.png"
      ],
      technologies: [
        "MERN",
        "React.js",
        "MongoDB",
        "Express.js",
        "Node.js",
        "ImageKit",
        "Gemini AI",
        "Vercel",
      ],
      links: {
        live: "https://mas-blogging-website.vercel.app/",
        github:
          "https://github.com/Aheed-Siddiqui-Official/MERN-Blogging-Website",
      },
    },
    {
      title: "Chat-App",
      description:
        "A real-time chat platform built with the MERN stack and Socket.io, featuring 🔐 JWT authentication, ⚡ instant messaging, 🟢 live online status, and a 💨 clean UI powered by TailwindCSS + DaisyUI. Global state is managed with 🧠 Zustand, and both the client and server include 🐞 consistent error handling.",
      images: [
        "/assets/chatlogin.png",
        "/assets/chatchat.png",
        "/assets/chat profile.png",
      ],
      technologies: [
        "MERN",
        "React.js",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Socket.io",
        "JWT",
        "Zustand",
        "TailwindCSS + DaisyUI",
      ],
      links: {
        live: "https://github.com/Aheed-Siddiqui-Official/Full-Stack-Chat-App",
        github:
          "https://github.com/Aheed-Siddiqui-Official/Full-Stack-Chat-App",
      },
    },
    {
      title: "E-commerce Website",
      description:
        "🛒 E-commerce Website built with ⚡ Vite, 🌐 HTML, 🎨 CSS, and ⚛️ JavaScript — featuring 🛍️ dynamic product cards, 🛒 add-to-cart with local storage, 📱 responsive design, and multi-page navigation.",
      images: ["/assets/ecom.png"],
      technologies: ["Vite", "HTML", "CSS", "JS"],
      links: {
        live: "https://mas-e-commerce-website.vercel.app/",
        github: "https://github.com/Aheed-Siddiqui-Official/E-Commerce-Website",
      },
    },
    {
      title: "Chess Game",
      description:
        "♟️ A simple Chess Game built with 🌐 HTML, 🎨 CSS, and ⚡ JavaScript — featuring 🖱️ drag-and-drop moves, ✅ valid piece logic, 🔄 turn system, and 🏆 basic win detection.",
      images: ["/assets/chess.png"],
      technologies: ["Vite", "HTML", "CSS", "JS"],
      links: {
        live: "https://mas-chess-game.vercel.app/",
        github: "https://github.com/Aheed-Siddiqui-Official/Chess-Game",
      },
    },
    {
      title: "Resume Generator",
      description:
        "An intuitive Resume Generator built with Vite, HTML, CSS, and JavaScript, allowing users to create professional resumes with customizable templates and real-time previews.",
      images: ["/assets/resume.png"],
      technologies: ["Vite", "HTML", "CSS", "JS"],
      links: {
        live: "mas-resume-generator.vercel.app",
        github: "https://github.com/Aheed-Siddiqui-Official/Resume-Generator",
      },
    },
  ],
  services: [
    {
      title: "Website Development",
      description:
        "Development of responsive and interactive websites for individuals, businesses, or organizations using HTML5, CSS3, JavaScript, and Bootstrap. Ensures mobile-friendly and optimized performance across all devices.",
      icon: "Globe",
    },
    {
      title: "Frontend Development",
      description:
        "Specialized in building intuitive user interfaces (UIs) and seamless user experiences (UX) with HTML5, CSS3, JavaScript, and React.js. Delivers fast, responsive single-page applications (SPAs).",
      icon: "Layout",
    },
    {
      title: "Custom Web Applications",
      description:
        "Creation of custom web applications using React.js with backend technologies like Node.js and Express.js. Integrates Firebase for real-time data, authentication, and hosting.",
      icon: "Code",
    },
    {
      title: "Web Hosting and Deployment",
      description:
        "Assistance in deploying websites and web applications on platforms like Firebase Hosting, Netlify, or traditional servers. Optimizes performance and ensures secure HTTPS connections.",
      icon: "Server",
    },
    {
      title: "Maintenance and Updates",
      description:
        "Ongoing maintenance services, including security patches, performance optimizations, and feature updates. Provides backups and uptime monitoring.",
      icon: "Settings",
    },
    {
      title: "Responsive Design Audits",
      description:
        "Evaluation of existing websites for responsiveness across devices and browsers. Implementation of improvements using CSS3 media queries and modern design principles.",
      icon: "TabletSmartphone",
    },
    {
      title: "API Integrations",
      description:
        "Integration of third-party APIs (social media, payment gateways, etc.) into web applications using JavaScript and React.js. Ensures secure and efficient data handling.",
      icon: "Link",
    },
    {
      title: "MERN Stack Development",
      description:
        "Full-stack application development using MongoDB, Express.js, React.js, and Node.js. Builds scalable solutions with secure authentication and database management.",
      icon: "Database",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Creation of custom e-commerce platforms with the MERN stack, including secure payments, shopping carts, and order management systems.",
      icon: "ShoppingCart",
    },
  ],

  certificates: [
    {
      title: "Web & Mobile App Development",
      issuer: "S.M.I.T (Saylani Mass I.T Training)",
      date: "November 2025",
      image: "/assets/certificates/smit.jpg",
    },
    {
      title: "Front-End Development",
      issuer: "Aptech",
      date: "October 2024",
      image: "/assets/certificates/aptech.jpg",
    },
    {
      title: "IBA Hackathon",
      issuer: "IBA Karachi",
      date: "March 2025",
      image: "/assets/certificates/ibaprobattleimg.png",
    },
    {
      title: "Folio3 Workshop on AI",
      issuer: "Folio3",
      date: "July 2025",
      image: "/assets/certificates/folio3aiimg.png",
    },
    {
      title: "Hackathon",
      issuer: "S.M.I.T (Saylani Mass I.T Training)",
      date: "October 2025",
      image:
        "/assets/certificates/smithack.jpg",
    },
    {
      title: "Career Development Communication & Soft Skills",
      issuer: "AshreiTech Academy",
      date: "October 2022",
      image: "/assets/certificates/bpo.jpg",
    },
  ],
  contact: {
    email: "maheedsiddiqui29@gmail.com",
    phone: "+92-3443095675",
    address: "DHA-Phase II, Karachi, Pakistan",
  },
  year: new Date().getFullYear(),
};
