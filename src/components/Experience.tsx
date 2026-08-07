'use client';
import { motion } from 'motion/react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';

const experiences = [
  {
    role: 'Intern',
    company: 'Power Grid Corporation of India Limited',
    period: 'June 2026 – July 2026',
    points: [
      'Engineered the I2P Portal, a full-stack role-based application for PowerGrid\'s HRD, streamlining maintenance order workflows and field data management.',
      'Architected back-end services using ASP.NET Core and EF Core, ensuring high availability and 100% data integrity through robust RBAC security protocols.',
      'Designed responsive, data-driven dashboards with Chart.js and Tailwind CSS, increasing field data entry efficiency by 40%.',
    ],
    tech: ['ASP.NET Core', 'EF Core', 'Chart.js', 'Tailwind CSS', 'RBAC'],
    certificate: '/certificates/PowerGrid_Certificate.pdf',
  },
  {
    role: 'Data Science & ML Intern',
    company: 'The BrainHub',
    period: 'June 2025 – August 2025',
    points: [
      'Leveraged Python and ML libraries (TensorFlow/Keras, Scikit-Learn, Pandas, NumPy) to build predictive models and analyze complex datasets.',
      'Applied advanced feature engineering and machine learning techniques to optimize model performance.',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas'],
    certificate: '/certificates/BrainHub_Certificate.png',
  },
  {
    role: 'Data Analytics Intern',
    company: 'Grades Global',
    period: 'June 2024 – August 2024',
    points: [
      'Automated reporting workflows using Python and PowerBI, transforming raw data into actionable insights for executive decision-making.',
      'Developed interactive data visualization dashboards and automated reporting workflows to communicate trends effectively.',
    ],
    tech: ['Python', 'PowerBI', 'Data Visualization'],
    certificate: '/certificates/Grades_Global_Certificate.png',
  },
];

function ExperienceCard({ exp, idx, isLast }: { exp: any; idx: number; isLast: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = (isMobileTruncated = false) => (
    <>
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <div className="pr-8">
          <h3 className="text-lg font-semibold text-[#c9d1d9]">{exp.role}</h3>
          <div className="flex items-center gap-2 text-[#8b949e] text-sm mt-1">
            <Briefcase size={14} />
            <span>{exp.company}</span>
          </div>
        </div>
        <span className="text-xs font-mono text-[#8b949e] bg-[#21262d] px-3 py-1 rounded-full whitespace-nowrap">
          {exp.period}
        </span>
      </div>

      <ul className="space-y-2 mb-4">
        {(isMobileTruncated ? exp.points.slice(0, 1) : exp.points).map((point: string, pIdx: number) => (
          <li key={pIdx} className="text-sm text-[#8b949e] leading-relaxed flex gap-2">
            <span className="text-[#58a6ff] mt-1.5 flex-shrink-0">▹</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {isMobileTruncated && exp.points.length > 1 && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-xs text-[#58a6ff] font-medium hover:underline mb-4"
        >
          Read more...
        </button>
      )}

      <div className={`flex flex-wrap gap-2 mb-4 ${isMobileTruncated && exp.points.length > 1 ? 'hidden' : 'flex'}`}>
        {exp.tech.map((t: string) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md bg-[rgba(88,166,255,0.1)] text-[#58a6ff] border border-[rgba(88,166,255,0.2)]"
          >
            {t}
          </span>
        ))}
      </div>

      {exp.certificate && (
        <a
          href={exp.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className={`items-center gap-2 text-xs font-mono text-[#58a6ff] hover:text-[#c9d1d9] transition-colors ${isMobileTruncated && exp.points.length > 1 ? 'hidden' : 'inline-flex'}`}
        >
          <ExternalLink size={14} />
          View Certificate
        </a>
      )}
    </>
  );

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        visible: {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        },
      }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full bg-[#0d1117] border-2 border-[#58a6ff] z-10" />
      {!isLast && <div className="timeline-line" />}

      <div className="glass-card p-6">
        <div className="hidden md:block">{renderContent(false)}</div>
        <div className="md:hidden">{renderContent(true)}</div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {renderContent(false)}
      </Modal>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-[#58a6ff] tracking-widest uppercase mb-12">
            Experience
          </h2>
        </motion.div>

        <motion.div
          className="relative"
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
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              exp={exp}
              idx={idx}
              isLast={idx === experiences.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
