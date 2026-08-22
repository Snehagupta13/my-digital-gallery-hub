import dicomImage from "@/assets/dicompixel.png";
import stanleyImage from "@/assets/stanley-ai.png";
import videoSummarizerVideo from "@/assets/Vedio_Summarizer.mp4";
import resumePdf from "@/assets/sneha_resume.pdf";

export const profile = {
  name: "Sneha Gupta",
  role: "AI Engineer",
  location: "Kanpur, India",
  email: "vgupta123098@gmail.com",
  phone: "8960971817",
  github: "https://github.com/Snehagupta13",
  linkedin: "https://www.linkedin.com/in/sneha-gupta-325746210/",
  resumeUrl: resumePdf,
  tagline:
    "I build production AI systems — multi-agent workflows, RAG pipelines and voice assistants for regulated healthcare and medical imaging.",
};

export const experience = {
  company: "Meril Life Science",
  companyUrl: "https://www.merillife.com/",
  title: "AI Engineer",
  period: "Aug 2024 — Present",
  stack:
    "Python · LangChain · LangGraph · LiveKit · FastAPI · Hugging Face · LLMs · RAG · Ollama · FAISS · Redis",
  groups: [
    {
      name: "Stanley AI — Regulatory Intelligence Platform",
      points: [
        "End-to-end AI system for medical device regulatory automation supporting EU MDR, US FDA and CDSCO compliance.",
        "AI services for risk classification, component recommendation, GSPR generation and Design History Dossier (DHD) automation.",
        "Multi-agent workflows with LangGraph and LangSmith over OpenAI and Ollama models.",
        "Fine-tuned Flan-T5 and T5-small for domain summarization of regulatory documents, improving contextual accuracy and cutting hallucinations.",
        "Stella — a chat-based assistant that generates and manages complete Design History Dossiers conversationally.",
        "Stan — a multilingual voice assistant (Hindi, English, Gujarati) for querying design inputs and regulatory knowledge.",
      ],
    },
    {
      name: "Knowledge Graph & Infrastructure",
      points: [
        "LightRAG pipelines processing FDA data and regulatory PDFs into a Neo4j knowledge graph.",
        "Scalable architecture on Milvus (vector DB) + Redis caching, deployed with Docker on on-premise systems.",
      ],
    },
    {
      name: "DICOMPixel — Medical Imaging Platform",
      points: [
        "Microservices for image conversion, metadata extraction, annotation, compression and segmentation.",
      ],
    },
  ],
};

export const education = {
  degree: "B.Tech, Computer Science (AI)",
  school: "Pranveer Singh Institute of Technology",
  period: "Dec 2020 — June 2024",
  detail: "GPA 7.90",
};

export const skills = [
  {
    group: "Programming & Frameworks",
    items: [
      "Python",
      "OpenClaw",
      "Pipecat",
      "LiveKit",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "LangChain",
      "LangGraph",
      "Django",
      "FastAPI",
      "SQL",
    ],
  },
  {
    group: "Tools & Libraries",
    items: [
      "Git",
      "Docker",
      "RESTful APIs",
      "Redis",
      "Sphinx",
      "GitHub",
      "Groq",
      "Postman",
      "CrewAI",
      "Streamlit",
      "Docling",
      "HyperExtract",
      "AWS (EC2, S3, Lambda, SageMaker)",
      "PostgreSQL",
    ],
  },
];

export type Project = {
  name: string;
  repo: string;
  url: string;
  summary: string;
  tools: string[];
  featured?: boolean;
  video?: string;
};

