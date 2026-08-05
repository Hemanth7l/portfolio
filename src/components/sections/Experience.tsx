import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 gsap-reveal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="experience"
          title="Experience"
          subtitle="Hands-on internship experience in data analytics and data science."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="relative md:pl-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="absolute left-0 top-6 w-[10px] h-[10px] rounded-full bg-primary border-2 border-background hidden md:block" />

                <GlassCard>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {exp.role}
                        {exp.current && (
                          <span className="ml-2 px-2 py-0.5 text-xs font-mono text-green-400 bg-green-400/10 border border-green-400/20 rounded-full align-middle">
                            Current
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-muted text-sm">
                        <Building2 size={14} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs text-primary">{exp.period}</span>
                      <div className="flex items-center gap-1 mt-1 text-muted text-xs justify-end">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
