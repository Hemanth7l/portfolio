import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="education"
          title="Education"
          subtitle="My academic journey from school to B.Tech in AI & Data Science."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted text-sm mt-1">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-xs font-mono">
                  <span className="text-primary">{edu.period}</span>
                  <span className="flex items-center gap-1 text-muted">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                  {edu.gpa && (
                    <span className="text-accent">GPA: {edu.gpa}</span>
                  )}
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-textSecondary">
                      <span className="text-cyanBright mt-1 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
