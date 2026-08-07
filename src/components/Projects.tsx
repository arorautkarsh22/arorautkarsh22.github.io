'use client';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';

const projects = [
  {
    title: 'Smart Traffic Management System',
    description:
      'Reinforcement Learning (Deep Q-Learning) platform to optimize urban traffic flow (Group Project). Achieved 25% reduction in traffic simulation delay with real-time data visualization dashboard.',
    tech: [
      'Python',
      'TensorFlow/Keras',
      'SUMO',
      'React',
      'MongoDB',
      'Node.js',
      'Tailwind CSS',
      'Raspberry Pi',
      'WebSockets',
    ],
    langDot: 'lang-python',
    langName: 'Python',
    github: 'https://github.com/arorautkarsh22/Smart-Traffic-Management-System-using-Reinforcement-learning',
    tags: ['Reinforcement Learning', 'Deep Q-Learning'],
  },
  {
    title: 'Diabetes Predictor',
    description:
      'ML-based diagnostic tool using Support Vector Machines on the Pima Indian Diabetes Dataset. Achieved 87% prediction accuracy with a user-friendly interface for instant risk assessments.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    langDot: 'lang-python',
    langName: 'Python',
    github: 'https://github.com/arorautkarsh22/Diabetes-Detector',
    tags: ['Machine Learning', 'SVM'],
  },
  {
    title: 'Roshni Creations',
    description:
      'Premium full-stack e-commerce platform (Group Project) with Gemini-powered conversational chatbot for intelligent customer support and WebAR virtual try-on feature for products.',
    tech: [
      'React',
      'Vite',
      'Spring Boot',
      'PostgreSQL',
      'Gemini API',
      'MediaPipe',
      'Stripe API',
    ],
    langDot: 'lang-javascript',
    langName: 'JavaScript',
    github: 'https://github.com/arorautkarsh22/roshni',
    tags: ['E-Commerce', 'AR', 'AI Chatbot'],
  },
  {
    title: 'Edge-AI Smart Irrigation System',
    description:
      'Hybrid Edge-Cloud IoT system serving majorly as an automated plant watering device. Combines TinyML on ESP32-S3 for sub-second irrigation actuation with MERN stack and multimodal LLMs.',
    tech: [
      'ESP32-S3',
      'TinyML',
      'C++',
      'Node.js',
      'MongoDB',
      'React Native',
      'MQTTS',
      'Gemini API',
    ],
    langDot: 'lang-cpp',
    langName: 'C++',
    github: null,
    tags: ['IoT', 'Edge-AI', 'TinyML'],
    inProgress: true,
  },
];

function ProjectCard({ project }: { project: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = (isMobileTruncated = false) => (
    <>
      {/* Header */}
      <div className="flex items-start justify-between mb-3 pr-6">
        <div className="flex items-center gap-2">
          <span className={`lang-dot ${project.langDot}`} />
          <span className="text-xs text-[#8b949e] font-mono">
            {project.langName}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {project.inProgress && (
            <span className="pulse-badge text-xs px-2 py-0.5 rounded-full bg-[rgba(35,134,54,0.1)] text-[#3fb950] border border-[rgba(35,134,54,0.4)] font-mono">
              In Progress
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#c9d1d9] mb-2">
        {project.title}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(88,166,255,0.1)] text-[#58a6ff] border border-[rgba(88,166,255,0.2)] font-medium uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p
        className={`text-sm text-[#8b949e] leading-relaxed mb-2 flex-grow ${
          isMobileTruncated ? 'line-clamp-3' : ''
        }`}
      >
        {project.description}
      </p>

      {isMobileTruncated && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-xs text-[#58a6ff] font-medium hover:underline mb-4 self-start"
        >
          Read more...
        </button>
      )}

      {/* Tech Stack */}
      <div className={`flex flex-wrap gap-1.5 mt-auto ${isMobileTruncated ? 'hidden' : 'flex'}`}>
        {project.tech.map((t: string) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md bg-[#21262d] text-[#8b949e] border border-[#30363d]"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <>
      <div className="glass-card p-6 h-full flex flex-col relative overflow-hidden">
        {/* Desktop full, Mobile truncated */}
        <div className="hidden md:flex md:flex-col md:h-full">{renderContent(false)}</div>
        <div className="md:hidden flex flex-col h-full">{renderContent(true)}</div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {renderContent(false)}
      </Modal>
    </>
  );
}

import { motion } from 'motion/react';

export default function Projects() {
  return (
    <section id="projects" className="section px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-[#58a6ff] tracking-widest uppercase mb-12">
          Projects
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -150px 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