export const projects: Project[] = [
  {
    name: "MediScribe AI",
    repo: "MediScribe_AI",
    url: "https://github.com/Snehagupta13/MediScribe_AI",
    summary:
      "Voice medical scribe that transcribes and diarizes doctor–patient conversations in real time, then routes transcripts to parallel LLM agents producing clinical notes, urgency alerts, plain-language summaries and Ayurvedic assessments. Full-stack: FastAPI (REST + WebSocket streaming) with a React/Vite dashboard deployed on Render.",
    tools: ["Pipecat", "WhisperX", "pyannote", "Groq", "LangGraph", "MongoDB", "React", "Docker"],
    featured: true,
  },
  {
    name: "Video Captioning & RAG Chatbot",
    repo: "Video_summarizer",
    url: "https://github.com/Snehagupta13/Video_summarizer",
    summary:
      "Multimodal video-understanding pipeline: frame sampling with BLIP scene captions, EasyOCR for on-screen text and WhisperX speech transcripts, fused by a LangGraph StateGraph into one narrative. A FAISS + sentence-transformers RAG chatbot answers questions over the video via CLI and Streamlit.",
    tools: ["LangGraph", "BLIP", "EasyOCR", "WhisperX", "Groq/Llama 3", "FAISS", "Streamlit"],
    featured: true,
    video: videoSummarizerVideo,
  },
  {
    name: "Ayurveda AI",
    repo: "Ayurveda-ai",
    url: "https://github.com/Snehagupta13/Ayurveda-ai",
    summary:
      "Fully offline Ayurvedic clinical assistant with a graph pipeline and multimodal tongue analysis, built for rural practitioners without reliable internet. Submitted to the MedGemma Impact Challenge.",
    tools: ["MedGemma", "Graph pipeline", "Computer Vision", "Python"],
    featured: true,
  },
  {
    name: "AI Interactive Course",
    repo: "AI_Interactive_course",
    url: "https://github.com/Snehagupta13/AI_Interactive_course",
    summary:
      "Learning platform that turns study material into interactive courses — auto-generated quizzes, RAG-based Q&A over local content, gamified progress and theming.",
    tools: ["RAG", "Python", "Streamlit"],
  },
  {
    name: "GraphMind",
    repo: "GraphMind",
    url: "https://github.com/Snehagupta13/GraphMind",
    summary: "Agentic assistant built on LangGraph's graph-based reasoning logic.",
    tools: ["LangGraph", "LLMs", "Python"],
  },
  {
    name: "YouTube Chatbot Extension",
    repo: "Youtube-Chatbot-Extension",
    url: "https://github.com/Snehagupta13/Youtube-Chatbot-Extension",
    summary:
      "Chrome extension with a Python backend that summarizes and answers questions about YouTube videos in real time.",
    tools: ["Chrome Extension", "Python", "LLMs"],
  },
  {
    name: "Invoice Extractor",
    repo: "Invoice_Extractor",
    url: "https://github.com/Snehagupta13/Invoice_Extractor",
    summary:
      "Scalable pipeline extracting structured fields from invoice images using EasyOCR for text and LangChain-driven LLM parsing.",
    tools: ["EasyOCR", "LangChain", "Python"],
  },
  {
    name: "Secure Data Analysis",
    repo: "-Secure-Data-Analysis",
    url: "https://github.com/Snehagupta13/-Secure-Data-Analysis",
    summary:
      "Streamlit app that analyzes uploaded Excel data with Groq LLMs — natural-language queries become Python code executed safely with pandas, with multi-threaded chat history.",
    tools: ["Streamlit", "LangChain", "Groq", "pandas"],
  },
  {
    name: "LLM-Powered Fact Checker",
    repo: "-LLM-Powered-Fact-Checker",
    url: "https://github.com/Snehagupta13/-LLM-Powered-Fact-Checker",
    summary: "Claim verification pipeline that retrieves evidence and adjudicates statements with LLMs.",
    tools: ["LLMs", "RAG", "Python"],
  },
  {
    name: "Trip Planner",
    repo: "Trip_Planner",
    url: "https://github.com/Snehagupta13/Trip_Planner",
    summary: "Agentic travel itinerary planner that composes multi-day trips from user constraints.",
    tools: ["CrewAI", "LLMs", "Python"],
  },
  {
    name: "SLM Finetune",
    repo: "slm_finetune",
    url: "https://github.com/Snehagupta13/slm_finetune",
    summary:
      "Notebooks for fine-tuning small language models on domain-specific summarization tasks.",
    tools: ["Hugging Face", "PyTorch", "Jupyter"],
  },
  {
    name: "Tweet Sentiment Analysis",
    repo: "Tweet-Sentiment-Analysis",
    url: "https://github.com/Snehagupta13/Tweet-Sentiment-Analysis",
    summary: "Classical NLP sentiment classifier over tweet corpora.",
    tools: ["NLP", "Scikit-learn", "Python"],
  },
];

export type WorkProject = {
  name: string;
  org: string;
  tagline: string;
  summary: string;
  image: string;
  tools: string[];
};

export const workProjects: WorkProject[] = [
  {
    name: "Stanley AI",
    org: "Meril Life Science",
    tagline: "Compliance, supported by agentic intelligence.",
    summary:
      "Medical device documentation workspace for EU MDR, US FDA and CDSCO submissions — generating design inputs, GSPR coverage and audit-ready dossiers in a single session-aware platform. I built the multi-agent workflows, RAG retrieval and the Stella / Stan assistants.",
    image: stanleyImage,
    tools: ["LangGraph", "LangSmith", "RAG", "Neo4j", "Milvus", "FastAPI", "Ollama"],
  },
  {
    name: "DicomPixel",
    org: "Meril Life Science",
    tagline: "From data chaos to AI-driven precision.",
    summary:
      "Medical imaging platform bringing order to unstructured DICOM data — microservices for image conversion, metadata extraction, annotation, compression and segmentation, powering downstream AI in healthcare.",
    image: dicomImage,
    tools: ["Python", "DICOM", "Microservices", "OpenCV", "Docker", "FastAPI"],
  },
];
