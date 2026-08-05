import { motion } from 'framer-motion';
import { Sprout } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function LearningJourney() {
  return (
    <section id="learning-journey" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="learning journey"
          title="My Learning Journey"
          subtitle="Every step — from workshops to internships — shapes who I'm becoming."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyanBright/40 via-blueAccent/20 to-transparent" />

          <div className="space-y-6">
            {portfolioData.learningJourney.map((milestone, i) => (
              <motion.div
                key={milestone.title}
                className="relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="absolute left-0 top-5 w-[10px] h-[10px] rounded-full bg-cyanBright border-2 border-bgBase" />

                <GlassCard tilt={false} padding="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-400/10 text-green-400 shrink-0">
                      <Sprout size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-medium text-silverBright">{milestone.title}</h3>
                        {milestone.year && (
                          <span className="font-mono text-xs text-cyanBright">{milestone.year}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
