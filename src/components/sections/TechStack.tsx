import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="tech stack"
          title="Tools & Technologies"
          subtitle="Technologies and tools I use and am actively learning."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.techStack.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard tilt={false}>
                <h3 className="font-mono text-xs text-primary tracking-wider uppercase mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-medium text-muted bg-surface/50 border border-border rounded-lg hover:text-primary hover:border-primary/30 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
