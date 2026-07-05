import { Mail, Github, Linkedin } from 'lucide-react'

// Central content store — keeps project/skill/experience data separate from UI components.

export const projects = [
  {
    title: 'Backwater Collision Avoidance',
    tag: 'IoT · Embedded · ML',
    description:
      'A two-node ESP32 system where a gateway and sensor boat exchange GPS and motion data over AES-128 CBC encrypted LoRa. A FastAPI backend runs an LSTM trajectory predictor and streams live positions to a React + Leaflet dashboard for real-time collision risk.',
    tech: ['ESP32', 'LoRa', 'FastAPI', 'LSTM', 'React', 'Leaflet'],
    href: 'https://github.com/KARTHIKKJ369/backwater_collision_avoidance',
  },
  {
    title: 'Recall 2.0',
    tag: 'AI · NLP · Research',
    description:
      'A persistent semantic memory architecture for LLMs built around a three-agent pipeline — Intake, Knowledge, and Response — with hybrid BM25 and dense retrieval, plus an Ebbinghaus-inspired decay model so memories fade the way human ones do. Accepted at JETIR.',
    tech: ['Python', 'RAG', 'BM25', 'Sentence transformers'],
    href: undefined as string | undefined,
  },
  {
    title: 'NeuroSnake',
    tag: 'AI · Game Dev',
    description:
      'A twist on classic Snake with an AI-driven difficulty-scaling algorithm that adapts to how well the player is doing, built alongside multiplayer mechanics.',
    tech: ['Python', 'Game AI'],
    href: undefined as string | undefined,
  },
  {
    title: 'Hostel Management System',
    tag: 'Full-stack',
    description:
      'A complete hostel administration platform covering room allocation, fee tracking, maintenance requests, and role-based admin dashboards end to end.',
    tech: ['Node.js', 'Express', 'Supabase'],
    href: undefined as string | undefined,
  },
]

export const skillGroups = [
  { title: 'Languages & frameworks', items: ['Python', 'C / C++', 'TypeScript / JavaScript', 'Java', 'SQL', 'Flutter'] },
  { title: 'Backend & systems', items: ['FastAPI', 'Node.js / Express', 'Docker', 'Linux', 'Caddy / Nginx', 'Tailscale', 'Supabase'] },
  { title: 'AI / ML', items: ['LSTM & sequence models', 'RAG pipelines', 'Sentence transformers', 'Local LLMs (Ollama)', 'TensorFlow Lite'] },
  { title: 'AI & cloud tools', items: ['Google AI Studio', 'Gemini API', 'NVIDIA NGC'] },
  { title: 'IoT & embedded', items: ['ESP32', 'LoRa (AES-128 CBC)', 'MPU6050 / HC-SR04', 'Wokwi & PlatformIO'] },
  { title: 'Data & tooling', items: ['MQTT', 'Hybrid BM25 + dense retrieval', 'Git', 'REST API design'] },
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
  {
    period: '2023 – 2027',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Mar Athanasius College of Engineering (Autonomous), Kothamangalam',
    description: 'KTU 2019 scheme. Currently in S6/S7.',
  },
]

export const socials = [
  { icon: Mail, label: 'karthikjayan369@gmail.com', href: 'mailto:karthikjayan369@gmail.com' },
  { icon: Github, label: 'github.com/KARTHIKKJ369', href: 'https://github.com/KARTHIKKJ369' },
  { icon: Linkedin, label: 'linkedin.com/in/karthik-jayan', href: 'https://www.linkedin.com/in/karthik-jayan-8544ba267/' },
]
