export const data = {
  name: "Priyanshi Shukla",
  photo: "images/priyanshi.jpg",
  location: "Washington D.C.",
  phone: "+1 (804) 386-9533",
  email: "pri.shukla007@gmail.com",
  github: "busybee001",
  linkedin: "priyanshidev",

  headline: "Innovative and collaborative software developer with 2+ years of experience building scalable applications and solving complex business problems.",

  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C", "C++", "OOPs", "R", "CSS"],
    tools: ["VS Code", "IntelliJ", "Android Studio", "Visual Studio", "Unity Engine", "n8n", "Databricks", "Snowflake", "RShiny", "AWS", "CI/CD Pipelines"],
    frameworks: ["Git", "NodeJS", "React", "ExpressJS", "MongoDB", "PostgreSQL", "Redis", "Kafka", "Relational & NoSQL Databases", "Machine Learning", "LLM", "AI", "RAG"],
  },

  experience: [
    {
      company: "caseFit Technologies",
      title: "Software Engineer",
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
      stack: ["ExpressJS", "WebSockets", "React", "AWS", "Llama-3", "MongoDB", "Tailwind CSS", "CI/CD", "Git"],
      bullets: [
        "Built an AI-integrated note-taking and to-do planner with realtime collaboration and chat.",
        "Used AWS services (Lambda, API Gateway) to run code in 5+ languages and return output within ~5 seconds.",
      ],
      links: [{ label: "Repo", href: "https://github.com/busybee001/NoteCraft" }],
    },
    {
      name: "Cancer Gene Detection",
      stack: ["Python", "R", "Jupyter Notebook"],
      bullets: [
        "Reduced dimensionality from 20K+ features to 500 features (~99.7% reduction).",
        "Applied multiple clustering algorithms on principal components and validated clusters using original labels.",
      ],
      links: [{ label: "Repo", href: "https://github.com/busybee001/Gene-Expression-Cancer-RNA-Sequence" }],
    },
    {
      name: "IntelliQuery Engine",
      stack: ["LLM", "RAG", "FAISS", "Embeddings", "Semantic Search"],
      bullets: [
        "Built a RAG system using LLM embeddings and FAISS vector search, enabling semantic search across 10K+ document chunks with <800ms response time.",
        "Implemented intent routing for legal queries, improving response accuracy by ~45% and reducing manual validation effort by ~50%.",
      ],
      links: [{ label: "Repo", href: "https://github.com/busybee001/IntelliQuery-Engine" }],
    },
  ],

  achievements: [
    "Lead multiple teams as the President of a top technical club (iOS Club)",
    "Recognized by the Hon. Assistant Vice President for university and club contributions",
    "2nd Position in college Hackathon",
    "Cleared multiple skill assessment certification exams (HackerRank, CodinGames)"
  ],

  education: [
    {
      school: "University of the Potomac",
      degree: "M.S. Computer Science - Artificial Intelligence",
      dates: "Feb 2026 – Dec 2027",
    },
    {
      school: "I.T. College Lucknow, IND",
      degree: "B.S. Information Technology",
      dates: "Aug 2016 – May 2020",
    },
  ],
};
