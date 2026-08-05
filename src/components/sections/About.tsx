import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import type { AboutStat } from '@/types';

const statIconMap = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  'map-pin': MapPin,
};

export default function About() {
  const { personal, aboutStats } = portfolioData;

  return (
    <section id="about" className="relative py-24 gsap-reveal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="about"
          title="About Me"
          subtitle="Passionate about AI, data, and building solutions that matter."
        />

        <div className="grid lg:grid-cols-[1fr_340px] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard>
              <p className="text-muted leading-relaxed text-lg mb-6">{personal.bio}</p>
              <p className="text-muted leading-relaxed text-sm mb-6 border-l-2 border-primary/30 pl-4">
                <span className="text-primary font-mono text-xs uppercase tracking-wider block mb-2">
                  Career Objective
                </span>
                {personal.careerObjective}
              </p>
              <div className="flex flex-wrap gap-3">
                {personal.aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {aboutStats.map(({ icon, label, value }: AboutStat) => {
              const Icon = statIconMap[icon];
              return (
                <GlassCard key={label} tilt={false} padding="p-5">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-cyanBright/10 text-cyanBright">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-textMuted font-mono uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-foreground font-medium">{value}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}

            <GlassCard tilt={false} padding="p-5">
              <p className="text-xs text-textMuted font-mono uppercase tracking-wider mb-2">
                My Motto
              </p>
              <p className="text-sm text-silverBright italic leading-relaxed">
                &ldquo;{personal.motto}&rdquo;
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
