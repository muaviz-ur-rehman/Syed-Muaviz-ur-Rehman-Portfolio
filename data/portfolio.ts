export const portfolioData = {
  personal: {
    name: "Syed Muaviz Ur Rehman",
    title: "AI & Data Science Specialist",
    tagline: "Exploring the intersection of data, models, and real-world impact.",
    email: "muaviz@scholar.tu.edu.pk",
    cgpa: "3.89 / 4.00",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    about: "I am a final-year Computer Science student specializing in Python, AI, and Data Science. With a rigorous academic background (CGPA 3.89/4.00) and hands-on experience as a Python Development Trainee, I am passionate about building intelligent systems and extracting meaningful insights from complex data. I serve as a Technical Event Coordinator and Creative Lead, blending technical proficiency with leadership and communication."
  },
  skills: [
    { category: "Languages", items: ["Python", "Java", "SQL", "JavaScript", "C++"] },
    { category: "AI / ML / Data", items: ["Machine Learning", "Deep Learning", "LLMs", "Data Science", "Pandas", "Scikit-Learn"] },
    { category: "Technologies", items: ["IoT", "Git", "Docker", "REST Analytics", "Cloud Concepts"] },
  ],
  experience: [
    {
      id: 1,
      role: "Python Development Trainee",
      company: "Tech Institute",
      period: "2023 - Present",
      description: "Working on enterprise-level Python applications, leading data processing pipelines, and assisting in AI model evaluation.",
      achievements: ["Optimized data parsing speed by 35%.", "Developed internal tools using Pandas and Flask."]
    },
    {
      id: 2,
      role: "Technical Event Coordinator & Creative Lead",
      company: "University Student Council",
      period: "2022 - 2024",
      description: "Organizing hackathons, technical workshops, and coding competitions. Leading the creative team for branding and digital outreach.",
      achievements: ["Successfully coordinated 3 major tech symposiums.", "Increased student participation by 40%."]
    }
  ],
  education: {
    degree: "Bachelors in Computer Science",
    university: "Technical University",
    status: "Final Year Student",
    cgpa: "3.89 / 4.00"
  },
  projects: [
    {
      id: 1,
      title: "Automated IELTS Essay Scoring",
      category: "AI & LLMs",
      description: "An intelligent system that leverages advanced LLMs and NLP techniques to evaluate, score, and provide feedback on IELTS essays.",
      techStack: ["Python", "Transformers", "OpenAI API", "Pandas"],
      problemSolved: "Reduces human grading time and provides instant, standardized feedback for test-takers.",
    },
    {
      id: 2,
      title: "Impact of Pre-processing on ML",
      category: "Data Science",
      description: "A comprehensive analytical project evaluating how various data cleaning and normalization techniques affect predictive accuracy.",
      techStack: ["Python", "Scikit-Learn", "Matplotlib", "Seaborn"],
      problemSolved: "Guided internal data teams on selecting optimal pre-processing pipelines.",
    },
    {
      id: 3,
      title: "Transaction Data Analysis",
      category: "Data Science",
      description: "A deep dive into millions of financial transactions to detect patterns, anomalies, and potential fraud vectors.",
      techStack: ["SQL", "Python", "Pandas", "Plotly"],
      problemSolved: "Identified outlier transaction clusters indicating potential high-risk activities.",
    },
    {
      id: 4,
      title: "Intelligent Street Light Control",
      category: "IoT",
      description: "An IoT-based smart system that adjusts street lighting dynamically based on real-time pedestrian and vehicle traffic.",
      techStack: ["C++", "Arduino", "IoT Sensors", "Python"],
      problemSolved: "Substantially decreased energy consumption during low-traffic periods.",
    }
  ],
  research: [
    {
      title: "Optimized Pathways for NLP Task Execution",
      journal: "Journal of Computer Sciences",
      year: "2024",
      doi: "https://doi.org/10.1000/xyz123"
    }
  ],
  certifications: [
    { title: "IBM Data Science Professional", issuer: "IBM / Coursera" },
    { title: "Deep Learning Specialization", issuer: "DeepLearning.AI" },
    { title: "Python for Everybody", issuer: "University of Michigan" }
  ]
};
