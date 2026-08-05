import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

function AnimatedBar({ level, name }: { level: number; name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = () => {
      start += 2;
      if (start >= level) {
        setDisplayLevel(level);
        return;
      }
      setDisplayLevel(start);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center gap-4">
        <span className="text-sm text-silverBright font-medium">{name}</span>
        <span className="text-xs font-mono text-cyanBright">{displayLevel}%</span>
      </div>
      <div className="h-3 rounded-full bg-surface/20 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent via-primary to-accent"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = [...new Set(portfolioData.skills.map((s) => s.category))];

  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="skills"
          title="Technical Skills"
          subtitle="Programming, AI & data skills I'm actively building through coursework and internships."
        />

        <div className="grid xl:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: catIdx * 0.1 }}
            >
              <GlassCard className="h-full p-8">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary mb-3">
                    {category}
                  </p>
                  <p className="text-foreground text-lg font-semibold">Core capabilities</p>
                </div>
                <div className="space-y-5">
                  {portfolioData.skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <AnimatedBar key={skill.name} name={skill.name} level={skill.level} />
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
