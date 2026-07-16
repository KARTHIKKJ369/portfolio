import { Mail, Github, Linkedin } from 'lucide-react'

// Central content store — keeps project/skill/experience data separate from UI components.

export const heroRoles = ['AI Systems Engineer', 'Full Stack Developer', 'RAG & LLM Builder']

export const projects = [
  {
    title: 'Backwater Collision Avoidance',
    tag: 'IoT · Embedded · ML',
    featured: true,
    problem:
      'Small boats on backwaters at night have no way to sense each other coming — no radar, no AIS, often no lights.',
    solution:
      'A two-node ESP32 system where a gateway and sensor boat exchange GPS and motion data over AES-128 CBC encrypted LoRa. A FastAPI backend runs an LSTM trajectory predictor and streams live positions to a React + Leaflet dashboard for real-time collision risk.',
    tech: ['ESP32', 'LoRa', 'FastAPI', 'LSTM', 'React', 'Leaflet'],
    href: 'https://github.com/KARTHIKKJ369/backwater_collision_avoidance',
  },
  {
    title: 'Recall',
    tag: 'AI · NLP · Research',
    featured: false,
    problem: 'LLMs forget everything between sessions — there is no persistent, human-like memory layer.',
    solution:
      'A persistent semantic memory architecture built around a three-agent pipeline — Intake, Knowledge, and Response — with hybrid BM25 and dense retrieval, plus an Ebbinghaus-inspired decay model so memories fade the way human ones do. Accepted at JETIR.',
    tech: ['Python', 'RAG', 'BM25', 'Sentence transformers'],
    href: undefined as string | undefined,
  },
  {
    title: 'Recall CRAG',
    tag: 'AI · RAG · LangGraph',
    featured: false,
    problem: 'Traditional RAG blindly trusts whatever it retrieves — bad context in, hallucinated answer out.',
    solution:
      'A local-first Corrective RAG (CRAG) system orchestrated with LangGraph: retrieved documents are graded for relevance before generation, weak queries get automatically rewritten and retried, and everything runs offline via Ollama and ChromaDB with MMR retrieval.',
    tech: ['Python', 'LangGraph', 'Ollama', 'ChromaDB', 'Sentence transformers'],
    href: undefined as string | undefined,
  },
  {
    title: 'Hostel Management System',
    tag: 'Full-stack',
    featured: false,
    problem: 'Hostel admin — room allocation, fees, maintenance — was scattered across spreadsheets and paper.',
    solution:
      'A complete hostel administration platform covering room allocation, fee tracking, maintenance requests, and role-based admin dashboards end to end.',
    tech: ['Node.js', 'Express', 'Supabase'],
    href: undefined as string | undefined,
  },
]

export const skillGroups = [
  { title: 'AI Systems', items: ['RAG', 'LLMs', 'LangChain', 'LangGraph', 'Ollama', 'Vector Databases', 'Prompt Engineering'], size: 'wide' as const },
  { title: 'Frontend', items: ['React', 'JavaScript', 'Next.js', 'Tailwind'], size: 'medium' as const },
  { title: 'Backend', items: ['FastAPI', 'Node.js', 'MongoDB', 'SQL'], size: 'medium' as const },
  { title: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'OpenCV'], size: 'medium' as const },
  { title: 'Cloud & Tools', items: ['Docker', 'Git', 'Firebase', 'Supabase'], size: 'medium' as const },
]

export const timeline = [
  {
    period: '2026',
    title: 'Research Intern',
    org: 'CyberLabs — Advanced Cryptology & Quantum-Safe Communication Research Lab, IIIT Kottayam',
    description: 'A 10-day offline technical research internship focused on cryptology and quantum-safe communication.',
  },
  {
    period: '2026',
    title: 'Participant, Vajra Hackathon (ASME Spectrum 5.0)',
    org: 'Offline round',
    description: 'Built under time pressure in an in-person hackathon setting.',
  },
  {
    period: '2025 – Present',
    title: 'Group 9 Mini Project — Recall',
    org: 'Mar Athanasius College of Engineering',
    description:
      'Led development of a persistent semantic memory architecture for LLMs under faculty guides Prof. Nimisha P Abraham and Prof. Leya Elizabeth. Accepted at JETIR, submitted to Rajagiri.',
  },
  {
    period: '2023 – Present',
    title: 'FOSS Team Member',
    org: 'NetX MACE',
    description: 'Open-source contribution, community participation, and technical workshops.',
  },
  {
    period: '2023 – Present',
    title: 'Volunteer',
    org: 'Hult Prize, MACE',
    description: 'Event organization, team coordination, and technical support.',
  },
]

export const education = [
  {
    period: '2023 – 2027',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Mar Athanasius College of Engineering (Autonomous), Kothamangalam',
    description: 'KTU 2019 scheme. Currently in S6/S7.',
    stat: '9.14',
    statLabel: 'CGPA',
  },
]

export const focusAreas = ['AI Systems', 'RAG & LLMs', 'Full Stack', 'Computer Vision', 'Research']

export const socials = [
  { icon: Mail, label: 'karthikjayan369@gmail.com', short: 'Email', href: 'mailto:karthikjayan369@gmail.com' },
  { icon: Github, label: 'github.com/KARTHIKKJ369', short: 'GitHub', href: 'https://github.com/KARTHIKKJ369' },
  { icon: Linkedin, label: 'linkedin.com/in/karthik-jayan', short: 'LinkedIn', href: 'https://www.linkedin.com/in/karthik-jayan-8544ba267/' },
]
