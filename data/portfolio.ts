export const portfolioData = {
  personal: {
    name: "Syed Muaviz Ur Rehman",
    title: "AI & Data Science Specialist",
    tagline: "Exploring the intersection of data, models, and real-world impact.",
    email: "muaviz@scholar.tu.edu.pk",
    cgpa: "3.89 / 4.00",
    socials: {
      github: "https://github.com/muaviz-ur-rehman",
      linkedin: "https://www.linkedin.com/in/syed-muaviz-ur-rehman/",
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
      company: "National University of Technology (NUTECH) / NAVTTC",
      period: "June 2024 - July 2024",
      description: "Completed an intensive training focusing on Advanced Python Programming & Applications, covering complex syntax and backend logic. Worked on analyzing bank transaction datasets to identify spending patterns.",
      achievements: ["Achieved an A+ Grade for superior proficiency in practical project implementation.", "Managed financial records and detected irregularities using Pandas, NumPy, and Matplotlib."]
    },
    {
      id: 2,
      role: "Technical Event Coordinator",
      company: "Thal University IT Club",
      period: "Nov 2025 - Present",
      description: "Organizing technical workshops and seminars, focusing on emerging technologies in Data Science and Artificial Intelligence.",
      achievements: ["Collaborated with faculty and student peers to foster a knowledge-sharing environment.", "Bridged the gap between academic theory and practical application."]
    },
    {
      id: 3,
      role: "Creative Lead & Graphic Designer",
      company: "Green Thal & Environment Protection Society",
      period: "Mar 2024 - Present",
      description: "Designed compelling visual assets for environmental advocacy campaigns, promoting tree plantation drives.",
      achievements: ["Successfully used visual storytelling to enhance community engagement.", "Raised awareness regarding climate protection strategies."]
    }
  ],
  education: {
    degree: "Bachelors in Computer Science",
    university: "Thal University, Bhakkar",
    status: "Final Year Student",
    cgpa: "3.89 / 4.00"
  },
  projects: [
    {
      id: 1,
      title: "Automated IELTS Essay Scoring",
      category: "AI & LLMs",
      description: "Engineered a pipeline to automate assessment of IELTS writing tasks. Utilizes Large Language Models (LLMs) and NLP techniques on 1,435 essays to deliver human-aligned band scores.",
      techStack: ["Python", "Transformers", "OpenAI API", "Pandas"],
      problemSolved: "Addresses the latency and inconsistency of manual grading.",
    },
    {
      id: 2,
      title: "Impact of Pre-processing on ML",
      category: "Data Science",
      description: "Leading an empirical analysis to evaluate the efficacy of data pre-processing techniques. Benchmarks model performance before and after implementing advanced cleaning protocols.",
      techStack: ["Python", "Scikit-Learn", "Matplotlib", "Seaborn"],
      problemSolved: "Highlights correlation between data hygiene and predictive accuracy.",
    },
    {
      id: 3,
      title: "Transaction Data Analysis",
      category: "Data Science",
      description: "Worked on analyzing bank transaction datasets to identify spending patterns, manage financial records, and detect irregularities.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib"],
      problemSolved: "Cleaned, processed, and visualized complex financial data anomalies.",
    },
    {
      id: 4,
      title: "Intelligent Street Light Control",
      category: "IoT",
      description: "Developed a hardware-based automation system to optimize power consumption in public lighting using light-dependent sensing.",
      techStack: ["IoT", "Hardware", "Sensors", "Automation Logic"],
      problemSolved: "Eliminates redundant energy usage by automatically adjusting state based on real-time visibility.",
    }
  ],
  research: [
    {
      title: "Leveraging Artificial Intelligence in Business Management: Optimizing Decision-Making and Operational Efficiency through Advanced Computer Science Techniques",
      journal: "Journal of Management Science Research Review",
      year: "2026",
      doi: "https://jmsrr.com/index.php/Journal/article/view/417"
    }
  ],
  certifications: [
    { title: "Information Technology Specialist: Python", issuer: "Pearson VUE / Certiport" },
    { title: "Advanced Python Programming & Applications", issuer: "NUTECH / NAVTTC" },
    { title: "Python for Everybody", issuer: "University of Michigan" },
    { title: "Python Development Trainee", issuer: "Summer of Code" }
  ],
  awards: [
    { title: "Honhaar Scholarships Awardee", issuer: "Thal University Bhakkar", description: "Awarded under the Punjab Higher Education Commission (PHEC) & Government of Pakistan." },
    { title: "Prime Minister's Laptop Scheme Awardee", issuer: "Thal University Bhakkar", description: "Awarded a laptop under the PMYLS Phase IV, empowering students with digital tools." }
  ]
};
