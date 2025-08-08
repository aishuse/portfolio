export const bio = [
  "Hi, I’m Aiswarya — a <strong style='color: #FF6347;'>Data Science and Generative / Agentic AI enthusiast</strong> with a strong academic foundation and a passion for lifelong learning.<br><br>" +

  "My skills have been developed through a mix of formal education and self-initiated exploration. While my academic background has equipped me with core concepts in data science, I’ve also gone beyond the classroom — diving into emerging technologies like LangChain, RAG pipelines, and agentic AI through hands-on projects and continuous self-learning.<br><br>" +

  "I'm driven by curiosity and a deep interest in building intelligent, real-world solutions. Whether it's analyzing complex data or experimenting with the latest AI tools, I enjoy learning fast, solving problems, and contributing meaningfully through what I create.<br><br>" +

  "<span style='font-size: 18px;'>Want to know more about me? 🤖 " +
  "<a href='https://aiswarya-assistant.streamlit.app/' target='_blank' style='color: #00FFFF; font-weight: bold; text-decoration: none;'>" +
  "Ask my Assistant chatbot!</a></span>" +
  "<img src='https://img.icons8.com/fluency/24/robot-2.png' alt='chatbot icon' style='vertical-align: middle; margin-left: 6px;'/>"
];




export const skills = [
  {
    title: "Data Science & AI",
    skillName: "ML, DL, NLP, Transformers",
    color: "1",
    percentage: "85",
  },
  {
    title: "Generative & Agentic AI",
    skillName: "LangChain, LangGraph, Agno, RAG Pipelines",
    color: "2",
    percentage: "70",
  },
  {
    title: "API & Backend Development",
    skillName: "FastAPI, REST APIs, Pydantic, Streamlit",
    color: "3",
    percentage: "70",
  },
  {
    title: "Big Data Technologies",
    skillName: "Hadoop, Spark, Hive, Pig",
    color: "4",
    percentage: "70",
  },
  {
    title: "Frameworks & Libraries",
    skillName: "Django, Pandas, NumPy, TensorFlow, Keras, Scikit-learn",
    color: "5",
    percentage: "80",
  },
  {
    title: "Cloud & DevOps",
    skillName: "AWS (EC2, S3), Docker",
    color: "6",
    percentage: "70",
  },
  {
    title: "Data Analysis & Visualization",
    skillName: "Power BI, Matplotlib, Seaborn",
    color: "7",
    percentage: "70",
  },
  {
    title: "Languages",
    skillName: "Python, JavaScript, SQL",
    color: "8",
    percentage: "85",
  },
  {
    title: "Version Control & Collaboration",
    skillName: "GitHub, JIRA",
    color: "9",
    percentage: "75",
  }
];



