import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="soft skills"
          title="Soft Skills"
          subtitle="The personal strengths that complement my technical growth."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard tilt={false}>
            <div className="flex flex-wrap gap-3">
              {portfolioData.softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-textSecondary bg-white/5 border border-white/8 rounded-lg hover:text-cyanBright hover:border-cyanBright/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
