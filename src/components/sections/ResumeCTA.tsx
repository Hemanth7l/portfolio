import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import MagneticButton from '@/components/ui/MagneticButton';
import GlassCard from '@/components/ui/GlassCard';

export default function ResumeCTA() {
  return (
    <section id="resume" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="text-center" padding="p-10 md:p-14">
            <div className="inline-flex p-3 rounded-xl bg-cyanBright/10 text-cyanBright mb-6">
              <FileText size={28} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-silverBright mb-3">
              Download My Resume
            </h2>
            <p className="text-textSecondary mb-8 max-w-md mx-auto">
              Get a detailed overview of my education, internships, skills, and projects in one document.
            </p>
            <MagneticButton href={portfolioData.personal.resumeUrl} variant="primary">
              <Download size={16} />
              Download CV
            </MagneticButton>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
