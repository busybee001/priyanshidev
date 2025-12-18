export const data = {
  name: "Priyanshi Shukla",
  photo: "images/priyanshi.jpg",
  location: "Richmond, VA",
  phone: "+1 (804) 386-9533",
  email: "pri.shukla007@gmail.com",
  github: "busybee001",
  linkedin: "priyanshidev",
  resumeUrl: "/Priyanshi_Shukla_Resume.pdf",

  headline: "Innovative and collaborative software developer with 2+ years of experience building scalable applications and solving complex business problems.",

  skills: {
    languages: ["Python", "Flutter (Dart)", "JavaScript", "SQL", "Java", "C", "C++", "R"],
    tools: ["VS Code", "IntelliJ", "Android Studio", "Visual Studio", "Unity Engine", "n8n", "Databricks", "Snowflake", "RShiny"],
    frameworks: ["Git", "NodeJS", "Flutter", "React", "ExpressJS", "MongoDB", "Redis", "Kafka"],
  },

  experience: [
    {
      company: "caseFit Technologies",
      title: "Software Developer",
      dates: "Sep 2021 – Jun 2023",
      bullets: [
        "Owned end-to-end development of core caseFit services (mobile + backend), delivering production-ready features with high availability (99%+) and reducing user-visible latency by ~75% through optimized API design and data flow.",
        "Designed and implemented scalable backend services using FastAPI and PostgreSQL, reducing query execution time by 3× and improving system throughput for consultation requests by 40%.",
        "Collaborated with stakeholders on requirements, UX design, and release planning, enabling a functioning MVP in under 8 weeks while maintaining code quality and operational stability.",
      ],
    },
  ],

  projects: [
    {
      name: "Notecraft-AI",
      stack: ["ExpressJS", "WebSockets", "React", "AWS", "Llama-3", "MongoDB", "Tailwind CSS", "CI/CD"],
      bullets: [
        "Built an AI-integrated note-taking and to-do planner with realtime collaboration and chat.",
        "Used AWS services (Lambda, API Gateway) to run code in 5+ languages and return output within ~5 seconds.",
      ],
      links: [{ label: "Repo", href: "" }],
    },
    {
      name: "Cancer Gene Detection",
      stack: ["Python", "R", "Jupyter Notebook"],
      bullets: [
        "Reduced dimensionality from 20K+ features to 500 features (~99.7% reduction).",
        "Applied multiple clustering algorithms on principal components and validated clusters using original labels.",
      ],
      links: [{ label: "Repo", href: "" }],
    },
  ],

  achievements: [
    "2nd Position in college Hackathon",
    "5+ games/apps published on Google Play with 1000+ users",
    "Developed Tech-Fest adVITya website serving 15,000+ users",
    "First Runner-up in AI-Buildathon (secured an internship)",
    "Runner-up in IT Unplugged’20 Hackathon",
    "Cleared multiple skill assessment certification exams (HackerRank, CodinGames)"
  ],

  education: [
    {
      school: "IT University Lucknow, IN",
      degree: "BS in Biology and IT",
      dates: "Aug 2016 – May 2021",
    },
  ],
};
