'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'C++', 'C#', 'JavaScript (ES6+)', 'Java'],
  },
  {
    title: 'AI / ML Frameworks',
    skills: [
      'TensorFlow',
      'Keras',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'MediaPipe',
      'Gemini API',
    ],
  },
  {
    title: 'AI Concepts',
    skills: [
      'Reinforcement Learning',
      'Deep Q-Learning',
      'TinyML',
      'Edge AI',
      'Multimodal LLMs',
      'Computer Vision',
      'Generative AI',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      'React',
      'Node.js',
      'Express.js',
      'ASP.NET Core',
      'Spring Boot',
      'Tailwind CSS',
      'RESTful APIs',
      'JWT',
      'Stripe API',
    ],
  },
  {
    title: 'Databases & Cloud',
    skills: [
      'PostgreSQL',
      'SQL Server',
      'MongoDB',
      'Entity Framework Core',
    ],
  },
  {
    title: 'Tools & Methods',
    skills: ['Git', 'GitHub', 'VS Code', 'CI/CD', 'Agile', 'OOP', 'DSA'],
  },
];

function SkillCategory({ category, catIdx }: { category: any; catIdx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop View */}
      <motion.div
        className="hidden md:block"
      >
        <h3 className="text-xs font-mono text-[#8b949e] tracking-widest uppercase mb-4">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill: string) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Mobile Accordion */}
      <motion.div
        className="md:hidden glass-card overflow-hidden"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-[#161b22] hover:bg-[#1c2128] transition-colors focus:outline-none"
        >
          <span className="text-xs font-mono text-[#c9d1d9] tracking-widest uppercase">
            {category.title}
          </span>
          <ChevronDown
            size={16}
            className={`text-[#8b949e] transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 p-4 pt-0' : 'max-h-0 opacity-0 px-4'
          }`}
        >
          <div className="flex flex-wrap gap-2 mt-2">
            {category.skills.map((skill: string) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="section px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-[#58a6ff] tracking-widest uppercase mb-3">
            About
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#c9d1d9] leading-relaxed mb-4 max-w-3xl">
            Driven by a deep curiosity, I am always ready to <span className="text-white">learn and figure out</span> exactly how things tick.
          </p>
          <p className="text-base text-[#8b949e] leading-relaxed max-w-2xl mb-12">
            I consider myself a <span className="text-white font-semibold">versatile technologist</span>—a <span className="text-white font-semibold">"Jack of all trades, Master of none, but oftentimes better than a master of one."</span> From complex AI architectures to front-end UI, I embrace this breadth of knowledge to connect the dots across domains. I approach engineering challenges with persistence, enjoying the process of breaking down roadblocks until an elegant solution is found. I also have a natural appreciation for <span className="text-white font-semibold">structure and symmetry</span>, which extends to crafting perfectly aligned interfaces.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-sm font-mono text-[#58a6ff] tracking-widest uppercase mb-6">
            Education
          </h3>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 border-l-4 border-l-[#58a6ff]"
          >
            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-[#c9d1d9]">
                  B.Tech in Artificial Intelligence & Machine Learning
                </h4>
                <p className="text-[#8b949e] text-xs sm:text-sm mt-1">
                  Panipat Institute of Engineering and Technology
                </p>
              </div>
              <span className="text-xs font-mono text-[#8b949e] bg-[#21262d] px-3 py-1 rounded-full border border-[#30363d]">
                Present
              </span>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid / Mobile Accordions */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -150px 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                },
              }}
            >
              <SkillCategory category={category} catIdx={catIdx} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