export const projects = {
    LangChainProjects: [
                {
          projectName: "Patient management system",
          image: "images/hs.avif",
          summary:
            "interactive Patient Management System on AWS using FastAPI and Streamlit, integrating \n" +
              "data querying with LangChain, Groq LLM, and DuckDuckGo tools to provide real-time medical insights.   | Click here",
          preview: "https://patient-management-system-ais.streamlit.app/",
          techStack: ["AGNO ","Langchain", "FastAPI", "Python", "Groq"],
        },
        {
          projectName: "Travel Assistant Chat",
          image: "images/ai.png",
          summary:
            "AI travel assistant using the Agno framework, integrating autonomous agents with tool-augmented reasoning and real-time weather APIs to deliver personalized travel planning.   | Click here",
          preview: "https://travel-assistant-ais.streamlit.app/",
          techStack: ["AGNO ","OpenWeatherMap API", "Python", "Groq"],
        },
        {
          projectName: "YT-TranscriptBot",
          image: "images/yt.jpeg",
          summary:
            "YT-TranscriptBot: Smart Q&A from Video Transcripts using FAISS + Groq   | Click here",
          preview: "https://youtube-transcript-chat.streamlit.app/",
          techStack: ["LangChain ", "RAG", "Python", "Groq","FAISS"],
        },
         {
          projectName: "My AI Assistant | Click here",
          image: "images/cht.png",
          summary:
            "Personalized AI assistant chatbot using LangChain and Streamlit to deliver real-time, context-aware responses about me.",
          preview: "https://my-assistant-chatbot.streamlit.app/",
          techStack: ["LangChain", "Groq", "Python", "Streamlit"],
        },

      ],
   NLPProjects: [
    {
      projectName: "Question Answering",
      image: "images/qa.jpg",
      summary:
        "Question answering-T5 FineTuning",
      preview: "https://question-answering-ais.streamlit.app/",
      techStack: ["T5", "Pytorch", "Python", "Streamlit"],
    },
    {
      projectName: "Next word prediction",
      image: "images/img1.webp",
      summary:
        "NEXT WORD PREDICTION",
      preview: "https://next-word-pred-ais.streamlit.app/",
      techStack: ["GRU", "Tensorflow", "Python", "Streamlit"],
    },
       {
      projectName: "FAKE NEWS DETECTION",
      image: "images/fake.jpg",
      summary:
        "FAKE NEWS DETECTION",
      preview: "https://fake-news-detection-ais.streamlit.app/",
      techStack: ["TF-IDF", "Tensorflow", "Python", "Streamlit"],
    },
     {
      projectName: "More Projects",
      image: "images/git.webp",
      summary:
        "Find more projects here",
      preview: "https://github.com/aishuse/NLP-Projects",
      techStack: ["Tensorflow", "Keras", "Python", "Streamlit"],
    },

  ],
  DLProjects: [
     {
      projectName: "Diabetes Prediction using ANN",
      image: "images/img.webp",
      summary:
        "Diabetes Prediction using ANN      | Click here",
      preview: "https://diabetes-pred-ais.streamlit.app/",
      techStack: ["Tensorflow", "Keras", "Python", "Streamlit"],
    },
           {
      projectName: "Brain Tumor Classification",
      image: "images/brain.webp",
      summary:
        "Brain Tumor Classification using CNN      | Click here",
      preview: "https://brain-tumor-class-ais.streamlit.app/",
      techStack: ["Tensorflow", "OpenCV", "Python", "Streamlit"],
    },
     {
      projectName: "More Projects",
      image: "images/git.webp",
      summary:
        "Find more projects here",
      preview: "https://github.com/aishuse/DeepLearning-Projects",
      techStack: ["Tensorflow", "Keras", "Python", "Streamlit"],
    },
  ],
  MLProjects: [
    {
      projectName: "House price",
      image: "images/house.jpg",
      summary:
        "House Price Prediction   | Click here",
      preview: "https://house-price-pred-blr-ais.streamlit.app/",
      techStack: ["Tensorflow", "Keras", "Python", "Streamlit"],
    },
     {
      projectName: "More Projects",
      image: "images/git.webp",
      summary:
        "Find more projects here",
      preview: "https://github.com/aishuse/Machine-Learning-Projects",
      techStack: ["Tensorflow", "Keras", "Python", "Streamlit"],
    },

  ],
};

export const experience = [
  {
    title: "SayOne Technologies ",
    duration: "November 2021 - August 2024",
    subtitle: "Software Engineer",
    details: [" Designed, enhanced, and maintained scalable web applications using Django and Python.\n"],
    tags: ["Python", "Django", "Javascript","DjangoREST"],
    icon: "truck ",
  },
  {
    title: "PurpleTutor",
    duration: "August 2021 - January 2024",
    subtitle: "Coding Instructor",
    details: [
      "Taught Python, Machine Learning, AI, and web development basics to over 25+ young students.",

    ],
    tags: [
      "JavaScript",
      "Scartch",
      "Python",
      "AI basics",
      "Web development",
      "App development",

    ],
    icon: "book",
  },
   {
    title: "SpeedLabs",
    duration: "February 2024 - August 2024",
    subtitle: "Coding Instructor",
    details: [
      `Taught young students the basics of coding, focusing on
 fundamental programming concepts and skills.`,

    ],
    tags: [
      "JavaScript",
      "Scartch",
      "Python",
      "AI basics",
      "Web development",
      "App development",

    ],
    icon: "book",
  },
];




export const education = [
    {
    title: "Pursuing Masters in Data Science and Analytics",
    duration: "September 2024 - August 2025",
    subtitle: "Toronto Metropolitan University, ON, Canada",
    details: [],
    tags: [
       "Machine Learning", "Deep Learning", "NLP", "Data Mining", "Big Data & Tools", "Des Algorithm & Programming"
       ],
    icon: "graduation-cap",
  },

    {
    title: "M.Tech. in Computer Science and Information Systems",
    duration: "Aug 2015 - May 2017",
    subtitle: "APJ Abdul Kalam Technological University, Kerala, India",
    details: [],
    tags: [
          ],
    icon: "graduation-cap",
  },
  {
    title: "B.Tech. in Computer Science and Engineering",
    duration: "Aug 2009 - May 2013",
    subtitle: "Mahatma Gandhi University, Kerala, India",
    details: [],
    tags: [
          ],
    icon: "graduation-cap",
  },

];


export const training = [


  {
    title: "Big Data and Data Science Training",
    duration: "2023",
    subtitle: "Luminar Technolab",
    icon: "graduation-cap",
    details: [],
    tags: [
          ],
            link: "https://www.linkedin.com/in/aiswarya-baby/",

  },
    {
    title: " Python/Django Training, Luminar Technolab",
    duration: "2021",
    subtitle: "Luminar Technolab",
    icon: "graduation-cap",
    details: [],
    tags: [
          ],
  },

       {
    title: " Web Application Development",
    duration: "2014 - 2015",
    subtitle: "Keltron",
    details: [],
    tags: [
          ],
    icon: "graduation-cap",
  },

];


