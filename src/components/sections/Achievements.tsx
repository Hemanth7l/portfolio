import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="achievements"
          title="Highlights"
          subtitle="Internships, workshops, and competitions that mark my growth."
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {portfolioData.achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard tilt={false} padding="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-warning/10 text-warning shrink-0">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                      <span className="font-mono text-xs text-primary">{item.year}</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