export const certifications = [

    {
    title: " Big Data Analytics & Data Science ",
    duration: "2023",
    subtitle: "National Council for Technology and Training",
    details: [
        "Credential ID: 44497"
    ],
    tags: [
          ],
    links: [
            { url: "images/datascience.pdf", text: "View Certificate" },
        ],
    icon: "book",
  },
    {
    title: "Python - Web Development Expert ",
    duration: "2021",
    subtitle: "National Council for Technology and Training",
    details: [
        "Credential ID: 30386"
    ],
    tags: [
          ],
    links: [
            { url: "images/python.pdf", text: "View Certificate" },
        ],
    icon: "book",
  },

        {
    title: "Databases and SQL for Data Science with Python ",
    duration: "2023",
    subtitle: "Coursera",
    details: [

    ],
    tags: [
          ],
    links: [
            { url: "https://www.coursera.org/account/accomplishments/certificate/2VUGPPTKVNEX", text: "View Certificate" },
        ],
    icon: "book",
  },

   {
    title:  "Tools for Data Science ",
    duration: "2023",
    subtitle: "Coursera",
    details: [

    ],
    tags: [
          ],
    links: [
            { url: "https://www.coursera.org/account/accomplishments/certificate/623RC6GJTBXA", text: "View Certificate" },
        ],
    icon: "book",
  },

     {
    title:  "Python Project for Data Science",
    duration: "2023",
    subtitle: "Coursera",
    details: [

    ],
    tags: [
          ],
    links: [
            { url: "https://www.coursera.org/account/accomplishments/certificate/BURQDFW7YCTH", text: "View Certificate" },
        ],
    icon: "book",
  },

         {
    title:  " Python for Data Science, AI & Development",
    duration: "2021",
    subtitle: "Coursera",
    details: [

    ],
    tags: [
          ],
    links: [
            { url: "https://www.coursera.org/account/accomplishments/certificate/Y9QQH7BTLBNW", text: "View Certificate" },
        ],
    icon: "book",
  },

             {
    title:  "What is Data Science?",
    duration: "2021",
    subtitle: "Coursera",
    details: [

    ],
    tags: [
          ],
    links: [
            { url: "https://www.coursera.org/account/accomplishments/certificate/5NNTWSDMAS2N", text: "View Certificate" },
        ],
    icon: "book",
  },

       {
    title:  "Python (Basic)",
    duration: "2021",
    subtitle: "Hackerrank",
    details: [

    ],
    tags: [
          ],
    links: [
            { url: "https://www.hackerrank.com/certificates/ea6639104a36", text: "View Certificate" },
        ],
    icon: "book",
  },

       {
    title:  "SQL (Basic)",
    duration: "2021",
    subtitle: "Hackerrank",
    details: [

    ],
    tags: [
          ],
    links: [
            { url: "https://www.hackerrank.com/certificates/288aa8e0cb54", text: "View Certificate" },
        ],
    icon: "book",
  },

      {
    title:  "Web Application Development",
    duration: "2015",
    subtitle: "Keltron",
    details: [

    ],
    tags: [
          ],
    links: [
            { url: "images/keltron.pdf", text: "View Certificate" },
        ],
    icon: "book",
  },

];



export const publications = [

  {
    title: " Exploring Advanced Techniques for Visual Question Answering: A Comprehensive Comparison",
    duration: "February 2025",
    subtitle: "arXiv",
    links: [
            { url: "https://arxiv.org/abs/2502.14827 ", text: "Visit publication" },
        ],
    details: [],
    tags: [
          ],
    icon: "book",
  },

    {
    title: " Combined Strength of Cryptography and steganography - A Literature Survey",
    duration: "March-April 2017",
    subtitle: "International Journal of Advanced\n" +
        "Research in Computer Science (IJARCS), Volume 8, Issue II (ISSN:0976-5697).",
    links: [
            { url: "https://www.ijarcs.info/index.php/Ijarcs/article/view/3145", text: "Visit publication" },
        ],
    details: [],
    tags: [
          ],
    icon: "book",
  },

   {
    title: " A Literature Survey on Data Leak Detection\n" +
        "And Prevention Method",
    duration: "May-June 2017",
    subtitle: "International Journal of Advanced\n" +
        "Research in Computer Science (IJARCS), Volume 8, Issue IV (ISSN:0976-5697).",
    details: [],
      links: [
            { url: "https://www.ijarcs.info/index.php/Ijarcs/article/view/3925", text: "Visit publication" },
        ],
    tags: [
          ],
    icon: "book",
  },
];


export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/aishuse",
      },
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/aiswarya-baby/",
      },
              {
        text: "Email: babyaiswarya180@gmail.com, aiswarya.baby@torontomu.ca ",
      },
    ],

  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableLightMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },

    ],
  },


];
